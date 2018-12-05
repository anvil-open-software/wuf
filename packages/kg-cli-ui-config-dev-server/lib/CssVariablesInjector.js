/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

const UiConfigDatabase = require("./uiconfig-runner/UiConfigDatabase");

let uiDataBaseRunner = new UiConfigDatabase();

/**
 * @class
 */
class CssVariablesInjector {

    /**
     * @constructor
     */
    constructor () {
        this.attachPromise = uiDataBaseRunner.attachDatabase();
    }

    /**
     * Parses a css or scss variables string and returns a map of variable to value.
     * This map can be passed into @link(CssVariablesInjector~addCssVariables).
     *
     * @param {string} cssString -
     *
     * String that contains css and/or scss variables. It will ignore any styles and only pull out defined variables.
     *
     * <p>
     * Example, given String:
     *
     * $scssVar1:       black;
     * --css-var-1:     red;
     *
     * body {
     *      background:         $scssVar1;
     *      color:              var(--css-var-1);
     *      $nestedScssVar:     lighten($scssVar1, 10%);
     *      --nested-css-var:   green;
     * }
     *
     * Function will return:
     *
     * {
     *      '$scssVar1':            'black',
     *      '--css-var-1':          'red',
     *      '$nestedScssVar':       'lighten($scssVar1, 10%)',
     *      '--nested-css-var':     'green'
     * }
     * </p>
     *
     * @returns {Object} - Map of variables to value.
     */
    parseCssVariablesFromCssString (cssString) {
        let lines = cssString.split("\n");
        let cssVariables = {};

        lines.forEach((line) => {
            let cssParts = /^\s*((?:--|\$)[^/].+)\s*:\s*(.+)\s*;/g.exec(line);
            if (cssParts != null && cssParts.length == 3) {
                cssVariables[cssParts[1]] = cssParts[2];
            }
        });

        return cssVariables;
    }

    /**
     * Deletes all the common css variables out of the running dev ui config service.
     *
     * @returns {Promise} - Resolved when the table has been cleared. Rejected if there is an error.
     */
    clearCssVariables () {
        return new Promise((resolve, reject) => {
            this.attachPromise
                .then(() => {
                    let deleteStatement =
                        "DELETE FROM " +
                            "UI_RESOURCE " +
                        "WHERE " +
                            "UI_RESOURCE_BUNDLE_ID = (" +
                                "SELECT ID " +
                                "FROM UI_RESOURCE_BUNDLE " +
                                "WHERE NAME = 'common-css-variables' " +
                            "); COMMIT;";

                    return uiDataBaseRunner.runSqlStatement(deleteStatement);
                })

                .then(resolve)

                .catch(reject);
        });
    }

    /**
     * Formats a value to be inserted into the database.
     *
     * Sets ' to '' for escaping.
     *
     * @param {string} value Value to format.
     *
     * @returns {string} formatted value.
     */
    static _formatValueForInsert(value) {
        return value.replace("'", "''");
    }

    /**
     * Inserts css or scss variables into the running dev ui config service.
     *
     * @param {Object} cssVariables - Css or scss variables to add.
     * @param {Object.VARIABLE_NAME} cssVariables -
     *
     * The object key (VARIABLE_NAME) is the name of the css or scss variable to insert. <br />
     * THe value of (VARIABLE_NAME) is the value of the css or scss variable to insert.
     *
     * @returns {Promise} - Promise that is resolved when all variables are inserted. Rejected if there is an error.
     */
    addCssVariables (cssVariables) {
        return new Promise((resolve, reject) => {
            this.attachPromise
                .then(() => {
                    let maxStatementSize = 1024;
                    let statements = [];
                    let commitStatement = "COMMIT;";
                    let statementCount = 0;

                    let batchInsertStatement = "";

                    for (let key in cssVariables) {
                        let insertStatement =
                            "INSERT INTO " +
                                "UI_RESOURCE " +
                                "(ID, UI_RESOURCE_BUNDLE_ID, NAME, VALUE, CREATE_DATE, CREATE_USER) " +
                            "VALUES " +
                                "(UUID(), ( " +
                                    "SELECT ID " +
                                    "FROM UI_RESOURCE_BUNDLE " +
                                    "WHERE NAME = 'common-css-variables' " +
                                "), " +
                                "'" + CssVariablesInjector._formatValueForInsert(key) + "', " +
                                "'" + CssVariablesInjector._formatValueForInsert(cssVariables[key]) + "', NOW(), 'CssVariablesInjector');"

                        if ((batchInsertStatement.length + insertStatement.length + commitStatement.length) > maxStatementSize) {
                            console.debug("Max statement reached with " + (batchInsertStatement.length + commitStatement.length) + " characters, creating new batch.");
                            statements.push(batchInsertStatement + commitStatement);
                            batchInsertStatement = "";
                        }

                        batchInsertStatement += insertStatement;
                        statementCount++;
                    }

                    statements.push(batchInsertStatement + commitStatement);

                    console.debug("Processing " + statements.length + " batches with " + statementCount + " css variable insert statements.");

                    let previousPromise = null;

                    statements.forEach((statement) => {
                        if (previousPromise == null) {
                            previousPromise = uiDataBaseRunner.runSqlStatement(statement);
                        } else {
                            previousPromise.then(() => {
                                return uiDataBaseRunner.runSqlStatement(statement);
                            });
                        }
                    });

                    return previousPromise;
                })

                .then(resolve)

                .catch(reject);
        });
    }
}

module.exports = CssVariablesInjector;

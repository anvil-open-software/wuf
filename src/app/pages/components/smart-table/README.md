Documentation of Smart Table Component
====================================================

The wuf-smart-table component is a table-based component customized from ng2-smart-table.
You can find the original ng2-smart-table documentation [here](https://akveo.github.io/ng2-smart-table/#/demo)


Table Documentation
-----------------------
The table documentation is based on the original ng2-smart-table documentation from [here](https://akveo.github.io/ng2-smart-table/#/documentation)

***NOTE:*** For Add/Delete/Edit actions, if you want to confirm changes before they applied to the wuf-smart-table, please add confirmCreate: true/confirmDelete: true/confirmSave: true to the settings object, you can find the example in smart-table.component.ts

***NOTE:*** For using multi-select mode, please add selectMode: 'multi' in the settings object, you can find the example in smart-table.component.ts

### Custom-editor and Custom-render Components

The wuf-smart-table component provides custom-editor and custom-render components for user to customize their EDIT and VIEW cell.
You can find two simple examples in custom-editor.smart-table.for-foods.component.ts and custom-render.smart-table.for-grade.component.ts.

***NOTE:*** For settings configuration of custom-editor and custom-render components , you can refer to the settings in the smart-table.component.ts, don't forget to add type: 'custom' first

***NOTE:*** When implementing a custom editor or renderer remember to add it to the entryComponents and to the declarations part of your module

***NOTE:*** For the custom cell editor, to inherit the methods needed to interact with the table you can either extend the component with the WufSmartTableDefaultEditor class or implement the Editor interface and reproduce the same methods on your component.

***NOTE:*** For the custom cell renderer, in this example the custom component is applying for a progressbar to Grade column. You can implement the WufSmartTableViewCell interface to make sure you are setting up your component correctly.

***NOTE:*** For the cell validation, you can look at custom-editor.smart-table.for-name-validation.component.ts and custom-editor.smart-table.for-id-validation.component.ts as two easy examples. and We also need to generate a validation service mapping the FormGroup and FormControl to the "Name" column and "ID" column and add validators in it. The mapped validation service is smart-table-validator.service.ts.

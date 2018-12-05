/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/*
 * Public API Surface of kg-ang-smart-table
 */

export * from './lib/smart-table.component';
export * from './lib/smart-table.module';

// TODO: change the following to use the "kg" prefix
export { KgSmartTableLocalDataSource } from './lib/lib/data-source/local/local.data-source';
export { KgSmartTableValidatorService } from './lib/lib/validator.service';
export { KgSmartTableDefaultEditor, KgSmartTableEditor } from './lib/components/cell/cell-editors/default-editor';
export { KgSmartTableViewCell } from './lib/components/cell/cell-view-mode/view-cell';
export { KgSmartTableCell } from './lib/lib/data-set/cell';
export { KgSmartTableServerDataSource } from './lib/lib/data-source/server/server.data-source';

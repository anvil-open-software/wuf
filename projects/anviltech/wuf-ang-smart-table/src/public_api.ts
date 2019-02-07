/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

/*
 * Public API Surface of wuf-ang-smart-table
 */

export * from './lib/smart-table.component';
export * from './lib/smart-table.module';

// TODO: change the following to use the "kg" prefix
export { WufSmartTableLocalDataSource } from './lib/lib/data-source/local/local.data-source';
export { WufSmartTableValidatorService } from './lib/lib/validator.service';
export { WufSmartTableDefaultEditor, WufSmartTableEditor } from './lib/components/cell/cell-editors/default-editor';
export { WufSmartTableViewCell } from './lib/components/cell/cell-view-mode/view-cell';
export { WufSmartTableCell } from './lib/lib/data-set/cell';
export { WufSmartTableServerDataSource } from './lib/lib/data-source/server/server.data-source';

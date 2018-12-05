import { NgModule } from '@angular/core';
import { LogoutScreenComponent } from './logout.screen.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    exports: [LogoutScreenComponent],
    declarations: [LogoutScreenComponent],
    entryComponents: [ LogoutScreenComponent ]
})
export class LogoutScreenModule {
}

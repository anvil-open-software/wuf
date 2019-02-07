/*
 * Copyright (c) 2018 Dematic, Corp.
 * Licensed under the MIT Open Source: https://opensource.org/licenses/MIT
 */

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-layout-main-basic',
    templateUrl: './main-basic.component.html',
    styleUrls: ['./main-basic.component.scss']
})
export class LayoutMainBasicComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    mainCodeHtml = `
    <wuf-view-main [logoRoute]="logoRoute">
        <ng-container sidebarNavigation>
            <wuf-navigation [data]="navData"></wuf-navigation>
        </ng-container>
    
        <ng-container sidebarFooter>
            <wuf-sidebar-footer></wuf-sidebar-footer>
        </ng-container>
    
        <ng-container toolbarLeft>
            <!--Optionally add app-level title here-->
            [Application Name]
        </ng-container>
    
        <ng-container toolbarRight>
            <!--Add app-level utilities here-->
        </ng-container>
    
        <ng-container main>
            <router-outlet></router-outlet>
        </ng-container>
    </wuf-view-main>
    `;

    mainCodeComponent = `
    import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
    import { WufNavigationService } from '@anviltech/wuf-ang-navigation';
    import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';
    import { WufDrawerService } from '@anviltech/wuf-ang-drawer';
    
    @Component({
        selector: 'app-layout-main',
        templateUrl: './main.component.html',
        styleUrls: ['./main.component.scss'],
        providers: [WufThemeService, ThemeListService],
        encapsulation: ViewEncapsulation.Emulated
    })
    export class LayoutMainComponent implements OnInit {
    
        // Set the URL from which to fetch the routes/navigation data object.
        navDataUrl: string = '/api/navigation';
        navData: any;
        logoRoute: string = '/'; // Route path to take users when clicking on header logo
    
        constructor(private navService: WufNavigationService) {
        }
    
        ngOnInit() {
            // Fetch nav data
            this.navService.getNavData(this.navDataUrl)
                .subscribe(
                    results => {
                        this.navData = results.data.links;
                    },
                    err => {
                        console.log('Error retrieving nav data:', err);
                    }
                );
        }
    
    }
    `;

    basicCodeHtml = `
    <wuf-view-basic>
        <ng-container main>
            <router-outlet></router-outlet>
        </ng-container>
    </wuf-view-basic>
    `;

    basicCodeComponent = `
    import { Component, OnInit, ViewEncapsulation } from '@angular/core';


    @Component({
        selector: 'app-layout-basic',
        templateUrl: './basic.component.html',
        styleUrls: ['./basic.component.scss'],
        encapsulation: ViewEncapsulation.Emulated
    })
    export class LayoutBasicComponent implements OnInit {
    
        constructor() {
        }
    
        ngOnInit() {
        }
    
    }

    `;

    layoutsModuleCode = `
    import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ModuleWithProviders } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from '@angular/router';
    
    /***** Import WUF *****/
    import { WufConfigurationService } from '@anviltech/wuf-ang-configuration';
    import { WufLayoutModule } from '@anviltech/wuf-ang-layout';
    import { WufDrawerModule } from '@anviltech/wuf-ang-drawer';
    import { WufNavigationModule } from '@anviltech/wuf-ang-navigation';
    
    /***** 3rd Party *****/
    import { MatTooltipModule } from '@angular/material';
    import { CustomMaterialModule } from '../../internal/material.module';
    
    /***** Local layout components *****/
    import { LayoutMainComponent } from './main/main.component';
    import { LayoutBasicComponent } from './basic/basic.component';
    
    /***** Exports *****/
    export { LayoutMainComponent } from './main/main.component';
    export { LayoutBasicComponent } from './basic/basic.component';
    
    @NgModule({
        schemas: [
            CUSTOM_ELEMENTS_SCHEMA
        ],
        imports: [
            CommonModule,
            RouterModule,
            CustomMaterialModule,
    
            // WUF
            WufLayoutModule,
            WufDrawerModule,
            WufNavigationModule
        ],
        declarations: [
            LayoutMainComponent,
            LayoutBasicComponent
        ]
    })
    export class LayoutsModule {}
    `;

    routesCode = `
    // Pages with main layout (header, footer, nav, content area)
    const routes_layout_main = [
        { path: 'mypage', component: MyPageComponent, pathMatch: 'full' },
        { path: '', component: DefaultPageComponent, pathMatch: 'full' }
    ];
    
    // Pages with basic layout (no header, footer, or nav)
    const routes_layout_basic = [
    ];
    
    const routes = [
        {
            path: '',
            children: [
                {
                    path: '',
                    component: LayoutMainComponent,
                    children: routes_layout_main
                },
                {
                    path: '',
                    component: LayoutBasicComponent,
                    children: routes_layout_basic
                }
            ]
        }
    ];
    
    @NgModule({
        imports: [
            CommonModule,
            LayoutsModule,
            RouterModule.forChild(routes)
        ]
    })
    `;

    routesCode2 = `
    // Pages with main layout (header, footer, nav, content area)
    const routes_layout_main = [
        { path: '', component: DefaultPageComponent, pathMatch: 'full' }
    ];
    
    // Pages with basic layout (no header, footer, or nav)
    const routes_layout_basic = [
        { path: 'mypage', component: MyPageComponent, pathMatch: 'full' },
    ];
    `;
}

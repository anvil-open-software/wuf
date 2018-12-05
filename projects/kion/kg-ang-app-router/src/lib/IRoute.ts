export interface IChildRoute {
    readonly implIChildRoute: boolean;
    readonly path: string;
    readonly dynamicPath?: string;
    readonly label: string;
    readonly materialDesignIconId?: string;
    readonly activeOptions?: any;
    readonly component: any;
}

export interface IRoute {
    readonly implIRoutes: boolean;
    readonly path: string;
    readonly label: string;
    readonly materialDesignIconId?: string;
    readonly activeOptions?: any;
    readonly component?: any;
    readonly childRoutes?: IChildRoute[];
}

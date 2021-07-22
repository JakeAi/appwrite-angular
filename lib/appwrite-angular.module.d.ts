import { ModuleWithProviders, Provider } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
export * from './exceptions';
export * from './services';
export * from './tokens';
export * from './types';
export * from './util';
export interface AppwriteOptions {
    appwriteOptionsProvider?: Provider;
    config?: {
        endpointUrl: string;
        projectId: string;
    };
}
export declare class AppwriteAngularModule {
    static forRoot(options: AppwriteOptions): ModuleWithProviders<AppwriteAngularModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppwriteAngularModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AppwriteAngularModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AppwriteAngularModule>;
}

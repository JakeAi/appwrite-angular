import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppwriteAccountService, AppwriteAvatarService, AppwriteDocumentsService, AppwriteFunctionsService, AppwriteLocaleService, AppwriteService, AppwriteStorageService, AppwriteTeamsService } from './services';
import { APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN, APPWRITE_OPTIONS_TOKEN } from './tokens';
import { APPWRITE_LOCATION_PROVIDER_TOKEN } from './tokens/appwrite-location-provider.token';
import * as i0 from "@angular/core";
export * from './exceptions';
export * from './services';
export * from './tokens';
export * from './types';
export * from './util';
export class AppwriteAngularModule {
    static forRoot(options) {
        return {
            ngModule: AppwriteAngularModule,
            providers: [
                options.appwriteOptionsProvider || { provide: APPWRITE_OPTIONS_TOKEN, useValue: options.config },
                { provide: APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN, useFactory: () => window.localStorage },
                { provide: APPWRITE_LOCATION_PROVIDER_TOKEN, useFactory: () => window.location },
                AppwriteService,
                AppwriteAccountService,
                AppwriteAvatarService,
                AppwriteDocumentsService,
                AppwriteFunctionsService,
                AppwriteLocaleService,
                AppwriteStorageService,
                AppwriteTeamsService,
            ],
        };
    }
}
AppwriteAngularModule.ɵfac = function AppwriteAngularModule_Factory(t) { return new (t || AppwriteAngularModule)(); };
AppwriteAngularModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppwriteAngularModule });
AppwriteAngularModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[CommonModule, HttpClientModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppwriteAngularModule, { imports: [CommonModule, HttpClientModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteAngularModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [CommonModule, HttpClientModule],
                providers: [],
                exports: [],
            }]
    }], null, null); })();
//# sourceMappingURL=appwrite-angular.module.js.map
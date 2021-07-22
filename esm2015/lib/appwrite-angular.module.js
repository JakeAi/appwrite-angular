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
AppwriteAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AppwriteAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteAngularModule, imports: [CommonModule, HttpClientModule] });
AppwriteAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteAngularModule, providers: [], imports: [[CommonModule, HttpClientModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, HttpClientModule],
                    providers: [],
                    exports: [],
                }]
        }] });
//# sourceMappingURL=appwrite-angular.module.js.map
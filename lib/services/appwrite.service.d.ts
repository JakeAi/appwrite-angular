import { HttpBackend } from '@angular/common/http';
import { AppwriteOptions } from '../appwrite-angular.module';
import { Headers, HttpMethods, Payload } from '../types';
import * as i0 from "@angular/core";
export declare class AppwriteService {
    localStorageProvider: any;
    locationProvider: any;
    config: {
        endpoint: string;
        project: string;
        jwt: string;
        locale: string;
    };
    headers: Headers;
    private http;
    constructor(config: AppwriteOptions['config'], localStorageProvider: any, locationProvider: any, httpBackend: HttpBackend);
    setEndpoint(endpoint: string): this;
    setProject(value: string): this;
    setJWT(value: string): this;
    setLocale(value: string): this;
    call<T>(method: HttpMethods, path: string, headers?: Headers, params?: Payload): Promise<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppwriteService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppwriteService>;
}

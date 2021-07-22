import { __awaiter } from "tslib";
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import URLParse from 'url-parse';
import { APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN } from '../appwrite-angular.module';
import { AppwriteException } from '../exceptions';
import { APPWRITE_LOCATION_PROVIDER_TOKEN, APPWRITE_OPTIONS_TOKEN } from '../tokens';
import { flatten } from '../util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AppwriteService {
    constructor(config, localStorageProvider, locationProvider, httpBackend) {
        this.localStorageProvider = localStorageProvider;
        this.locationProvider = locationProvider;
        this.config = {
            endpoint: 'https://appwrite.io/v1',
            project: '',
            jwt: '',
            locale: '',
        };
        this.headers = {
            'x-sdk-version': 'appwrite:web:3.2.0',
            'X-Appwrite-Response-Format': '0.9.0',
        };
        this.http = new HttpClient(httpBackend);
        if (!config || !config.endpointUrl || !config.endpointUrl) {
            throw new Error('You are missing required config properties');
        }
        this.config.endpoint = config.endpointUrl;
        this.config.project = config.projectId;
        this.setEndpoint(config.endpointUrl).setProject(config.projectId);
    }
    setEndpoint(endpoint) {
        this.config.endpoint = endpoint;
        return this;
    }
    setProject(value) {
        this.headers['X-Appwrite-Project'] = value;
        this.config.project = value;
        return this;
    }
    setJWT(value) {
        this.headers['X-Appwrite-JWT'] = value;
        this.config.jwt = value;
        return this;
    }
    setLocale(value) {
        this.headers['X-Appwrite-Locale'] = value;
        this.config.locale = value;
        return this;
    }
    call(method, path, headers = {}, params = {}) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URLParse(this.config.endpoint + path);
            method = method.toUpperCase();
            headers = Object.assign(Object.assign({}, headers), this.headers);
            const options = {
                method,
                headers,
                credentials: 'include'
            };
            if (typeof this.localStorageProvider !== 'undefined' && this.localStorageProvider) {
                headers['X-Fallback-Cookies'] = (_a = this.localStorageProvider.getItem('cookieFallback')) !== null && _a !== void 0 ? _a : '';
            }
            if (method === 'GET') {
                url.set('query', flatten(params));
            }
            else {
                switch (headers['content-type']) {
                    case 'application/json':
                        options.body = JSON.stringify(params);
                        break;
                    case 'multipart/form-data':
                        const formData = new FormData();
                        for (const key in params) {
                            if (Array.isArray(params[key])) {
                                formData.append(key + '[]', params[key].join(','));
                            }
                            else {
                                formData.append(key, params[key]);
                            }
                        }
                        options.body = formData;
                        delete headers['content-type'];
                        break;
                }
            }
            try {
                const response = yield this.http.request(method, url.toString(), Object.assign(Object.assign({}, options), { headers: headers, 
                    // observe: 'response',
                    observe: 'response' })).toPromise();
                let data = null;
                if ((_b = response.headers.get('content-type')) === null || _b === void 0 ? void 0 : _b.includes('application/json')) {
                    data = response.body;
                }
                else {
                    data = {
                        message: response.body
                    };
                }
                if (400 <= response.status) {
                    throw new AppwriteException(data === null || data === void 0 ? void 0 : data.message, response.status, data);
                }
                const cookieFallback = response.headers.get('X-Fallback-Cookies');
                if (typeof this.localStorageProvider !== 'undefined' && this.localStorageProvider && cookieFallback) {
                    console.warn('Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.');
                    this.localStorageProvider.setItem('cookieFallback', cookieFallback);
                }
                return data;
            }
            catch (e) {
                throw new AppwriteException(e.message);
            }
        });
    }
}
AppwriteService.ɵfac = function AppwriteService_Factory(t) { return new (t || AppwriteService)(i0.ɵɵinject(APPWRITE_OPTIONS_TOKEN), i0.ɵɵinject(APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN), i0.ɵɵinject(APPWRITE_LOCATION_PROVIDER_TOKEN), i0.ɵɵinject(i1.HttpBackend)); };
AppwriteService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteService, factory: AppwriteService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [APPWRITE_OPTIONS_TOKEN]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [APPWRITE_LOCATION_PROVIDER_TOKEN]
            }] }, { type: i1.HttpBackend }]; }, null); })();
//# sourceMappingURL=appwrite.service.js.map
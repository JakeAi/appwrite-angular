import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
import * as i1 from "./";
export class AppwriteLocaleService {
    constructor(appwriteService) {
        this.appwriteService = appwriteService;
    }
    /**
     * Get User Locale
     *
     * Get the current user location based on IP. Returns an object with user
     * country code, country name, continent name, continent code, ip address and
     * suggested currency. You can use the locale header to get the data in a
     * supported language.
     *
     * ([IP Geolocation by DB-IP](https://db-ip.com))
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/locale';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * List Continents
     *
     * List of all continents. You can use the locale header to get the data in a
     * supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getContinents() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/locale/continents';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * List Countries
     *
     * List of all countries. You can use the locale header to get the data in a
     * supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/locale/countries';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * List EU Countries
     *
     * List of all countries that are currently members of the EU. You can use the
     * locale header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCountriesEU() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/locale/countries/eu';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * List Countries Phone Codes
     *
     * List of all countries phone codes. You can use the locale header to get the
     * data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCountriesPhones() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/locale/countries/phones';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * List Currencies
     *
     * List of all currencies, including currency symbol, name, plural, and
     * decimal digits for all major and minor currencies. You can use the locale
     * header to get the data in a supported language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/locale/currencies';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * List Languages
     *
     * List of all languages classified by ISO 639-1 including 2-letter code, name
     * in English, and name in the respective language.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getLanguages() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/locale/languages';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
}
AppwriteLocaleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteLocaleService, deps: [{ token: i1.AppwriteService }], target: i0.ɵɵFactoryTarget.Injectable });
AppwriteLocaleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteLocaleService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteLocaleService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AppwriteService }]; } });
//# sourceMappingURL=appwrite-locale.service.js.map
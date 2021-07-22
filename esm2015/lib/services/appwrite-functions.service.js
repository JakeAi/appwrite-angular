import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { AppwriteException } from '../exceptions';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
import * as i1 from "./";
export class AppwriteFunctionsService {
    constructor(appwriteService) {
        this.appwriteService = appwriteService;
    }
    /**
     * List Executions
     *
     * Get a list of all the current user function execution logs. You can use the
     * query params to filter your results. On admin mode, this endpoint will
     * return a list of all of the project's executions. [Learn more about
     * different API modes](/docs/admin).
     *
     * @param {string} functionId
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listExecutions(functionId, search, limit, offset, orderType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof functionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "functionId"');
            }
            const path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
            const payload = {};
            if (typeof search !== 'undefined') {
                payload['search'] = search;
            }
            if (typeof limit !== 'undefined') {
                payload['limit'] = limit;
            }
            if (typeof offset !== 'undefined') {
                payload['offset'] = offset;
            }
            if (typeof orderType !== 'undefined') {
                payload['orderType'] = orderType;
            }
            return yield this.appwriteService.call('GET', path, { 'content-type': 'application/json', }, payload);
        });
    }
    /**
     * Create Execution
     *
     * Trigger a function execution. The returned object will return you the
     * current execution status. You can ping the `Get Execution` endpoint to get
     * updates on the current execution status. Once this endpoint is called, your
     * function execution process will start asynchronously.
     *
     * @param {string} functionId
     * @param {string} data
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createExecution(functionId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof functionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "functionId"');
            }
            const path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
            const payload = {};
            if (typeof data !== 'undefined') {
                payload['data'] = data;
            }
            return yield this.appwriteService.call('POST', path, { 'content-type': 'application/json', }, payload);
        });
    }
    /**
     * Get Execution
     *
     * Get a function execution log by its unique ID.
     *
     * @param {string} functionId
     * @param {string} executionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getExecution(functionId, executionId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof functionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "functionId"');
            }
            if (typeof executionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "executionId"');
            }
            const path = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId)
                .replace('{executionId}', executionId);
            const payload = {};
            return yield this.appwriteService.call('GET', path, { 'content-type': 'application/json', }, payload);
        });
    }
}
AppwriteFunctionsService.ɵfac = function AppwriteFunctionsService_Factory(t) { return new (t || AppwriteFunctionsService)(i0.ɵɵinject(i1.AppwriteService)); };
AppwriteFunctionsService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteFunctionsService, factory: AppwriteFunctionsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteFunctionsService, [{
        type: Injectable
    }], function () { return [{ type: i1.AppwriteService }]; }, null); })();
//# sourceMappingURL=appwrite-functions.service.js.map
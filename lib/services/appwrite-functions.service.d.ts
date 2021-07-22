import { Execution, ExecutionsList } from '@appwrite/common';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
export declare class AppwriteFunctionsService<T = Execution> {
    private appwriteService;
    constructor(appwriteService: AppwriteService);
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
    listExecutions(functionId: string, search?: string, limit?: number, offset?: number, orderType?: string): Promise<ExecutionsList>;
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
    createExecution(functionId: string, data?: string): Promise<T>;
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
    getExecution(functionId: string, executionId: string): Promise<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppwriteFunctionsService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppwriteFunctionsService<any>>;
}

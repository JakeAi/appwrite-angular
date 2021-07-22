import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { AppwriteException } from '../exceptions';
import { AppwriteService } from './appwrite.service';
import * as i0 from "@angular/core";
import * as i1 from "./appwrite.service";
export class AppwriteDocumentsService {
    constructor(appwriteService) {
        this.appwriteService = appwriteService;
    }
    /**
     * List Documents
     *
     * Get a list of all the user documents. You can use the query params to
     * filter your results. On admin mode, this endpoint will return a list of all
     * of the project's documents. [Learn more about different API
     * modes](/docs/admin).
     *
     * @param {string} collectionId
     * @param {string[]} filters
     * @param {number} limit
     * @param {number} offset
     * @param {string} orderField
     * @param {string} orderType
     * @param {string} orderCast
     * @param {string} search
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listDocuments(collectionId, filters, limit, offset, orderField, orderType, orderCast, search) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof collectionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "collectionId"');
            }
            const path = '/database/collections/{collectionId}/documents'.replace('{collectionId}', collectionId);
            const payload = {};
            if (typeof filters !== 'undefined') {
                payload['filters'] = filters;
            }
            if (typeof limit !== 'undefined') {
                payload['limit'] = limit;
            }
            if (typeof offset !== 'undefined') {
                payload['offset'] = offset;
            }
            if (typeof orderField !== 'undefined') {
                payload['orderField'] = orderField;
            }
            if (typeof orderType !== 'undefined') {
                payload['orderType'] = orderType;
            }
            if (typeof orderCast !== 'undefined') {
                payload['orderCast'] = orderCast;
            }
            if (typeof search !== 'undefined') {
                payload['search'] = search;
            }
            return this.appwriteService.call('GET', path, { 'content-type': 'application/json', }, payload);
        });
    }
    /**
     * Create Document
     *
     * Create a new Document. Before using this route, you should create a new
     * collection resource using either a [server
     * integration](/docs/server/database#databaseCreateCollection) API or
     * directly from your database console.
     *
     * @param {string} collectionId
     * @param {object} data
     * @param {string[]} read
     * @param {string[]} write
     * @param {string} parentDocument
     * @param {string} parentProperty
     * @param {string} parentPropertyType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createDocument(collectionId, data, read, write, parentDocument, parentProperty, parentPropertyType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof collectionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "collectionId"');
            }
            if (typeof data === 'undefined') {
                throw new AppwriteException('Missing required parameter: "data"');
            }
            const path = '/database/collections/{collectionId}/documents'.replace('{collectionId}', collectionId);
            const payload = {};
            if (typeof data !== 'undefined') {
                payload['data'] = data;
            }
            if (typeof read !== 'undefined') {
                payload['read'] = read;
            }
            if (typeof write !== 'undefined') {
                payload['write'] = write;
            }
            if (typeof parentDocument !== 'undefined') {
                payload['parentDocument'] = parentDocument;
            }
            if (typeof parentProperty !== 'undefined') {
                payload['parentProperty'] = parentProperty;
            }
            if (typeof parentPropertyType !== 'undefined') {
                payload['parentPropertyType'] = parentPropertyType;
            }
            return this.appwriteService.call('POST', path, { 'content-type': 'application/json', }, payload);
        });
    }
    /**
     * Get Document
     *
     * Get a document by its unique ID. This endpoint response returns a JSON
     * object with the document data.
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getDocument(collectionId, documentId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof collectionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "collectionId"');
            }
            if (typeof documentId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "documentId"');
            }
            const path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId)
                .replace('{documentId}', documentId);
            const payload = {};
            return this.appwriteService.call('GET', path, { 'content-type': 'application/json', }, payload);
        });
    }
    /**
     * Update Document
     *
     * Update a document by its unique ID. Using the patch method you can pass
     * only specific fields that will get updated.
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @param {object} data
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateDocument(collectionId, documentId, data, read, write) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof collectionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "collectionId"');
            }
            if (typeof documentId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "documentId"');
            }
            if (typeof data === 'undefined') {
                throw new AppwriteException('Missing required parameter: "data"');
            }
            const path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId)
                .replace('{documentId}', documentId);
            const payload = {};
            if (typeof data !== 'undefined') {
                payload['data'] = data;
            }
            if (typeof read !== 'undefined') {
                payload['read'] = read;
            }
            if (typeof write !== 'undefined') {
                payload['write'] = write;
            }
            return this.appwriteService.call('PATCH', path, { 'content-type': 'application/json', }, payload);
        });
    }
    /**
     * Delete Document
     *
     * Delete a document by its unique ID. This endpoint deletes only the parent
     * documents, its attributes and relations to other documents. Child documents
     * **will not** be deleted.
     *
     * @param {string} collectionId
     * @param {string} documentId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteDocument(collectionId, documentId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof collectionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "collectionId"');
            }
            if (typeof documentId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "documentId"');
            }
            const path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId)
                .replace('{documentId}', documentId);
            const payload = {};
            return this.appwriteService.call('DELETE', path, { 'content-type': 'application/json', }, payload);
        });
    }
}
AppwriteDocumentsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteDocumentsService, deps: [{ token: i1.AppwriteService }], target: i0.ɵɵFactoryTarget.Injectable });
AppwriteDocumentsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteDocumentsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteDocumentsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AppwriteService }]; } });
//# sourceMappingURL=appwrite-documents.service.js.map
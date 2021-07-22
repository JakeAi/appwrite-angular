import { Document, DocumentsList } from '@appwrite/common';
import { AppwriteService } from './appwrite.service';
import * as i0 from "@angular/core";
export declare class AppwriteDocumentsService<T = Document<any>> {
    private appwriteService;
    constructor(appwriteService: AppwriteService);
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
    listDocuments<R>(collectionId: string, filters?: string[], limit?: number, offset?: number, orderField?: string, orderType?: string, orderCast?: string, search?: string): Promise<DocumentsList<R>>;
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
    createDocument<R>(collectionId: string, data: Record<string, any>, read?: string[], write?: string[], parentDocument?: string, parentProperty?: string, parentPropertyType?: string): Promise<Document<R>>;
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
    getDocument<R>(collectionId: string, documentId: string): Promise<Document<R>>;
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
    updateDocument<R>(collectionId: string, documentId: string, data: any, read?: string[], write?: string[]): Promise<Document<R>>;
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
    deleteDocument(collectionId: string, documentId: string): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDef<AppwriteDocumentsService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDef<AppwriteDocumentsService<any>>;
}

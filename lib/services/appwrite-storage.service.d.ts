import { File as AppwriteFile, FilesList } from '@appwrite/common';
import URLParse from 'url-parse';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
export declare class AppwriteStorageService<T = AppwriteFile> {
    private appwriteService;
    constructor(appwriteService: AppwriteService);
    /**
     * List Files
     *
     * Get a list of all the user files. You can use the query params to filter
     * your results. On admin mode, this endpoint will return a list of all of the
     * project's files. [Learn more about different API modes](/docs/admin).
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listFiles(search?: string, limit?: number, offset?: number, orderType?: string): Promise<FilesList>;
    /**
     * Create File
     *
     * Create a new file. The user who creates the file will automatically be
     * assigned to read and write access unless he has passed custom values for
     * read and write arguments.
     *
     * @param {File} file
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createFile(file: File, read?: string[], write?: string[]): Promise<T>;
    /**
     * Get File
     *
     * Get a file by its unique ID. This endpoint response returns a JSON object
     * with the file metadata.
     *
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getFile(fileId: string): Promise<T>;
    /**
     * Update File
     *
     * Update a file by its unique ID. Only users with write permissions have
     * access to update this resource.
     *
     * @param {string} fileId
     * @param {string[]} read
     * @param {string[]} write
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateFile(fileId: string, read: string[], write: string[]): Promise<T>;
    /**
     * Delete File
     *
     * Delete a file by its unique ID. Only users with write permissions have
     * access to delete this resource.
     *
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteFile(fileId: string): Promise<void>;
    /**
     * Get File for Download
     *
     * Get a file content by its unique ID. The endpoint response return with a
     * 'Content-Disposition: attachment' header that tells the browser to start
     * downloading the file to user downloads directory.
     *
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getFileDownload(fileId: string): URLParse;
    /**
     * Get File Preview
     *
     * Get a file preview image. Currently, this method supports preview for image
     * files (jpg, png, and gif), other supported formats, like pdf, docs, slides,
     * and spreadsheets, will return the file icon image. You can also pass query
     * string arguments for cutting and resizing your preview image.
     *
     * @param {string} fileId
     * @param {number} width
     * @param {number} height
     * @param {string} gravity
     * @param {number} quality
     * @param {number} borderWidth
     * @param {string} borderColor
     * @param {number} borderRadius
     * @param {number} opacity
     * @param {number} rotation
     * @param {string} background
     * @param {string} output
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getFilePreview(fileId: string, width?: number, height?: number, gravity?: 'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right', quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp'): URLParse;
    /**
     * Get File for View
     *
     * Get a file content by its unique ID. This endpoint is similar to the
     * download method but returns with no  'Content-Disposition: attachment'
     * header.
     *
     * @param {string} fileId
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getFileView(fileId: string): URLParse;
    static ɵfac: i0.ɵɵFactoryDef<AppwriteStorageService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDef<AppwriteStorageService<any>>;
}

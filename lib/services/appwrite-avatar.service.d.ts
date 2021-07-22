import URLParse from 'url-parse';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
export declare class AppwriteAvatarService {
    private appwriteService;
    constructor(appwriteService: AppwriteService);
    /**
     * Get Browser Icon
     *
     * You can use this endpoint to show different browser icons to your users.
     * The code argument receives the browser code as it appears in your user
     * /account/sessions endpoint. Use width, height and quality arguments to
     * change the output settings.
     *
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getBrowser(code: string, width?: number, height?: number, quality?: number): URLParse;
    /**
     * Get Credit Card Icon
     *
     * The credit card endpoint will return you the icon of the credit card
     * provider you need. Use width, height and quality arguments to change the
     * output settings.
     *
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getCreditCard(code: string, width?: number, height?: number, quality?: number): URLParse;
    /**
     * Get Favicon
     *
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote
     * website URL.
     *
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getFavicon(url: string): URLParse;
    /**
     * Get Country Flag
     *
     * You can use this endpoint to show different country flags icons to your
     * users. The code argument receives the 2 letter country code. Use width,
     * height and quality arguments to change the output settings.
     *
     * @param {string} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getFlag(code: string, width?: number, height?: number, quality?: number): URLParse;
    /**
     * Get Image from URL
     *
     * Use this endpoint to fetch a remote image URL and crop it to any image size
     * you want. This endpoint is very useful if you need to crop and display
     * remote images in your app or in case you want to make sure a 3rd party
     * image is properly served using a TLS protocol.
     *
     * @param {string} url
     * @param {number} width
     * @param {number} height
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getImage(url: string, width?: number, height?: number): URLParse;
    /**
     * Get User Initials
     *
     * Use this endpoint to show your user initials avatar icon on your website or
     * app. By default, this route will try to print your logged-in user name or
     * email initials. You can also overwrite the user name if you pass the 'name'
     * parameter. If no name is given and no user is logged, an empty avatar will
     * be returned.
     *
     * You can use the color and background params to change the avatar colors. By
     * default, a random theme will be selected. The random theme will persist for
     * the user's initials when reloading the same theme will always return for
     * the same initials.
     *
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {string} color
     * @param {string} background
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getInitials(name?: string, width?: number, height?: number, color?: string, background?: string): URLParse;
    /**
     * Get QR Code
     *
     * Converts a given plain text to a QR code image. You can use the query
     * parameters to change the size and style of the resulting image.
     *
     * @param {string} text
     * @param {number} size
     * @param {number} margin
     * @param {boolean} download
     * @throws {AppwriteException}
     * @returns {URLParse}
     */
    getQR(text: string, size?: number, margin?: number, download?: boolean): URLParse;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppwriteAvatarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppwriteAvatarService>;
}

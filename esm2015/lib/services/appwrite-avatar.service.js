import { Injectable } from '@angular/core';
import URLParse from 'url-parse';
import { AppwriteException } from '../exceptions';
import { flatten } from '../util';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
import * as i1 from "./";
export class AppwriteAvatarService {
    constructor(appwriteService) {
        this.appwriteService = appwriteService;
    }
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
    getBrowser(code, width, height, quality) {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }
        const path = '/avatars/browsers/{code}'.replace('{code}', code);
        const payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
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
    getCreditCard(code, width, height, quality) {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }
        const path = '/avatars/credit-cards/{code}'.replace('{code}', code);
        const payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
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
    getFavicon(url) {
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        const path = '/avatars/favicon';
        const payload = {};
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
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
    getFlag(code, width, height, quality) {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }
        const path = '/avatars/flags/{code}'.replace('{code}', code);
        const payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
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
    getImage(url, width, height) {
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }
        const path = '/avatars/image';
        const payload = {};
        if (typeof url !== 'undefined') {
            payload['url'] = url;
        }
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
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
    getInitials(name, width, height, color, background) {
        const path = '/avatars/initials';
        const payload = {};
        if (typeof name !== 'undefined') {
            payload['name'] = name;
        }
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof color !== 'undefined') {
            payload['color'] = color;
        }
        if (typeof background !== 'undefined') {
            payload['background'] = background;
        }
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
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
    getQR(text, size, margin, download) {
        if (typeof text === 'undefined') {
            throw new AppwriteException('Missing required parameter: "text"');
        }
        const path = '/avatars/qr';
        const payload = {};
        if (typeof text !== 'undefined') {
            payload['text'] = text;
        }
        if (typeof size !== 'undefined') {
            payload['size'] = size;
        }
        if (typeof margin !== 'undefined') {
            payload['margin'] = margin;
        }
        if (typeof download !== 'undefined') {
            payload['download'] = download;
        }
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
}
AppwriteAvatarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteAvatarService, deps: [{ token: i1.AppwriteService }], target: i0.ɵɵFactoryTarget.Injectable });
AppwriteAvatarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteAvatarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.3", ngImport: i0, type: AppwriteAvatarService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AppwriteService }]; } });
//# sourceMappingURL=appwrite-avatar.service.js.map
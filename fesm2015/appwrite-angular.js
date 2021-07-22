import { CommonModule } from '@angular/common';
import * as i1 from '@angular/common/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as i0 from '@angular/core';
import { InjectionToken, Injectable, Inject, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
import URLParse from 'url-parse';

class AppwriteException extends Error {
    constructor(message, code = 0, response = '') {
        super(message);
        this.name = 'AppwriteException';
        this.message = message;
        this.code = code;
        this.response = response;
    }
}

const APPWRITE_OPTIONS_TOKEN = new InjectionToken('APPWRITE_OPTIONS_TOKEN');

const APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN = new InjectionToken('APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN');

const APPWRITE_LOCATION_PROVIDER_TOKEN = new InjectionToken('APPWRITE_LOCATION_PROVIDER_TOKEN');

function flatten(data, prefix = '') {
    let output = {};
    for (const key in data) {
        const value = data[key];
        const finalKey = prefix ? `${prefix}[${key}]` : key;
        if (Array.isArray(value)) {
            output = Object.assign(output, flatten(value, finalKey));
        }
        else {
            output[finalKey] = value;
        }
    }
    return output;
}

class AppwriteService {
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

class AppwriteAccountService {
    constructor(appwriteService) {
        this.appwriteService = appwriteService;
    }
    /**
     * Get Account
     *
     * Get currently logged in user data as JSON object.
     *
     * @throws {AppwriteException}
     * @returns {Promise<T>>}
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/account';
            const payload = {};
            return this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Account
     *
     * Use this endpoint to allow a new user to register a new account in your
     * project. After the user registration completes successfully, you can use
     * the [/account/verfication](/docs/client/account#accountCreateVerification)
     * route to start verifying the user email address. To allow the new user to
     * login to their new account, you need to create a new [account
     * session](/docs/client/account#accountCreateSession).
     *
     * @param {string} email
     * @param {string} password
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create(email, password, name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof email === 'undefined') {
                throw new AppwriteException('Missing required parameter: "email"');
            }
            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }
            const path = '/account';
            const payload = {};
            if (typeof email !== 'undefined') {
                payload['email'] = email;
            }
            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }
            if (typeof name !== 'undefined') {
                payload['name'] = name;
            }
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Delete Account
     *
     * Delete a currently logged in user account. Behind the scene, the user
     * record is not deleted but permanently blocked from any access. This is done
     * to avoid deleted accounts being overtaken by new users with the same email
     * address. Any user-related resources like documents or storage files should
     * be deleted separately.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/account';
            const payload = {};
            return yield this.appwriteService.call('DELETE', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Update Account Email
     *
     * Update currently logged in user account email address. After changing user
     * address, user confirmation status is being reset and a new confirmation
     * mail is sent. For security measures, user password is required to complete
     * this request.
     * This endpoint can also be used to convert an anonymous account to a normal
     * one, by passing an email address and a new password.
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateEmail(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof email === 'undefined') {
                throw new AppwriteException('Missing required parameter: "email"');
            }
            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }
            const path = '/account/email';
            const payload = {};
            if (typeof email !== 'undefined') {
                payload['email'] = email;
            }
            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }
            return yield this.appwriteService.call('PATCH', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Account JWT
     *
     * Use this endpoint to create a JSON Web Token. You can use the resulting JWT
     * to authenticate on behalf of the current user when working with the
     * Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes
     * from its creation and will be invalid if the user will logout in that time
     * frame.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createJWT() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/account/jwt';
            const payload = {};
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Get Account Logs
     *
     * Get currently logged in user list of latest security activity logs. Each
     * log returns user IP address, location and date and time of log.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getLogs() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/account/logs';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Update Account Name
     *
     * Update currently logged in user account name.
     *
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof name === 'undefined') {
                throw new AppwriteException('Missing required parameter: "name"');
            }
            const path = '/account/name';
            const payload = {};
            if (typeof name !== 'undefined') {
                payload['name'] = name;
            }
            return yield this.appwriteService.call('PATCH', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Update Account Password
     *
     * Update currently logged in user password. For validation, user is required
     * to pass in the new password, and the old password. For users created with
     * OAuth and Team Invites, oldPassword is optional.
     *
     * @param {string} password
     * @param {string} oldPassword
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePassword(password, oldPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }
            const path = '/account/password';
            const payload = {};
            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }
            if (typeof oldPassword !== 'undefined') {
                payload['oldPassword'] = oldPassword;
            }
            return yield this.appwriteService.call('PATCH', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Get Account Preferences
     *
     * Get currently logged in user preferences as a key-value object.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getPrefs() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/account/prefs';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Update Account Preferences
     *
     * Update currently logged in user account preferences. You can pass only the
     * specific settings you wish to update.
     *
     * @param {object} prefs
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updatePrefs(prefs) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof prefs === 'undefined') {
                throw new AppwriteException('Missing required parameter: "prefs"');
            }
            const path = '/account/prefs';
            const payload = {};
            if (typeof prefs !== 'undefined') {
                payload['prefs'] = prefs;
            }
            return yield this.appwriteService.call('PATCH', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Password Recovery
     *
     * Sends the user an email with a temporary secret key for password reset.
     * When the user clicks the confirmation link he is redirected back to your
     * app password reset URL with the secret key and email address values
     * attached to the URL query string. Use the query string params to submit a
     * request to the [PUT
     * /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to
     * complete the process. The verification link sent to the user's email
     * address is valid for 1 hour.
     *
     * @param {string} email
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createRecovery(email, url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof email === 'undefined') {
                throw new AppwriteException('Missing required parameter: "email"');
            }
            if (typeof url === 'undefined') {
                throw new AppwriteException('Missing required parameter: "url"');
            }
            const path = '/account/recovery';
            const payload = {};
            if (typeof email !== 'undefined') {
                payload['email'] = email;
            }
            if (typeof url !== 'undefined') {
                payload['url'] = url;
            }
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Complete Password Recovery
     *
     * Use this endpoint to complete the user account password reset. Both the
     * **userId** and **secret** arguments will be passed as query parameters to
     * the redirect URL you have provided when sending your request to the [POST
     * /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
     *
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     * @param {string} userId
     * @param {string} secret
     * @param {string} password
     * @param {string} passwordAgain
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateRecovery(userId, secret, password, passwordAgain) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof userId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "userId"');
            }
            if (typeof secret === 'undefined') {
                throw new AppwriteException('Missing required parameter: "secret"');
            }
            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }
            if (typeof passwordAgain === 'undefined') {
                throw new AppwriteException('Missing required parameter: "passwordAgain"');
            }
            const path = '/account/recovery';
            const payload = {};
            if (typeof userId !== 'undefined') {
                payload['userId'] = userId;
            }
            if (typeof secret !== 'undefined') {
                payload['secret'] = secret;
            }
            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }
            if (typeof passwordAgain !== 'undefined') {
                payload['passwordAgain'] = passwordAgain;
            }
            return yield this.appwriteService.call('PUT', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Get Account Sessions
     *
     * Get currently logged in user list of active sessions across different
     * devices.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getSessions() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/account/sessions';
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Account Session
     *
     * Allow the user to login into their account by providing a valid email and
     * password combination. This route will create a new session for the user.
     *
     * @param {string} email
     * @param {string} password
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createSession(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof email === 'undefined') {
                throw new AppwriteException('Missing required parameter: "email"');
            }
            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }
            const path = '/account/sessions';
            const payload = {};
            if (typeof email !== 'undefined') {
                payload['email'] = email;
            }
            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Delete All Account Sessions
     *
     * Delete all sessions from the user account and remove any sessions cookies
     * from the end client.
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSessions() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/account/sessions';
            const payload = {};
            return yield this.appwriteService.call('DELETE', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Anonymous Session
     *
     * Use this endpoint to allow a new user to register an anonymous account in
     * your project. This route will also create a new session for the user. To
     * allow the new user to convert an anonymous account to a normal account, you
     * need to update its [email and
     * password](/docs/client/account#accountUpdateEmail) or create an [OAuth2
     * session](/docs/client/account#accountCreateOAuth2Session).
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createAnonymousSession() {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/account/sessions/anonymous';
            const payload = {};
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Account Session with OAuth2
     *
     * Allow the user to login to their account using the OAuth2 provider of their
     * choice. Each OAuth2 provider should be enabled from the Appwrite console
     * first. Use the success and failure arguments to provide a redirect URL's
     * back to your app when login is completed.
     *
     * @param {string} provider
     * @param {string} success
     * @param {string} failure
     * @param {string[]} scopes
     * @throws {AppwriteException}
     * @returns {void|URLParse}
     */
    createOAuth2Session(provider, success, failure, scopes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof provider === 'undefined') {
                throw new AppwriteException('Missing required parameter: "provider"');
            }
            const path = '/account/sessions/oauth2/{provider}'.replace('{provider}', provider);
            const payload = {};
            if (typeof success !== 'undefined') {
                payload['success'] = success;
            }
            if (typeof failure !== 'undefined') {
                payload['failure'] = failure;
            }
            if (typeof scopes !== 'undefined') {
                payload['scopes'] = scopes;
            }
            const uri = new URLParse(this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            // @todo fix this in nativescript
            if (typeof this.appwriteService.locationProvider !== 'undefined' && this.appwriteService.locationProvider) {
                this.appwriteService.locationProvider.href = uri.toString();
            }
            else {
                return uri;
            }
        });
    }
    /**
     * Get Session By ID
     *
     * Use this endpoint to get a logged in user's session using a Session ID.
     * Inputting 'current' will return the current session being used.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof sessionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "sessionId"');
            }
            const path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Delete Account Session
     *
     * Use this endpoint to log out the currently logged in user from all their
     * account sessions across all of their different devices. When using the
     * option id argument, only the session unique ID provider will be deleted.
     *
     * @param {string} sessionId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteSession(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof sessionId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "sessionId"');
            }
            const path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
            const payload = {};
            return yield this.appwriteService.call('DELETE', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Email Verification
     *
     * Use this endpoint to send a verification message to your user email address
     * to confirm they are the valid owners of that address. Both the **userId**
     * and **secret** arguments will be passed as query parameters to the URL you
     * have provided to be attached to the verification email. The provided URL
     * should redirect the user back to your app and allow you to complete the
     * verification process by verifying both the **userId** and **secret**
     * parameters. Learn more about how to [complete the verification
     * process](/docs/client/account#accountUpdateVerification). The verification
     * link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect
     * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md),
     * the only valid redirect URLs are the ones from domains you have set when
     * adding your platforms in the console interface.
     *
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createVerification(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof url === 'undefined') {
                throw new AppwriteException('Missing required parameter: "url"');
            }
            const path = '/account/verification';
            const payload = {};
            if (typeof url !== 'undefined') {
                payload['url'] = url;
            }
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Complete Email Verification
     *
     * Use this endpoint to complete the user email verification process. Use both
     * the **userId** and **secret** parameters that were attached to your app URL
     * to verify the user email ownership. If confirmed this route will return a
     * 200 status code.
     *
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateVerification(userId, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof userId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "userId"');
            }
            if (typeof secret === 'undefined') {
                throw new AppwriteException('Missing required parameter: "secret"');
            }
            const path = '/account/verification';
            const payload = {};
            if (typeof userId !== 'undefined') {
                payload['userId'] = userId;
            }
            if (typeof secret !== 'undefined') {
                payload['secret'] = secret;
            }
            return yield this.appwriteService.call('PUT', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
}
AppwriteAccountService.ɵfac = function AppwriteAccountService_Factory(t) { return new (t || AppwriteAccountService)(i0.ɵɵinject(AppwriteService)); };
AppwriteAccountService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteAccountService, factory: AppwriteAccountService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteAccountService, [{
        type: Injectable
    }], function () { return [{ type: AppwriteService }]; }, null); })();

class AppwriteAvatarService {
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
AppwriteAvatarService.ɵfac = function AppwriteAvatarService_Factory(t) { return new (t || AppwriteAvatarService)(i0.ɵɵinject(AppwriteService)); };
AppwriteAvatarService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteAvatarService, factory: AppwriteAvatarService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteAvatarService, [{
        type: Injectable
    }], function () { return [{ type: AppwriteService }]; }, null); })();

class AppwriteDocumentsService {
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
AppwriteDocumentsService.ɵfac = function AppwriteDocumentsService_Factory(t) { return new (t || AppwriteDocumentsService)(i0.ɵɵinject(AppwriteService)); };
AppwriteDocumentsService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteDocumentsService, factory: AppwriteDocumentsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteDocumentsService, [{
        type: Injectable
    }], function () { return [{ type: AppwriteService }]; }, null); })();

class AppwriteFunctionsService {
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
AppwriteFunctionsService.ɵfac = function AppwriteFunctionsService_Factory(t) { return new (t || AppwriteFunctionsService)(i0.ɵɵinject(AppwriteService)); };
AppwriteFunctionsService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteFunctionsService, factory: AppwriteFunctionsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteFunctionsService, [{
        type: Injectable
    }], function () { return [{ type: AppwriteService }]; }, null); })();

class AppwriteLocaleService {
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
AppwriteLocaleService.ɵfac = function AppwriteLocaleService_Factory(t) { return new (t || AppwriteLocaleService)(i0.ɵɵinject(AppwriteService)); };
AppwriteLocaleService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteLocaleService, factory: AppwriteLocaleService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteLocaleService, [{
        type: Injectable
    }], function () { return [{ type: AppwriteService }]; }, null); })();

class AppwriteStorageService {
    constructor(appwriteService) {
        this.appwriteService = appwriteService;
    }
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
    listFiles(search, limit, offset, orderType) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/storage/files';
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
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
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
    createFile(file, read, write) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof file === 'undefined') {
                throw new AppwriteException('Missing required parameter: "file"');
            }
            const path = '/storage/files';
            const payload = {};
            if (typeof file !== 'undefined') {
                payload['file'] = file;
            }
            if (typeof read !== 'undefined') {
                payload['read'] = read;
            }
            if (typeof write !== 'undefined') {
                payload['write'] = write;
            }
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'multipart/form-data',
            }, payload);
        });
    }
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
    getFile(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof fileId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "fileId"');
            }
            const path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
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
    updateFile(fileId, read, write) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof fileId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "fileId"');
            }
            if (typeof read === 'undefined') {
                throw new AppwriteException('Missing required parameter: "read"');
            }
            if (typeof write === 'undefined') {
                throw new AppwriteException('Missing required parameter: "write"');
            }
            const path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
            const payload = {};
            if (typeof read !== 'undefined') {
                payload['read'] = read;
            }
            if (typeof write !== 'undefined') {
                payload['write'] = write;
            }
            return yield this.appwriteService.call('PUT', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
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
    deleteFile(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof fileId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "fileId"');
            }
            const path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
            const payload = {};
            return yield this.appwriteService.call('DELETE', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
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
    getFileDownload(fileId) {
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
        const path = '/storage/files/{fileId}/download'.replace('{fileId}', fileId);
        const payload = {};
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
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
    getFilePreview(fileId, width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, background, output) {
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
        const path = '/storage/files/{fileId}/preview'.replace('{fileId}', fileId);
        const payload = {};
        if (typeof width !== 'undefined') {
            payload['width'] = width;
        }
        if (typeof height !== 'undefined') {
            payload['height'] = height;
        }
        if (typeof gravity !== 'undefined') {
            payload['gravity'] = gravity;
        }
        if (typeof quality !== 'undefined') {
            payload['quality'] = quality;
        }
        if (typeof borderWidth !== 'undefined') {
            payload['borderWidth'] = borderWidth;
        }
        if (typeof borderColor !== 'undefined') {
            payload['borderColor'] = borderColor;
        }
        if (typeof borderRadius !== 'undefined') {
            payload['borderRadius'] = borderRadius;
        }
        if (typeof opacity !== 'undefined') {
            payload['opacity'] = opacity;
        }
        if (typeof rotation !== 'undefined') {
            payload['rotation'] = rotation;
        }
        if (typeof background !== 'undefined') {
            payload['background'] = background;
        }
        if (typeof output !== 'undefined') {
            payload['output'] = output;
        }
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
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
    getFileView(fileId) {
        if (typeof fileId === 'undefined') {
            throw new AppwriteException('Missing required parameter: "fileId"');
        }
        const path = '/storage/files/{fileId}/view'.replace('{fileId}', fileId);
        const payload = {};
        const uri = new URLParse(this.appwriteService.config.endpoint + path);
        payload['project'] = this.appwriteService.config.project;
        uri.set('query', flatten(payload));
        return uri;
    }
}
AppwriteStorageService.ɵfac = function AppwriteStorageService_Factory(t) { return new (t || AppwriteStorageService)(i0.ɵɵinject(AppwriteService)); };
AppwriteStorageService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteStorageService, factory: AppwriteStorageService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteStorageService, [{
        type: Injectable
    }], function () { return [{ type: AppwriteService }]; }, null); })();

class AppwriteTeamsService {
    constructor(appwriteService) {
        this.appwriteService = appwriteService;
    }
    /**
     * List Teams
     *
     * Get a list of all the current user teams. You can use the query params to
     * filter your results. On admin mode, this endpoint will return a list of all
     * of the project's teams. [Learn more about different API
     * modes](/docs/admin).
     *
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    list(search, limit, offset, orderType) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = '/teams';
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
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Team
     *
     * Create a new team. The user who creates the team will automatically be
     * assigned as the owner of the team. The team owner can invite new members,
     * who will be able add new owners and update or delete the team from your
     * project.
     *
     * @param {string} name
     * @param {string[]} roles
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    create(name, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof name === 'undefined') {
                throw new AppwriteException('Missing required parameter: "name"');
            }
            const path = '/teams';
            const payload = {};
            if (typeof name !== 'undefined') {
                payload['name'] = name;
            }
            if (typeof roles !== 'undefined') {
                payload['roles'] = roles;
            }
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Get Team
     *
     * Get a team by its unique ID. All team members have read access for this
     * resource.
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(teamId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof teamId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "teamId"');
            }
            const path = '/teams/{teamId}'.replace('{teamId}', teamId);
            const payload = {};
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Update Team
     *
     * Update a team by its unique ID. Only team owners have write access for this
     * resource.
     *
     * @param {string} teamId
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    update(teamId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof teamId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "teamId"');
            }
            if (typeof name === 'undefined') {
                throw new AppwriteException('Missing required parameter: "name"');
            }
            const path = '/teams/{teamId}'.replace('{teamId}', teamId);
            const payload = {};
            if (typeof name !== 'undefined') {
                payload['name'] = name;
            }
            return yield this.appwriteService.call('PUT', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Delete Team
     *
     * Delete a team by its unique ID. Only team owners have write access for this
     * resource.
     *
     * @param {string} teamId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(teamId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof teamId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "teamId"');
            }
            const path = '/teams/{teamId}'.replace('{teamId}', teamId);
            const payload = {};
            return yield this.appwriteService.call('DELETE', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Get Team Memberships
     *
     * Get a team members by the team unique ID. All team members have read access
     * for this list of resources.
     *
     * @param {string} teamId
     * @param {string} search
     * @param {number} limit
     * @param {number} offset
     * @param {string} orderType
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    getMemberships(teamId, search, limit, offset, orderType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof teamId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "teamId"');
            }
            const path = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
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
            return yield this.appwriteService.call('GET', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Create Team Membership
     *
     * Use this endpoint to invite a new member to join your team. An email with a
     * link to join the team will be sent to the new member email address if the
     * member doesn't exist in the project it will be created automatically.
     *
     * Use the 'URL' parameter to redirect the user from the invitation email back
     * to your app. When the user is redirected, use the [Update Team Membership
     * Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow
     * the user to accept the invitation to the team.
     *
     * Please note that in order to avoid a [Redirect
     * Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
     * the only valid redirect URL's are the once from domains you have set when
     * added your platforms in the console interface.
     *
     * @param {string} teamId
     * @param {string} email
     * @param {string[]} roles
     * @param {string} url
     * @param {string} name
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    createMembership(teamId, email, roles, url, name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof teamId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "teamId"');
            }
            if (typeof email === 'undefined') {
                throw new AppwriteException('Missing required parameter: "email"');
            }
            if (typeof roles === 'undefined') {
                throw new AppwriteException('Missing required parameter: "roles"');
            }
            if (typeof url === 'undefined') {
                throw new AppwriteException('Missing required parameter: "url"');
            }
            const path = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
            const payload = {};
            if (typeof email !== 'undefined') {
                payload['email'] = email;
            }
            if (typeof name !== 'undefined') {
                payload['name'] = name;
            }
            if (typeof roles !== 'undefined') {
                payload['roles'] = roles;
            }
            if (typeof url !== 'undefined') {
                payload['url'] = url;
            }
            return yield this.appwriteService.call('POST', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Update Membership Roles
     *
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string[]} roles
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMembershipRoles(teamId, membershipId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof teamId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "teamId"');
            }
            if (typeof membershipId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "membershipId"');
            }
            if (typeof roles === 'undefined') {
                throw new AppwriteException('Missing required parameter: "roles"');
            }
            const path = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId)
                .replace('{membershipId}', membershipId);
            const payload = {};
            if (typeof roles !== 'undefined') {
                payload['roles'] = roles;
            }
            return yield this.appwriteService.call('PATCH', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Delete Team Membership
     *
     * This endpoint allows a user to leave a team or for a team owner to delete
     * the membership of any other team member. You can also use this endpoint to
     * delete a user membership even if it is not accepted.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    deleteMembership(teamId, membershipId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof teamId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "teamId"');
            }
            if (typeof membershipId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "membershipId"');
            }
            const path = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId)
                .replace('{membershipId}', membershipId);
            const payload = {};
            return yield this.appwriteService.call('DELETE', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
    /**
     * Update Team Membership Status
     *
     * Use this endpoint to allow a user to accept an invitation to join a team
     * after being redirected back to your app from the invitation email recieved
     * by the user.
     *
     * @param {string} teamId
     * @param {string} membershipId
     * @param {string} userId
     * @param {string} secret
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    updateMembershipStatus(teamId, membershipId, userId, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof teamId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "teamId"');
            }
            if (typeof membershipId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "membershipId"');
            }
            if (typeof userId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "userId"');
            }
            if (typeof secret === 'undefined') {
                throw new AppwriteException('Missing required parameter: "secret"');
            }
            const path = '/teams/{teamId}/memberships/{membershipId}/status'.replace('{teamId}', teamId)
                .replace('{membershipId}', membershipId);
            const payload = {};
            if (typeof userId !== 'undefined') {
                payload['userId'] = userId;
            }
            if (typeof secret !== 'undefined') {
                payload['secret'] = secret;
            }
            return yield this.appwriteService.call('PATCH', path, {
                'content-type': 'application/json',
            }, payload);
        });
    }
}
AppwriteTeamsService.ɵfac = function AppwriteTeamsService_Factory(t) { return new (t || AppwriteTeamsService)(i0.ɵɵinject(AppwriteService)); };
AppwriteTeamsService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteTeamsService, factory: AppwriteTeamsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteTeamsService, [{
        type: Injectable
    }], function () { return [{ type: AppwriteService }]; }, null); })();

class AppwriteAngularModule {
    static forRoot(options) {
        return {
            ngModule: AppwriteAngularModule,
            providers: [
                options.appwriteOptionsProvider || { provide: APPWRITE_OPTIONS_TOKEN, useValue: options.config },
                { provide: APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN, useFactory: () => window.localStorage },
                { provide: APPWRITE_LOCATION_PROVIDER_TOKEN, useFactory: () => window.location },
                AppwriteService,
                AppwriteAccountService,
                AppwriteAvatarService,
                AppwriteDocumentsService,
                AppwriteFunctionsService,
                AppwriteLocaleService,
                AppwriteStorageService,
                AppwriteTeamsService,
            ],
        };
    }
}
AppwriteAngularModule.ɵfac = function AppwriteAngularModule_Factory(t) { return new (t || AppwriteAngularModule)(); };
AppwriteAngularModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppwriteAngularModule });
AppwriteAngularModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[CommonModule, HttpClientModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppwriteAngularModule, { imports: [CommonModule, HttpClientModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteAngularModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [CommonModule, HttpClientModule],
                providers: [],
                exports: [],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN, APPWRITE_LOCATION_PROVIDER_TOKEN, APPWRITE_OPTIONS_TOKEN, AppwriteAccountService, AppwriteAngularModule, AppwriteAvatarService, AppwriteDocumentsService, AppwriteException, AppwriteFunctionsService, AppwriteLocaleService, AppwriteService, AppwriteStorageService, AppwriteTeamsService, flatten };
//# sourceMappingURL=appwrite-angular.js.map

import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import URLParse from 'url-parse';
import { AppwriteException } from '../exceptions';
import { flatten } from '../util';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
import * as i1 from "./";
export class AppwriteAccountService {
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
AppwriteAccountService.ɵfac = function AppwriteAccountService_Factory(t) { return new (t || AppwriteAccountService)(i0.ɵɵinject(i1.AppwriteService)); };
AppwriteAccountService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteAccountService, factory: AppwriteAccountService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteAccountService, [{
        type: Injectable
    }], function () { return [{ type: i1.AppwriteService }]; }, null); })();
//# sourceMappingURL=appwrite-account.service.js.map
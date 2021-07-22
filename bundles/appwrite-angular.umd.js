(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('url-parse')) :
    typeof define === 'function' && define.amd ? define('@appwrite/angular', ['exports', '@angular/common', '@angular/common/http', '@angular/core', 'url-parse'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.appwrite = global.appwrite || {}, global.appwrite.angular = {}), global.ng.common, global.ng.common.http, global.ng.core, global.URLParse));
}(this, (function (exports, common, i1, i0, URLParse) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var URLParse__default = /*#__PURE__*/_interopDefaultLegacy(URLParse);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var AppwriteException = /** @class */ (function (_super) {
        __extends(AppwriteException, _super);
        function AppwriteException(message, code, response) {
            if (code === void 0) { code = 0; }
            if (response === void 0) { response = ''; }
            var _this = _super.call(this, message) || this;
            _this.name = 'AppwriteException';
            _this.message = message;
            _this.code = code;
            _this.response = response;
            return _this;
        }
        return AppwriteException;
    }(Error));

    var APPWRITE_OPTIONS_TOKEN = new i0.InjectionToken('APPWRITE_OPTIONS_TOKEN');

    var APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN = new i0.InjectionToken('APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN');

    var APPWRITE_LOCATION_PROVIDER_TOKEN = new i0.InjectionToken('APPWRITE_LOCATION_PROVIDER_TOKEN');

    function flatten(data, prefix) {
        if (prefix === void 0) { prefix = ''; }
        var output = {};
        for (var key in data) {
            var value = data[key];
            var finalKey = prefix ? prefix + "[" + key + "]" : key;
            if (Array.isArray(value)) {
                output = Object.assign(output, flatten(value, finalKey));
            }
            else {
                output[finalKey] = value;
            }
        }
        return output;
    }

    var AppwriteService = /** @class */ (function () {
        function AppwriteService(config, localStorageProvider, locationProvider, httpBackend) {
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
            this.http = new i1.HttpClient(httpBackend);
            if (!config || !config.endpointUrl || !config.endpointUrl) {
                throw new Error('You are missing required config properties');
            }
            this.config.endpoint = config.endpointUrl;
            this.config.project = config.projectId;
            this.setEndpoint(config.endpointUrl).setProject(config.projectId);
        }
        AppwriteService.prototype.setEndpoint = function (endpoint) {
            this.config.endpoint = endpoint;
            return this;
        };
        AppwriteService.prototype.setProject = function (value) {
            this.headers['X-Appwrite-Project'] = value;
            this.config.project = value;
            return this;
        };
        AppwriteService.prototype.setJWT = function (value) {
            this.headers['X-Appwrite-JWT'] = value;
            this.config.jwt = value;
            return this;
        };
        AppwriteService.prototype.setLocale = function (value) {
            this.headers['X-Appwrite-Locale'] = value;
            this.config.locale = value;
            return this;
        };
        AppwriteService.prototype.call = function (method, path, headers, params) {
            if (headers === void 0) { headers = {}; }
            if (params === void 0) { params = {}; }
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var url, options, formData, key, response, data, cookieFallback, e_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            url = new URLParse__default['default'](this.config.endpoint + path);
                            method = method.toUpperCase();
                            headers = Object.assign(Object.assign({}, headers), this.headers);
                            options = {
                                method: method,
                                headers: headers,
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
                                        formData = new FormData();
                                        for (key in params) {
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
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.http.request(method, url.toString(), Object.assign(Object.assign({}, options), { headers: headers,
                                    // observe: 'response',
                                    observe: 'response' })).toPromise()];
                        case 2:
                            response = _c.sent();
                            data = null;
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
                            cookieFallback = response.headers.get('X-Fallback-Cookies');
                            if (typeof this.localStorageProvider !== 'undefined' && this.localStorageProvider && cookieFallback) {
                                console.warn('Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.');
                                this.localStorageProvider.setItem('cookieFallback', cookieFallback);
                            }
                            return [2 /*return*/, data];
                        case 3:
                            e_1 = _c.sent();
                            throw new AppwriteException(e_1.message);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return AppwriteService;
    }());
    AppwriteService.ɵfac = function AppwriteService_Factory(t) { return new (t || AppwriteService)(i0__namespace.ɵɵinject(APPWRITE_OPTIONS_TOKEN), i0__namespace.ɵɵinject(APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN), i0__namespace.ɵɵinject(APPWRITE_LOCATION_PROVIDER_TOKEN), i0__namespace.ɵɵinject(i1__namespace.HttpBackend)); };
    AppwriteService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AppwriteService, factory: AppwriteService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [APPWRITE_OPTIONS_TOKEN]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN]
                        }] }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [APPWRITE_LOCATION_PROVIDER_TOKEN]
                        }] }, { type: i1__namespace.HttpBackend }];
        }, null);
    })();

    var AppwriteAccountService = /** @class */ (function () {
        function AppwriteAccountService(appwriteService) {
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
        AppwriteAccountService.prototype.get = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    path = '/account';
                    payload = {};
                    return [2 /*return*/, this.appwriteService.call('GET', path, {
                            'content-type': 'application/json',
                        }, payload)];
                });
            });
        };
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
        AppwriteAccountService.prototype.create = function (email, password, name) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof email === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "email"');
                            }
                            if (typeof password === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "password"');
                            }
                            path = '/account';
                            payload = {};
                            if (typeof email !== 'undefined') {
                                payload['email'] = email;
                            }
                            if (typeof password !== 'undefined') {
                                payload['password'] = password;
                            }
                            if (typeof name !== 'undefined') {
                                payload['name'] = name;
                            }
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.delete = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/account';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('DELETE', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.updateEmail = function (email, password) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof email === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "email"');
                            }
                            if (typeof password === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "password"');
                            }
                            path = '/account/email';
                            payload = {};
                            if (typeof email !== 'undefined') {
                                payload['email'] = email;
                            }
                            if (typeof password !== 'undefined') {
                                payload['password'] = password;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PATCH', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.createJWT = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/account/jwt';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Get Account Logs
         *
         * Get currently logged in user list of latest security activity logs. Each
         * log returns user IP address, location and date and time of log.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteAccountService.prototype.getLogs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/account/logs';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Update Account Name
         *
         * Update currently logged in user account name.
         *
         * @param {string} name
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteAccountService.prototype.updateName = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof name === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "name"');
                            }
                            path = '/account/name';
                            payload = {};
                            if (typeof name !== 'undefined') {
                                payload['name'] = name;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PATCH', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.updatePassword = function (password, oldPassword) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof password === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "password"');
                            }
                            path = '/account/password';
                            payload = {};
                            if (typeof password !== 'undefined') {
                                payload['password'] = password;
                            }
                            if (typeof oldPassword !== 'undefined') {
                                payload['oldPassword'] = oldPassword;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PATCH', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Get Account Preferences
         *
         * Get currently logged in user preferences as a key-value object.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteAccountService.prototype.getPrefs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/account/prefs';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.updatePrefs = function (prefs) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof prefs === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "prefs"');
                            }
                            path = '/account/prefs';
                            payload = {};
                            if (typeof prefs !== 'undefined') {
                                payload['prefs'] = prefs;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PATCH', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.createRecovery = function (email, url) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof email === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "email"');
                            }
                            if (typeof url === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "url"');
                            }
                            path = '/account/recovery';
                            payload = {};
                            if (typeof email !== 'undefined') {
                                payload['email'] = email;
                            }
                            if (typeof url !== 'undefined') {
                                payload['url'] = url;
                            }
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.updateRecovery = function (userId, secret, password, passwordAgain) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
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
                            path = '/account/recovery';
                            payload = {};
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
                            return [4 /*yield*/, this.appwriteService.call('PUT', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Get Account Sessions
         *
         * Get currently logged in user list of active sessions across different
         * devices.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteAccountService.prototype.getSessions = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/account/sessions';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.createSession = function (email, password) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof email === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "email"');
                            }
                            if (typeof password === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "password"');
                            }
                            path = '/account/sessions';
                            payload = {};
                            if (typeof email !== 'undefined') {
                                payload['email'] = email;
                            }
                            if (typeof password !== 'undefined') {
                                payload['password'] = password;
                            }
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Delete All Account Sessions
         *
         * Delete all sessions from the user account and remove any sessions cookies
         * from the end client.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteAccountService.prototype.deleteSessions = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/account/sessions';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('DELETE', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.createAnonymousSession = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/account/sessions/anonymous';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.createOAuth2Session = function (provider, success, failure, scopes) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload, uri;
                return __generator(this, function (_a) {
                    if (typeof provider === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "provider"');
                    }
                    path = '/account/sessions/oauth2/{provider}'.replace('{provider}', provider);
                    payload = {};
                    if (typeof success !== 'undefined') {
                        payload['success'] = success;
                    }
                    if (typeof failure !== 'undefined') {
                        payload['failure'] = failure;
                    }
                    if (typeof scopes !== 'undefined') {
                        payload['scopes'] = scopes;
                    }
                    uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
                    payload['project'] = this.appwriteService.config.project;
                    uri.set('query', flatten(payload));
                    // @todo fix this in nativescript
                    if (typeof this.appwriteService.locationProvider !== 'undefined' && this.appwriteService.locationProvider) {
                        this.appwriteService.locationProvider.href = uri.toString();
                    }
                    else {
                        return [2 /*return*/, uri];
                    }
                    return [2 /*return*/];
                });
            });
        };
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
        AppwriteAccountService.prototype.getSession = function (sessionId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof sessionId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "sessionId"');
                            }
                            path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.deleteSession = function (sessionId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof sessionId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "sessionId"');
                            }
                            path = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('DELETE', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.createVerification = function (url) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof url === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "url"');
                            }
                            path = '/account/verification';
                            payload = {};
                            if (typeof url !== 'undefined') {
                                payload['url'] = url;
                            }
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteAccountService.prototype.updateVerification = function (userId, secret) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof userId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "userId"');
                            }
                            if (typeof secret === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "secret"');
                            }
                            path = '/account/verification';
                            payload = {};
                            if (typeof userId !== 'undefined') {
                                payload['userId'] = userId;
                            }
                            if (typeof secret !== 'undefined') {
                                payload['secret'] = secret;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PUT', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return AppwriteAccountService;
    }());
    AppwriteAccountService.ɵfac = function AppwriteAccountService_Factory(t) { return new (t || AppwriteAccountService)(i0__namespace.ɵɵinject(AppwriteService)); };
    AppwriteAccountService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AppwriteAccountService, factory: AppwriteAccountService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteAccountService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppwriteService }]; }, null);
    })();

    var AppwriteAvatarService = /** @class */ (function () {
        function AppwriteAvatarService(appwriteService) {
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
        AppwriteAvatarService.prototype.getBrowser = function (code, width, height, quality) {
            if (typeof code === 'undefined') {
                throw new AppwriteException('Missing required parameter: "code"');
            }
            var path = '/avatars/browsers/{code}'.replace('{code}', code);
            var payload = {};
            if (typeof width !== 'undefined') {
                payload['width'] = width;
            }
            if (typeof height !== 'undefined') {
                payload['height'] = height;
            }
            if (typeof quality !== 'undefined') {
                payload['quality'] = quality;
            }
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
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
        AppwriteAvatarService.prototype.getCreditCard = function (code, width, height, quality) {
            if (typeof code === 'undefined') {
                throw new AppwriteException('Missing required parameter: "code"');
            }
            var path = '/avatars/credit-cards/{code}'.replace('{code}', code);
            var payload = {};
            if (typeof width !== 'undefined') {
                payload['width'] = width;
            }
            if (typeof height !== 'undefined') {
                payload['height'] = height;
            }
            if (typeof quality !== 'undefined') {
                payload['quality'] = quality;
            }
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
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
        AppwriteAvatarService.prototype.getFavicon = function (url) {
            if (typeof url === 'undefined') {
                throw new AppwriteException('Missing required parameter: "url"');
            }
            var path = '/avatars/favicon';
            var payload = {};
            if (typeof url !== 'undefined') {
                payload['url'] = url;
            }
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
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
        AppwriteAvatarService.prototype.getFlag = function (code, width, height, quality) {
            if (typeof code === 'undefined') {
                throw new AppwriteException('Missing required parameter: "code"');
            }
            var path = '/avatars/flags/{code}'.replace('{code}', code);
            var payload = {};
            if (typeof width !== 'undefined') {
                payload['width'] = width;
            }
            if (typeof height !== 'undefined') {
                payload['height'] = height;
            }
            if (typeof quality !== 'undefined') {
                payload['quality'] = quality;
            }
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
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
        AppwriteAvatarService.prototype.getImage = function (url, width, height) {
            if (typeof url === 'undefined') {
                throw new AppwriteException('Missing required parameter: "url"');
            }
            var path = '/avatars/image';
            var payload = {};
            if (typeof url !== 'undefined') {
                payload['url'] = url;
            }
            if (typeof width !== 'undefined') {
                payload['width'] = width;
            }
            if (typeof height !== 'undefined') {
                payload['height'] = height;
            }
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
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
        AppwriteAvatarService.prototype.getInitials = function (name, width, height, color, background) {
            var path = '/avatars/initials';
            var payload = {};
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
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
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
        AppwriteAvatarService.prototype.getQR = function (text, size, margin, download) {
            if (typeof text === 'undefined') {
                throw new AppwriteException('Missing required parameter: "text"');
            }
            var path = '/avatars/qr';
            var payload = {};
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
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
        return AppwriteAvatarService;
    }());
    AppwriteAvatarService.ɵfac = function AppwriteAvatarService_Factory(t) { return new (t || AppwriteAvatarService)(i0__namespace.ɵɵinject(AppwriteService)); };
    AppwriteAvatarService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AppwriteAvatarService, factory: AppwriteAvatarService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteAvatarService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppwriteService }]; }, null);
    })();

    var AppwriteDocumentsService = /** @class */ (function () {
        function AppwriteDocumentsService(appwriteService) {
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
        AppwriteDocumentsService.prototype.listDocuments = function (collectionId, filters, limit, offset, orderField, orderType, orderCast, search) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    if (typeof collectionId === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "collectionId"');
                    }
                    path = '/database/collections/{collectionId}/documents'.replace('{collectionId}', collectionId);
                    payload = {};
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
                    return [2 /*return*/, this.appwriteService.call('GET', path, { 'content-type': 'application/json', }, payload)];
                });
            });
        };
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
        AppwriteDocumentsService.prototype.createDocument = function (collectionId, data, read, write, parentDocument, parentProperty, parentPropertyType) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    if (typeof collectionId === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "collectionId"');
                    }
                    if (typeof data === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "data"');
                    }
                    path = '/database/collections/{collectionId}/documents'.replace('{collectionId}', collectionId);
                    payload = {};
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
                    return [2 /*return*/, this.appwriteService.call('POST', path, { 'content-type': 'application/json', }, payload)];
                });
            });
        };
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
        AppwriteDocumentsService.prototype.getDocument = function (collectionId, documentId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    if (typeof collectionId === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "collectionId"');
                    }
                    if (typeof documentId === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "documentId"');
                    }
                    path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId)
                        .replace('{documentId}', documentId);
                    payload = {};
                    return [2 /*return*/, this.appwriteService.call('GET', path, { 'content-type': 'application/json', }, payload)];
                });
            });
        };
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
        AppwriteDocumentsService.prototype.updateDocument = function (collectionId, documentId, data, read, write) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    if (typeof collectionId === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "collectionId"');
                    }
                    if (typeof documentId === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "documentId"');
                    }
                    if (typeof data === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "data"');
                    }
                    path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId)
                        .replace('{documentId}', documentId);
                    payload = {};
                    if (typeof data !== 'undefined') {
                        payload['data'] = data;
                    }
                    if (typeof read !== 'undefined') {
                        payload['read'] = read;
                    }
                    if (typeof write !== 'undefined') {
                        payload['write'] = write;
                    }
                    return [2 /*return*/, this.appwriteService.call('PATCH', path, { 'content-type': 'application/json', }, payload)];
                });
            });
        };
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
        AppwriteDocumentsService.prototype.deleteDocument = function (collectionId, documentId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    if (typeof collectionId === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "collectionId"');
                    }
                    if (typeof documentId === 'undefined') {
                        throw new AppwriteException('Missing required parameter: "documentId"');
                    }
                    path = '/database/collections/{collectionId}/documents/{documentId}'.replace('{collectionId}', collectionId)
                        .replace('{documentId}', documentId);
                    payload = {};
                    return [2 /*return*/, this.appwriteService.call('DELETE', path, { 'content-type': 'application/json', }, payload)];
                });
            });
        };
        return AppwriteDocumentsService;
    }());
    AppwriteDocumentsService.ɵfac = function AppwriteDocumentsService_Factory(t) { return new (t || AppwriteDocumentsService)(i0__namespace.ɵɵinject(AppwriteService)); };
    AppwriteDocumentsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AppwriteDocumentsService, factory: AppwriteDocumentsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteDocumentsService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppwriteService }]; }, null);
    })();

    var AppwriteFunctionsService = /** @class */ (function () {
        function AppwriteFunctionsService(appwriteService) {
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
        AppwriteFunctionsService.prototype.listExecutions = function (functionId, search, limit, offset, orderType) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof functionId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "functionId"');
                            }
                            path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
                            payload = {};
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
                            return [4 /*yield*/, this.appwriteService.call('GET', path, { 'content-type': 'application/json', }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteFunctionsService.prototype.createExecution = function (functionId, data) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof functionId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "functionId"');
                            }
                            path = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
                            payload = {};
                            if (typeof data !== 'undefined') {
                                payload['data'] = data;
                            }
                            return [4 /*yield*/, this.appwriteService.call('POST', path, { 'content-type': 'application/json', }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteFunctionsService.prototype.getExecution = function (functionId, executionId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof functionId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "functionId"');
                            }
                            if (typeof executionId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "executionId"');
                            }
                            path = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId)
                                .replace('{executionId}', executionId);
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, { 'content-type': 'application/json', }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return AppwriteFunctionsService;
    }());
    AppwriteFunctionsService.ɵfac = function AppwriteFunctionsService_Factory(t) { return new (t || AppwriteFunctionsService)(i0__namespace.ɵɵinject(AppwriteService)); };
    AppwriteFunctionsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AppwriteFunctionsService, factory: AppwriteFunctionsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteFunctionsService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppwriteService }]; }, null);
    })();

    var AppwriteLocaleService = /** @class */ (function () {
        function AppwriteLocaleService(appwriteService) {
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
        AppwriteLocaleService.prototype.get = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/locale';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * List Continents
         *
         * List of all continents. You can use the locale header to get the data in a
         * supported language.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteLocaleService.prototype.getContinents = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/locale/continents';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * List Countries
         *
         * List of all countries. You can use the locale header to get the data in a
         * supported language.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteLocaleService.prototype.getCountries = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/locale/countries';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * List EU Countries
         *
         * List of all countries that are currently members of the EU. You can use the
         * locale header to get the data in a supported language.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteLocaleService.prototype.getCountriesEU = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/locale/countries/eu';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * List Countries Phone Codes
         *
         * List of all countries phone codes. You can use the locale header to get the
         * data in a supported language.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteLocaleService.prototype.getCountriesPhones = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/locale/countries/phones';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteLocaleService.prototype.getCurrencies = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/locale/currencies';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * List Languages
         *
         * List of all languages classified by ISO 639-1 including 2-letter code, name
         * in English, and name in the respective language.
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        AppwriteLocaleService.prototype.getLanguages = function () {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/locale/languages';
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return AppwriteLocaleService;
    }());
    AppwriteLocaleService.ɵfac = function AppwriteLocaleService_Factory(t) { return new (t || AppwriteLocaleService)(i0__namespace.ɵɵinject(AppwriteService)); };
    AppwriteLocaleService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AppwriteLocaleService, factory: AppwriteLocaleService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteLocaleService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppwriteService }]; }, null);
    })();

    var AppwriteStorageService = /** @class */ (function () {
        function AppwriteStorageService(appwriteService) {
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
        AppwriteStorageService.prototype.listFiles = function (search, limit, offset, orderType) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/storage/files';
                            payload = {};
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
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteStorageService.prototype.createFile = function (file, read, write) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof file === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "file"');
                            }
                            path = '/storage/files';
                            payload = {};
                            if (typeof file !== 'undefined') {
                                payload['file'] = file;
                            }
                            if (typeof read !== 'undefined') {
                                payload['read'] = read;
                            }
                            if (typeof write !== 'undefined') {
                                payload['write'] = write;
                            }
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'multipart/form-data',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteStorageService.prototype.getFile = function (fileId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof fileId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "fileId"');
                            }
                            path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteStorageService.prototype.updateFile = function (fileId, read, write) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof fileId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "fileId"');
                            }
                            if (typeof read === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "read"');
                            }
                            if (typeof write === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "write"');
                            }
                            path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
                            payload = {};
                            if (typeof read !== 'undefined') {
                                payload['read'] = read;
                            }
                            if (typeof write !== 'undefined') {
                                payload['write'] = write;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PUT', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteStorageService.prototype.deleteFile = function (fileId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof fileId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "fileId"');
                            }
                            path = '/storage/files/{fileId}'.replace('{fileId}', fileId);
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('DELETE', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteStorageService.prototype.getFileDownload = function (fileId) {
            if (typeof fileId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "fileId"');
            }
            var path = '/storage/files/{fileId}/download'.replace('{fileId}', fileId);
            var payload = {};
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
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
        AppwriteStorageService.prototype.getFilePreview = function (fileId, width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, background, output) {
            if (typeof fileId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "fileId"');
            }
            var path = '/storage/files/{fileId}/preview'.replace('{fileId}', fileId);
            var payload = {};
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
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
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
        AppwriteStorageService.prototype.getFileView = function (fileId) {
            if (typeof fileId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "fileId"');
            }
            var path = '/storage/files/{fileId}/view'.replace('{fileId}', fileId);
            var payload = {};
            var uri = new URLParse__default['default'](this.appwriteService.config.endpoint + path);
            payload['project'] = this.appwriteService.config.project;
            uri.set('query', flatten(payload));
            return uri;
        };
        return AppwriteStorageService;
    }());
    AppwriteStorageService.ɵfac = function AppwriteStorageService_Factory(t) { return new (t || AppwriteStorageService)(i0__namespace.ɵɵinject(AppwriteService)); };
    AppwriteStorageService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AppwriteStorageService, factory: AppwriteStorageService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteStorageService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppwriteService }]; }, null);
    })();

    var AppwriteTeamsService = /** @class */ (function () {
        function AppwriteTeamsService(appwriteService) {
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
        AppwriteTeamsService.prototype.list = function (search, limit, offset, orderType) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = '/teams';
                            payload = {};
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
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.create = function (name, roles) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof name === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "name"');
                            }
                            path = '/teams';
                            payload = {};
                            if (typeof name !== 'undefined') {
                                payload['name'] = name;
                            }
                            if (typeof roles !== 'undefined') {
                                payload['roles'] = roles;
                            }
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.get = function (teamId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof teamId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "teamId"');
                            }
                            path = '/teams/{teamId}'.replace('{teamId}', teamId);
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.update = function (teamId, name) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof teamId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "teamId"');
                            }
                            if (typeof name === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "name"');
                            }
                            path = '/teams/{teamId}'.replace('{teamId}', teamId);
                            payload = {};
                            if (typeof name !== 'undefined') {
                                payload['name'] = name;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PUT', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.delete = function (teamId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof teamId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "teamId"');
                            }
                            path = '/teams/{teamId}'.replace('{teamId}', teamId);
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('DELETE', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.getMemberships = function (teamId, search, limit, offset, orderType) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof teamId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "teamId"');
                            }
                            path = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
                            payload = {};
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
                            return [4 /*yield*/, this.appwriteService.call('GET', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.createMembership = function (teamId, email, roles, url, name) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
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
                            path = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
                            payload = {};
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
                            return [4 /*yield*/, this.appwriteService.call('POST', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.updateMembershipRoles = function (teamId, membershipId, roles) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof teamId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "teamId"');
                            }
                            if (typeof membershipId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "membershipId"');
                            }
                            if (typeof roles === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "roles"');
                            }
                            path = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId)
                                .replace('{membershipId}', membershipId);
                            payload = {};
                            if (typeof roles !== 'undefined') {
                                payload['roles'] = roles;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PATCH', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.deleteMembership = function (teamId, membershipId) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (typeof teamId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "teamId"');
                            }
                            if (typeof membershipId === 'undefined') {
                                throw new AppwriteException('Missing required parameter: "membershipId"');
                            }
                            path = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId)
                                .replace('{membershipId}', membershipId);
                            payload = {};
                            return [4 /*yield*/, this.appwriteService.call('DELETE', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
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
        AppwriteTeamsService.prototype.updateMembershipStatus = function (teamId, membershipId, userId, secret) {
            return __awaiter(this, void 0, void 0, function () {
                var path, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
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
                            path = '/teams/{teamId}/memberships/{membershipId}/status'.replace('{teamId}', teamId)
                                .replace('{membershipId}', membershipId);
                            payload = {};
                            if (typeof userId !== 'undefined') {
                                payload['userId'] = userId;
                            }
                            if (typeof secret !== 'undefined') {
                                payload['secret'] = secret;
                            }
                            return [4 /*yield*/, this.appwriteService.call('PATCH', path, {
                                    'content-type': 'application/json',
                                }, payload)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return AppwriteTeamsService;
    }());
    AppwriteTeamsService.ɵfac = function AppwriteTeamsService_Factory(t) { return new (t || AppwriteTeamsService)(i0__namespace.ɵɵinject(AppwriteService)); };
    AppwriteTeamsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: AppwriteTeamsService, factory: AppwriteTeamsService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteTeamsService, [{
                type: i0.Injectable
            }], function () { return [{ type: AppwriteService }]; }, null);
    })();

    var AppwriteAngularModule = /** @class */ (function () {
        function AppwriteAngularModule() {
        }
        AppwriteAngularModule.forRoot = function (options) {
            return {
                ngModule: AppwriteAngularModule,
                providers: [
                    options.appwriteOptionsProvider || { provide: APPWRITE_OPTIONS_TOKEN, useValue: options.config },
                    { provide: APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN, useFactory: function () { return window.localStorage; } },
                    { provide: APPWRITE_LOCATION_PROVIDER_TOKEN, useFactory: function () { return window.location; } },
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
        };
        return AppwriteAngularModule;
    }());
    AppwriteAngularModule.ɵfac = function AppwriteAngularModule_Factory(t) { return new (t || AppwriteAngularModule)(); };
    AppwriteAngularModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: AppwriteAngularModule });
    AppwriteAngularModule.ɵinj = i0__namespace.ɵɵdefineInjector({ providers: [], imports: [[common.CommonModule, i1.HttpClientModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(AppwriteAngularModule, { imports: [common.CommonModule, i1.HttpClientModule] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppwriteAngularModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [common.CommonModule, i1.HttpClientModule],
                        providers: [],
                        exports: [],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN = APPWRITE_LOCAL_STORAGE_PROVIDER_TOKEN;
    exports.APPWRITE_LOCATION_PROVIDER_TOKEN = APPWRITE_LOCATION_PROVIDER_TOKEN;
    exports.APPWRITE_OPTIONS_TOKEN = APPWRITE_OPTIONS_TOKEN;
    exports.AppwriteAccountService = AppwriteAccountService;
    exports.AppwriteAngularModule = AppwriteAngularModule;
    exports.AppwriteAvatarService = AppwriteAvatarService;
    exports.AppwriteDocumentsService = AppwriteDocumentsService;
    exports.AppwriteException = AppwriteException;
    exports.AppwriteFunctionsService = AppwriteFunctionsService;
    exports.AppwriteLocaleService = AppwriteLocaleService;
    exports.AppwriteService = AppwriteService;
    exports.AppwriteStorageService = AppwriteStorageService;
    exports.AppwriteTeamsService = AppwriteTeamsService;
    exports.flatten = flatten;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=appwrite-angular.umd.js.map

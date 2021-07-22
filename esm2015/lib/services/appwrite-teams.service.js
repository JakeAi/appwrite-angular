import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { AppwriteException } from '../exceptions';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
import * as i1 from "./";
export class AppwriteTeamsService {
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
AppwriteTeamsService.ɵfac = function AppwriteTeamsService_Factory(t) { return new (t || AppwriteTeamsService)(i0.ɵɵinject(i1.AppwriteService)); };
AppwriteTeamsService.ɵprov = i0.ɵɵdefineInjectable({ token: AppwriteTeamsService, factory: AppwriteTeamsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppwriteTeamsService, [{
        type: Injectable
    }], function () { return [{ type: i1.AppwriteService }]; }, null); })();
//# sourceMappingURL=appwrite-teams.service.js.map
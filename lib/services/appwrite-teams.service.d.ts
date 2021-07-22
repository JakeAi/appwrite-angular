import { Membership, MembershipsList, Team, TeamsList } from '@appwrite/common';
import { AppwriteService } from './';
import * as i0 from "@angular/core";
export declare class AppwriteTeamsService<T = Team> {
    private appwriteService;
    constructor(appwriteService: AppwriteService);
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
    list(search?: string, limit?: number, offset?: number, orderType?: string): Promise<TeamsList>;
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
    create(name: string, roles?: string[]): Promise<T>;
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
    get(teamId: string): Promise<T>;
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
    update(teamId: string, name: string): Promise<T>;
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
    delete(teamId: string): Promise<void>;
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
    getMemberships(teamId: string, search?: string, limit?: number, offset?: number, orderType?: string): Promise<MembershipsList>;
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
    createMembership(teamId: string, email: string, roles: string[], url: string, name?: string): Promise<Membership>;
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
    updateMembershipRoles(teamId: string, membershipId: string, roles: string[]): Promise<Membership>;
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
    deleteMembership(teamId: string, membershipId: string): Promise<void>;
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
    updateMembershipStatus(teamId: string, membershipId: string, userId: string, secret: string): Promise<Membership>;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppwriteTeamsService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AppwriteTeamsService<any>>;
}

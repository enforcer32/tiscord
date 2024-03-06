import { IGuildMember } from '../interfaces/GuildMember.ts';
import { Snowflake } from '../discord/Snowflake.ts';
import { User } from './User.ts';

export class GuildMember {
	constructor(private _member: IGuildMember) {}

	get id(): Snowflake | undefined {
		return this._member.user?.id;
	}

	get user(): User | undefined {
		return this._member.user ? new User(this._member.user) : undefined;
	}

	get nick(): string | null | undefined {
		return this._member.nick;
	}

	get avatar(): string | null | undefined {
		return this._member.avatar;
	}

	get roles(): Snowflake[] {
		return this._member.roles;
	}

	get joinedAt(): Date {
		return this._member.joined_at;
	}

	get premiumSince(): Date | null | undefined {
		return this._member.premium_since;
	}

	get deaf(): boolean {
		return this._member.deaf;
	}

	get mute(): boolean {
		return this._member.mute;
	}

	get pending(): boolean | undefined {
		return this._member.pending;
	}

	get permissions(): string | undefined {
		return this._member.permissions;
	}

	get communicationDisabledUntil(): Date | null | undefined {
		return this._member.communication_disabled_until;
	}
}

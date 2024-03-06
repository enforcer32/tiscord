import { Snowflake } from '../discord/Snowflake.ts';
import { UserFlag } from '../discord/User.ts';

export class ClientUser {
	constructor(
		private _id: Snowflake,
		private _username: string,
		private _discriminator: string,
		private _avatar: string | null,
		private _bot: boolean,
		private _mfaEnabled: boolean,
		private _verified: boolean,
		private _email: string | null,
		private _flags: UserFlag
	) {}

	get id(): Snowflake {
		return this._id;
	}

	get username(): string {
		return this._username;
	}

	get discriminator(): string {
		return this._discriminator;
	}

	get avatar(): string | null {
		return this._avatar;
	}

	get bot(): boolean {
		return this._bot;
	}

	get mfaEnabled(): boolean {
		return this._mfaEnabled;
	}

	get verified(): boolean {
		return this._verified;
	}

	get email(): string | null {
		return this._email;
	}

	get flags(): UserFlag {
		return this._flags;
	}
}

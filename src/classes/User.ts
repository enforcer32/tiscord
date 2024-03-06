import { IUser, UserFlag, PremiumType } from '../interfaces/User.ts';
import { Snowflake } from '../discord/Snowflake.ts';

export class User {
	constructor(private _user: IUser) {}

	get id(): Snowflake {
		return this._user.id;
	}

	get username(): string {
		return this._user.username;
	}

	get descriminator(): string {
		return this._user.discriminator;
	}

	get avatar(): string | null {
		return this._user.avatar;
	}

	get bot(): boolean | undefined {
		return this._user.bot;
	}

	get system(): boolean | undefined {
		return this._user.system;
	}

	get mfaEnabled(): boolean | undefined {
		return this._user.mfa_enabled;
	}

	get banner(): string | null | undefined {
		return this._user.banner;
	}

	get accentColor(): number | null | undefined {
		return this._user.accent_color;
	}

	get locale(): string | undefined {
		return this._user.locale;
	}

	get verified(): boolean | undefined {
		return this._user.verified;
	}

	get email(): string | null | undefined {
		return this._user.email;
	}

	get flags(): UserFlag | undefined {
		return this._user.flags;
	}

	get premiumType(): PremiumType | undefined {
		return this._user.premium_type;
	}

	get publicFlags(): UserFlag | undefined {
		return this._user.public_flags;
	}
}

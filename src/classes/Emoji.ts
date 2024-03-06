import { IEmoji } from '../interfaces/Emoji.ts';
import { Snowflake } from '../discord/Snowflake.ts';
import { User } from './User.ts';

export class Emoji {
	constructor(private _emoji: IEmoji) {}

	get id(): Snowflake | null {
		return this._emoji.id;
	}

	get name(): string | null {
		return this._emoji.name;
	}

	get roles(): Snowflake[] | undefined {
		return this._emoji.roles;
	}

	get user(): User | undefined {
		return this._emoji.user ? new User(this._emoji.user) : undefined;
	}

	get requiredColons(): boolean | undefined {
		return this._emoji.require_colons;
	}

	get managed(): boolean | undefined {
		return this._emoji.managed;
	}

	get animated(): boolean | undefined {
		return this._emoji.animated;
	}

	get available(): boolean | undefined {
		return this._emoji.available;
	}
}

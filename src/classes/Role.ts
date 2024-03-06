import { IRole, IRoleTags } from '../interfaces/Role.ts';
import { Snowflake } from '../discord/Snowflake.ts';

export class Role {
	constructor(private _role: IRole) {}

	get id(): Snowflake {
		return this._role.id;
	}

	get name(): string {
		return this._role.name;
	}

	get color(): number {
		return this._role.color;
	}

	get hoist(): boolean {
		return this._role.hoist;
	}

	get icon(): string | null | undefined {
		return this._role.icon;
	}

	get unicodeEmoji(): string | null | undefined {
		return this._role.unicode_emoji;
	}

	get position(): number {
		return this._role.position;
	}

	get permissions(): string {
		return this._role.permissions;
	}

	get managed(): boolean {
		return this._role.managed;
	}

	get mentionable(): boolean {
		return this._role.mentionable;
	}

	get tags(): IRoleTags | undefined {
		return this._role.tags;
	}
}

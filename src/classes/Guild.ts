import { Snowflake } from '../discord/Snowflake.ts';
import { IGuild } from '../interfaces/Guild.ts';
import { GuildChannel } from './channels/GuildChannel.ts';
import { GuildMember } from './GuildMember.ts';
import { Role } from './Role.ts';
import { Emoji } from './Emoji.ts';

export class Guild {
	private _channels: Map<Snowflake, GuildChannel> = new Map();
	private _members: Map<Snowflake, GuildMember> = new Map();
	private _roles: Map<Snowflake, Role> = new Map();
	private _emojis: Map<Snowflake, Emoji> = new Map();

	constructor(private _guild: IGuild) {}

	get id(): Snowflake {
		return this._guild.id;
	}

	get name(): string {
		return this._guild.name;
	}

	get icon(): string | null {
		return this._guild.icon;
	}

	get description(): string | null {
		return this._guild.description;
	}

	get splash(): string | null {
		return this._guild.splash;
	}

	get channels(): Map<Snowflake, GuildChannel> {
		return this._channels;
	}

	set channels(channels: Map<Snowflake, GuildChannel>) {
		this._channels = channels;
	}

	get members(): Map<Snowflake, GuildMember> {
		return this._members;
	}

	set members(members: Map<Snowflake, GuildMember>) {
		this._members = members;
	}

	get roles(): Map<Snowflake, Role> {
		return this._roles;
	}

	set roles(roles: Map<Snowflake, Role>) {
		this._roles = roles;
	}

	get emojis(): Map<Snowflake, Emoji> {
		return this._emojis;
	}

	set emojis(emojis: Map<Snowflake, Emoji>) {
		this._emojis = emojis;
	}
}

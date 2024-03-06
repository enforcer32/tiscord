import { Snowflake } from '../discord/Snowflake.ts';

export interface IRole {
	id: Snowflake;
	name: string;
	color: number;
	hoist: boolean;
	icon?: string | null;
	unicode_emoji?: string | null;
	position: number;
	permissions: string;
	managed: boolean;
	mentionable: boolean;
	tags?: IRoleTags;
}

export interface IRoleTags {
	bot_id?: Snowflake;
	integration_id?: Snowflake;
	premium_subscriber?: null;
}

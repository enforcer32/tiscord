import { Snowflake } from '../discord/Snowflake.ts';

export interface IStageInstance {
	id: Snowflake;
	guild_id: Snowflake;
	channel_id: Snowflake;
	topic: string;
	privacy_level: PrivacyLevel;
	discoverable_disabled: boolean;
}

export enum PrivacyLevel {
	PUBLIC = 1,
	GUILD_ONLY = 2,
}

import { Snowflake } from '../discord/Snowflake.ts';
import { IUser } from './User.ts';

export interface IGuildScheduledEvent {
	id: Snowflake;
	guild_id: Snowflake;
	channel_id: Snowflake | null;
	creator_id: Snowflake | null;
	name: string;
	description?: string;
	scheduled_start_time: Date;
	scheduled_end_time: Date | null;
	privacy_level: GuildScheduledEventPrivacyLevel;
	status: GuildScheduledEventStatus;
	entity_type: GuildScheduledEventEntityType;
	entity_id: Snowflake | null;
	enity_metadata: IGuildScheduledEventEntityMetadata | null;
	creator?: IUser;
	user_count?: number;
}

export interface IGuildScheduledEventEntityMetadata {
	location?: string;
}

export enum GuildScheduledEventPrivacyLevel {
	GUILD_ONLY = 2,
}

export enum GuildScheduledEventStatus {
	SCHEDULED = 1,
	ACTIVE = 2,
	COMPLETED = 3,
	CANCELED = 4,
}

export enum GuildScheduledEventEntityType {
	STAGE_INSTANCE = 1,
	VOICE = 2,
	EXTERNAL = 3,
}

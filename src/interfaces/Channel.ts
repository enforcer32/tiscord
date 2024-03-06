import { Snowflake } from '../discord/Snowflake.ts';
import { IUser } from './User.ts';

export interface IChannel {
	id: Snowflake;
	type: ChannelType;
	guild_id?: Snowflake;
	position?: number;
	permission_overwrites?: IOverwrite[];
	name?: string;
	topic?: string | null;
	nsfw?: boolean;
	last_message_id?: Snowflake | null;
	bitrate?: number;
	user_limit?: number;
	rate_limit_per_user?: number;
	recipients?: IUser[];
	icon?: string | null;
	owner_id?: Snowflake;
	application_id?: Snowflake;
	parent_id?: Snowflake | null;
	last_pin_timestamp?: Date | null;
	rtc_region?: string | null;
	video_quality_mode?: VideoQualityMode;
	message_count?: number;
	member_count?: number;
	thread_metadata?: IThreadMetadata;
	member?: IThreadMember;
	default_auto_archive_duration?: number;
	permissions?: string;
}

export interface IOverwrite {
	id: Snowflake;
	type: number;
	allow: string;
	deny: string;
}

export interface IThreadMetadata {
	archived: boolean;
	auto_archive_duration: number;
	archive_timestamp: Date;
	locked: boolean;
	invitable?: boolean;
}

export interface IThreadMember {
	id?: Snowflake;
	user_id?: Snowflake;
	join_timestamp: Date;
	flags: number;
}

// Type 10, 11 and 12 are only available in API v9
export enum ChannelType {
	GUILD_TEXT = 0,
	DM = 1,
	GUILD_VOICE = 2,
	GROUP_DM = 3,
	GUILD_CATEGORY = 4,
	GUILD_NEWS = 5,
	GUILD_STORE = 6,
	GUILD_NEWS_THREAD = 10,
	GUILD_PUBLIC_THREAD = 11,
	GUILD_PRIVATE_THREAD = 12,
	GUILD_STAGE_VOICE = 13,
}

export enum VideoQualityMode {
	AUTO = 1,
	FULL = 2,
}

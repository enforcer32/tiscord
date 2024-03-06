import { Snowflake } from '../discord/Snowflake.ts';
import { IGuildMember } from './GuildMember.ts';

export interface IVoiceState {
	guild_id?: Snowflake;
	channel_id: Snowflake | null;
	user_id: Snowflake;
	member?: IGuildMember;
	session_id: string;
	deaf: boolean;
	mute: boolean;
	self_deaf: boolean;
	self_mute: boolean;
	self_stream?: boolean;
	self_video: boolean;
	suppress: boolean;
	request_to_speak_timestamp: Date | null; //ISO8601 timestamp
}

export interface IVoiceRegion {
	id: string;
	name: string;
	optimal: boolean;
	deprecated: boolean;
	custom: boolean;
}

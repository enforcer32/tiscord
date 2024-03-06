import { Snowflake } from '../discord/Snowflake.ts';
import { IUser } from './User.ts';

export interface IPresenceUpdate {
	user: IUser;
	guild_id: Snowflake;
	status: string; //either "idle", "dnd", "online", or "offline"
	activities: IActivity[];
	client_status: IClientStatus;
}

export interface IClientStatus {
	desktop?: string;
	mobile?: string;
	web?: string;
}

export interface IActivity {
	name: string;
	type: ActivityType;
	url?: string | null;
	created_at: number; //unix timestamp (in milliseconds) of when the activity was added to the user's session
	timestamps?: IActivityTimestamp; //unix timestamps for start and/or end of the game
	application_id?: Snowflake;
	details?: string;
	state?: string;
	emoji?: IActivityEmoji | null;
	party?: IActivityParty;
	assets?: IActivityAsset;
	secrets?: IActivitySecret;
	instance?: boolean;
	flags?: ActivityFlag;
	buttons?: IActivityButton[];
}

export interface IActivityTimestamp {
	start?: number;
	end?: number;
}

export interface IActivityEmoji {
	name: string;
	id?: Snowflake;
	animated?: boolean;
}

export interface IActivityParty {
	id?: string;
	size?: [];
}

export interface IActivityAsset {
	large_image?: string;
	large_text?: string;
	small_image?: string;
	small_text?: string;
}

export interface IActivitySecret {
	join?: string;
	spectate?: string;
	match?: string;
}

export interface IActivityButton {
	label: string;
	url: string;
}

export enum ActivityType {
	GAME = 0,
	STREAMING = 1,
	LISTENING = 2,
	WATCHING = 3,
	CUSTOM = 4,
	COMPETING = 5,
}

export enum ActivityFlag {
	INSTANCE = 1 << 0,
	JOIN = 1 << 1,
	SPECTATE = 1 << 2,
	JOIN_REQUEST = 1 << 3,
	SYNC = 1 << 4,
	PLAY = 1 << 5,
	PARTY_PRIVACY_FRIENDS = 1 << 6,
	PARTY_PRIVACY_VOICE_CHANNEL = 1 << 7,
	EMBEDDED = 1 << 8,
}

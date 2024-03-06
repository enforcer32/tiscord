import { Snowflake } from '../discord/Snowflake.ts';
import { IRole } from './Role.ts';
import { IEmoji } from './Emoji.ts';
import { IVoiceState } from './Voice.ts';
import { IGuildMember } from './GuildMember.ts';
import { IChannel } from './Channel.ts';
import { IPresenceUpdate } from './Presence.ts';
import { IWelcomeScreen } from './WelcomeScreen.ts';
import { IStageInstance } from './StageInstance.ts';
import { ISticker } from './Sticker.ts';
import { IGuildScheduledEvent } from './GuildScheduledEvent.ts';

export interface IGuild {
	id: Snowflake;
	name: string;
	icon: string | null;
	icon_hash?: string | null;
	splash: string | null;
	discovery_splash: string | null;
	owner?: boolean;
	owner_id: Snowflake;
	permissions?: string;
	region?: string | null;
	afk_channel_id: Snowflake | null;
	afk_timeout: number;
	widget_enabled?: boolean;
	widget_channel_id?: Snowflake | null;
	verification_level: VerificationLevel;
	default_message_notifications: DefaultMessageNotificationLevel;
	explicit_content_filter: ExplicitContentFilterLevel;
	roles: IRole[];
	emojis: IEmoji[];
	features: GuildFeature[];
	mfa_level: MFALevel;
	application_id: Snowflake | null;
	system_channel_id: Snowflake | null;
	system_channel_flags: SystemChannelFlag;
	rules_channel_id: Snowflake | null;
	joined_at?: Date; // ISO8601 timestamp
	large?: boolean;
	unavailable?: boolean;
	member_count?: number;
	voice_states?: IVoiceState[];
	members?: IGuildMember[];
	channels?: IChannel[];
	threads?: IChannel[];
	presences?: IPresenceUpdate[];
	max_presences: number | null;
	max_members?: number;
	vanity_url_code: string | null;
	description: string | null;
	banner: string | null;
	premium_tier: PremiumTier;
	premium_subscription_count?: number;
	preferred_locale: string;
	public_updates_channel_id: Snowflake | null;
	max_video_channel_users?: number;
	approximate_member_count?: number;
	approximate_presence_count?: number;
	welcome_screen?: IWelcomeScreen;
	nsfw_level: GuildNSFWLevel;
	stage_instances: IStageInstance[];
	stickers: ISticker[];
	guild_scheduled_events: IGuildScheduledEvent[];
	premium_progress_bar_enabled: boolean;
}

export enum GuildFeature {
	ANIMATED_ICON = 'ANIMATED_ICON',
	BANNER = 'BANNER',
	COMMERCE = 'COMMERCE',
	COMMUNITY = 'COMMUNITY',
	DISCOVERABLE = 'DISCOVERABLE',
	FEATURABLE = 'FEATURABLE',
	INVITE_SPLASH = 'INVITE_SPLASH',
	MEMBER_VERIFICATION_GATE_ENABLED = 'MEMBER_VERIFICATION_GATE_ENABLED',
	MONETIZATION_ENABLED = 'MONETIZATION_ENABLED',
	MORE_STICKERS = 'MORE_STICKERS',
	NEWS = 'NEWS',
	PARTNERED = 'PARTNERED',
	PREVIEW_ENABLED = 'PREVIEW_ENABLED',
	PRIVATE_THREADS = 'PRIVATE_THREADS',
	ROLE_ICONS = 'ROLE_ICONS',
	SEVEN_DAY_THREAD_ARCHIVE = 'SEVEN_DAY_THREAD_ARCHIVE',
	THREE_DAY_THREAD_ARCHIVE = 'THREE_DAY_THREAD_ARCHIVE',
	TICKETED_EVENTS_ENABLED = 'TICKETED_EVENTS_ENABLED',
	VANITY_URL = 'VANITY_URL',
	VERIFIED = 'VERIFIED',
	VIP_REGIONS = 'VIP_REGIONS',
	WELCOME_SCREEN_ENABLED = 'WELCOME_SCREEN_ENABLED',
}

export enum VerificationLevel {
	NONE = 0,
	LOW = 1,
	MEDIUM = 2,
	HIGH = 3,
	VERY_HIGH = 4,
}

export enum DefaultMessageNotificationLevel {
	ALL_MESSAGES = 0,
	ONLY_MENTIONS = 1,
}

export enum ExplicitContentFilterLevel {
	DISABLED = 0,
	MEMBERS_WITHOUT_ROLES = 1,
	ALL_MEMBERS = 2,
}

export enum MFALevel {
	NONE = 0,
	ELEVATED = 1,
}

export enum GuildNSFWLevel {
	DEFAULT = 0,
	EXPLICIT = 1,
	SAFE = 2,
	AGE_RESTRICTED = 3,
}

export enum PremiumTier {
	NONE = 0,
	TIER_1 = 1,
	TIER_2 = 2,
	TIER_3 = 3,
}

export enum SystemChannelFlag {
	SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
	SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
	SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
	SUPPRESS_JOIN_NOTIFICATION_REPLIES = 1 << 3,
}

import { IUser } from './User.ts';
import { Snowflake } from '../discord/Snowflake.ts';

export interface IGuildMember {
	user?: IUser;
	nick?: string | null;
	avatar?: string | null;
	roles: Snowflake[];
	joined_at: Date;
	premium_since?: Date | null;
	deaf: boolean;
	mute: boolean;
	pending?: boolean;
	permissions?: string;
	communication_disabled_until?: Date | null;
}

import { Snowflake } from '../discord/Snowflake.ts';
import { IUser } from './User.ts';

export interface IEmoji {
	id: Snowflake | null;
	name: string | null;
	roles?: Snowflake[];
	user?: IUser;
	require_colons?: boolean;
	managed?: boolean;
	animated?: boolean;
	available?: boolean;
}

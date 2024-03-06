import { Snowflake } from '../discord/Snowflake.ts';
import { IUser } from './User.ts';

export interface ISticker {
	id: Snowflake;
	pack_id?: Snowflake;
	name: string;
	description: string | null;
	tags: string;
	asset: string; //Deprecated previously the sticker asset hash, now an empty string
	type: StickerType;
	format_type: StickerFormatType;
	avilable?: boolean;
	user?: IUser;
	sort_value?: number;
}

export enum StickerType {
	STANDARD = 1,
	GUILD = 2,
}

export enum StickerFormatType {
	PNG = 1,
	APNG = 2,
	LOTTIE = 3,
}

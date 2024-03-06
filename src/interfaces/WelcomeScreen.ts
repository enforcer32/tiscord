import { Snowflake } from '../discord/Snowflake.ts';

export interface IWelcomeScreen {
	description: string | null;
	welcome_channels: IWelcomeScreenChannel[];
}

export interface IWelcomeScreenChannel {
	channel_id: Snowflake;
	description: string;
	emoji_id: Snowflake | null;
	emoji_name: string | null;
}

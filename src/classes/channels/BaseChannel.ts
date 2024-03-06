import { Snowflake } from '../../discord/Snowflake.ts';
import { ChannelType } from '../../interfaces/Channel.ts';

export abstract class BaseChannel {
	constructor(
		private _id: Snowflake,
		private _type: ChannelType,
		private _name: string | null | undefined
	) {}

	get id(): Snowflake {
		return this._id;
	}

	get type(): ChannelType {
		return this._type;
	}

	get name(): string | null | undefined {
		return this._name;
	}
}

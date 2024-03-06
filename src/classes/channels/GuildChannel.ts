import { Snowflake } from '../../discord/Snowflake.ts';
import { IChannel, IOverwrite } from '../../interfaces/Channel.ts';
import { BaseChannel } from './BaseChannel.ts';

export abstract class GuildChannel extends BaseChannel {
	constructor(private _channel: IChannel) {
		super(_channel.id, _channel.type, _channel.name);
	}

	get guildId(): Snowflake | undefined {
		return this._channel.guild_id;
	}

	get position(): number | undefined {
		return this._channel.position;
	}

	get permissionOverwrites(): IOverwrite[] | undefined {
		return this._channel.permission_overwrites;
	}

	get topic(): string | null | undefined {
		return this._channel.topic;
	}

	get nsfw(): boolean | undefined {
		return this._channel.nsfw;
	}

	get lastMessageId(): string | null | undefined {
		return this._channel.last_message_id;
	}

	get rateLimitPerUser(): number | undefined {
		return this._channel.rate_limit_per_user;
	}

	get parentId(): string | null | undefined {
		return this._channel.parent_id;
	}

	get lastPinTimestamp(): Date | null | undefined {
		return this._channel.last_pin_timestamp;
	}
}

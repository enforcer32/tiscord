import { GuildChannel } from './GuildChannel.ts';
import { IChannel } from '../../interfaces/Channel.ts';

export class CategoryChannel extends GuildChannel {
	constructor(_channel: IChannel) {
		super(_channel);
	}
}

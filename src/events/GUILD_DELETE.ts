import { Client } from '../client/Client.ts';
import { Payload } from '../interfaces/Payload.ts';
import { Events } from '../discord/Events.ts';

export default function (client: Client, payload: Payload) {
	const { id } = payload.d;
	const guild = client.guilds.get(id);
	client.guilds.delete(id);
	client.emit(Events.GUILD_DELETE, guild);
}

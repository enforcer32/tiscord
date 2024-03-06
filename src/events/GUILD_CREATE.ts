import { Client } from '../client/Client.ts';
import { Payload } from '../interfaces/Payload.ts';
import { Events } from '../discord/Events.ts';
import { Status } from '../discord/Gateway.ts';
import { asyncSleep } from '../helpers/sleep.ts';
import { IGuild } from '../interfaces/Guild.ts';
import { resolveGuildAPI } from '../resolvers/guild.ts';

export default async function (client: Client, payload: Payload) {
	while (client.status != Status.READY) await asyncSleep(1000);
	const guild: IGuild = payload.d;

	const cachedGuild = client.guilds.get(guild.id);
	if (cachedGuild) return client.emit(Events.GUILD_CREATE, cachedGuild);

	const cacheGuild = await resolveGuildAPI(client, guild.id);
	client.guilds.set(cacheGuild.id, cacheGuild);
	client.emit(Events.GUILD_CREATE, cacheGuild);
}

import { Client } from '../client/Client.ts';
import { Payload } from '../interfaces/Payload.ts';
import { Events } from '../discord/Events.ts';
import { Status } from '../discord/Gateway.ts';
import { ClientUser } from '../classes/ClientUser.ts';
import { resolveGuildAPI } from '../resolvers/guild.ts';

export default async function (client: Client, payload: Payload) {
	const { user, guilds } = payload.d;

	client.user = new ClientUser(
		user.id,
		user.username,
		user.descriminator,
		user.avatar,
		user.bot,
		user.mfa_enabled,
		user.verified,
		user.email,
		user.flags
	);

	for (const guild of guilds) {
		if (!client.guilds.has(guild.id)) {
			const cacheGuild = await resolveGuildAPI(client, guild.id);
			client.guilds.set(cacheGuild.id, cacheGuild);
		}
	}

	client.status = Status.READY;
	client.emit(Events.READY);
}

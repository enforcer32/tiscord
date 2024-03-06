import { Snowflake } from '../discord/Snowflake.ts';
import { Header } from '../discord/Gateway.ts';
import { URI, Endpoint } from '../discord/Gateway.ts';

export class GuildAPI {
	constructor(private headers: Header) {}

	async fetchGuild(guildId: Snowflake) {
		const response = await fetch(
			`${URI.API}/${Endpoint.GUILDS}/${guildId}?with_counts=true`,
			{
				method: 'get',
				headers: this.headers,
			}
		);
		return response.json();
	}

	async fetchGuildChannels(guildId: Snowflake) {
		const response = await fetch(
			`${URI.API}/${Endpoint.GUILDS}/${guildId}/${Endpoint.CHANNELS}`,
			{ method: 'get', headers: this.headers }
		);
		return response.json();
	}

	async fetchGuildMembers(guildId: Snowflake) {
		const response = await fetch(
			`${URI.API}/${Endpoint.GUILDS}/${guildId}/${Endpoint.MEMBERS}`,
			{ method: 'get', headers: this.headers }
		);
		return response.json();
	}
}

import { Client } from '../client/Client.ts';
import { Snowflake, NullSnowflake } from '../discord/Snowflake.ts';
import { GuildChannel } from '../classes/channels/GuildChannel.ts';
import { IChannel, ChannelType } from '../interfaces/Channel.ts';
import { GuildMember } from '../classes/GuildMember.ts';
import { IGuildMember } from '../interfaces/GuildMember.ts';
import { TextChannel } from '../classes/channels/TextChannel.ts';
import { CategoryChannel } from '../classes/channels/CategoryChannel.ts';
import { VoiceChannel } from '../classes/channels/VoiceChannel.ts';
import { IRole } from '../interfaces/Role.ts';
import { Role } from '../classes/Role.ts';
import { IEmoji } from '../interfaces/Emoji.ts';
import { Emoji } from '../classes/Emoji.ts';
import { Guild } from '../classes/Guild.ts';
import { IGuild } from '../interfaces/Guild.ts';

export async function resolveGuildAPI(
	client: Client,
	guildId: Snowflake
): Promise<Guild> {
	const fetchGuild: IGuild = await client.api.guild.fetchGuild(guildId);

	const guild = new Guild(fetchGuild);
	guild.channels = await resolveGuildChannels(client, guild.id);
	guild.members = await resolveGuildMembers(client, guild.id);
	guild.roles = resolveGuildRoles(fetchGuild.roles);
	guild.emojis = resolveGuildEmojis(fetchGuild.emojis);
	return guild;
}

export async function resolveGuildChannels(
	client: Client,
	guildId: Snowflake
): Promise<Map<Snowflake, GuildChannel>> {
	const map = new Map<Snowflake, GuildChannel>();
	const fetchChannels: IChannel[] = await client.api.guild.fetchGuildChannels(
		guildId
	);

	for (const channel of fetchChannels) {
		switch (channel.type) {
			case ChannelType.GUILD_TEXT:
				map.set(channel.id, new TextChannel(channel));
				break;
			case ChannelType.GUILD_VOICE:
				map.set(channel.id, new VoiceChannel(channel));
				break;
			case ChannelType.GUILD_CATEGORY:
				map.set(channel.id, new CategoryChannel(channel));
				break;
		}
	}

	return map;
}

export async function resolveGuildMembers(
	client: Client,
	guildId: Snowflake
): Promise<Map<Snowflake, GuildMember>> {
	const map = new Map<Snowflake, GuildMember>();
	const members: IGuildMember[] = await client.api.guild.fetchGuildMembers(
		guildId
	);

	for (const member of members)
		if (member.user) map.set(member.user.id, new GuildMember(member));

	return map;
}

export function resolveGuildRoles(roles: IRole[]): Map<Snowflake, Role> {
	const map = new Map<Snowflake, Role>();
	for (const role of roles) map.set(role.id, new Role(role));
	return map;
}

export function resolveGuildEmojis(emojis: IEmoji[]): Map<Snowflake, Emoji> {
	const map = new Map<Snowflake, Emoji>();
	for (const emoji of emojis)
		map.set(emoji.id || NullSnowflake(), new Emoji(emoji));
	return map;
}

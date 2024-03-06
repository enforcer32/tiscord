import { Client, Events } from 'https://deno.land/x/tiscord/mod.ts';

const token = '';

const client = new Client();
client.login(token);

client.on(Events.READY, () => {
	console.log(`LOGGED IN AS ${client.user.username}`);
});

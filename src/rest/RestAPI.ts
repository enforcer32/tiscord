import { Header } from '../discord/Gateway.ts';
import { GuildAPI } from './GuildAPI.ts';

export class RestAPI {
	private headers: Header;
	private _guild: GuildAPI;

	constructor(private token: string) {
		this.headers = {
			'Content-Type': 'application/json',
			Authorization: `Bot ${this.token}`,
		};

		this._guild = new GuildAPI(this.headers);
	}

	get guild(): GuildAPI {
		return this._guild;
	}
}

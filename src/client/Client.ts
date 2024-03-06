import EventEmitter from 'https://deno.land/std@0.120.0/node/events.ts';
import { WebSocketManager } from './WebSocketManager.ts';
import { Status } from '../discord/Gateway.ts';
import { ClientUser } from '../classes/ClientUser.ts';
import { RestAPI } from '../rest/RestAPI.ts';
import { Snowflake } from '../discord/Snowflake.ts';
import { Guild } from '../classes/Guild.ts';

export class Client extends EventEmitter {
	private websocket: WebSocketManager;
	private token!: string;
	private _status: Status = Status.NONE;
	private _api!: RestAPI;

	private _user!: ClientUser;
	private _guilds: Map<Snowflake, Guild> = new Map();

	constructor() {
		super();
		this.websocket = new WebSocketManager(this);
	}

	login(token: string) {
		this.token = token;
		this._api = new RestAPI(token);
		this.websocket.connect(token);
	}

	get status(): Status {
		return this._status;
	}

	set status(status: Status) {
		this._status = status;
	}

	get api(): RestAPI {
		return this._api;
	}

	get user(): ClientUser {
		return this._user;
	}

	set user(user: ClientUser) {
		this._user = user;
	}

	get guilds(): Map<Snowflake, Guild> {
		return this._guilds;
	}

	set guilds(guilds: Map<Snowflake, Guild>) {
		this._guilds = guilds;
	}
}

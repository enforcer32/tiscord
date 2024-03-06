export enum Opcode {
	DISPATCH = 0,
	HEARTBEAT = 1,
	IDENTIFY = 2,
	PRESENCE_UPDATE = 3,
	VOICE_STATE_UPDATE = 4,
	RESUME = 6,
	RECONNECT = 7,
	REQUEST_GUILD_MEMBERS = 8,
	INVALID_SESSION = 9,
	HELLO = 10,
	HEARTBEAT_ACK = 11,
}

export enum CloseEventCode {
	UNKNOWN_ERROR = 4000,
	UNKNOWN_OPCODE = 4001,
	DECODE_ERROR = 4002,
	NOT_AUTHENTICATED = 4003,
	AUTHENTICATION_FAILED = 4004,
	ALREADY_AUTHENTICATION = 4005,
	INVALID_SEQ = 4007,
	RATE_LIMITED = 4008,
	SESSION_TIMED_OUT = 4009,
	INVALID_SHARD = 4010,
	SHARDING_REQUIRED = 4011,
	INVALID_API_VERSION = 4012,
	INVALID_INTENT = 4013,
	DISALLOWED_INTENT = 4014,
}

export enum URI {
	GATEWAY = 'wss://gateway.discord.gg/?v=6&encoding=json',
	API = 'https://discord.com/api/v6',
}

export enum Status {
	NONE = 0,
	READY = 1,
	IDLE = 2,
	DISCONNECTED = 3,
}

export enum Endpoint {
	GUILDS = 'guilds',
	CHANNELS = 'channels',
	MEMBERS = 'members',
}

export type Header = {
	'Content-Type': string;
	Authorization: string;
};

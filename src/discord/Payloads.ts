import { Opcode } from './Gateway.ts';

export const HeartbeatPayload = {
	op: Opcode.HEARTBEAT,
	d: null,
};

export const IdentifyPayload = {
	op: Opcode.IDENTIFY,
	d: {
		token: '',
		properties: {
			$os: 'linux',
			$browser: 'tiscord',
			$device: 'tiscord',
		},
	},
};

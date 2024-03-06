import { Client } from './Client.ts';
import { URI, Opcode } from '../discord/Gateway.ts';
import { Payload } from '../interfaces/Payload.ts';
import { HeartbeatPayload, IdentifyPayload } from '../discord/Payloads.ts';
import { Events } from '../discord/Events.ts';

export class WebSocketManager {
	private websocket!: WebSocket;
	private interval = 0;

	constructor(private client: Client) {}

	connect(token: string) {
		this.websocket = new WebSocket(URI.GATEWAY);

		this.websocket.onmessage = async (wsevent) => {
			const payload: Payload = JSON.parse(wsevent.data);
			const { op, t: event } = payload;

			switch (op) {
				case Opcode.DISPATCH: {
					console.log(`${event} event dispatched`);
					break;
				}
				case Opcode.INVALID_SESSION: {
					console.log('Invalid Session');
					break;
				}
				case Opcode.HELLO: {
					const { heartbeat_interval } = payload.d;
					this.interval = this.sendHeartbeat(heartbeat_interval);
					this.identify(token);
					break;
				}
			}

			if (event && event in Events) {
				const { default: handler } = await import(
					`../events/${event}.ts`
				);
				handler(this.client, payload);
			}
		};

		this.websocket.onclose = (wsevent) => {
			console.log(`${wsevent.code}: ${wsevent.reason}`);
			Deno.exit(wsevent.code);
		};
	}

	private sendHeartbeat(ms: number): number {
		return setInterval(() => {
			this.websocket.send(JSON.stringify(HeartbeatPayload));
		}, ms);
	}

	private identify(token: string): void {
		IdentifyPayload.d.token = token;
		this.websocket.send(JSON.stringify(IdentifyPayload));
	}
}

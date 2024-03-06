import { Opcode } from '../discord/Gateway.ts';

export interface Payload {
	op: Opcode;
	d: any | null;
	s: number | null;
	t: string | null;
}

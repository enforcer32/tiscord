import _Snowflake from 'https://deno.land/x/snowflake@v1/mod.ts';

export type Snowflake = string;

export function NullSnowflake(): string {
	return 'NULL:' + new _Snowflake().generate();
}

import type { ChildProcessWithoutNullStreams, SpawnOptions } from 'child_process'
export function exec(
	command:string,
	args:ReadonlyArray<string>,
	argv__options?:SpawnOptions,
):Promise<ChildProcessWithoutNullStreams>

import type { ChildProcessWithoutNullStreams, SpawnOptions } from 'node:child_process'
export function spawn_pipe_process(
	command:string,
	arg_a:ReadonlyArray<string>,
	argv__options?:SpawnOptions,
):Promise<ChildProcessWithoutNullStreams>

import type { ChildProcess } from 'child_process'
import { WritableStream } from 'memory-streams'
import type { Writable } from 'stream'
import { pipe_child_process } from './pipe_child_process'
export async function capture_child_process(
	child_process: ChildProcess, opts: capture_child_process_opts_type = {}
) {
	const stdout = opts.stdout || new WritableStream()
	const stderr = opts.stderr || new WritableStream()
	try {
		await pipe_child_process(
			child_process,
			child_process => {
				child_process.stdout?.pipe(stdout)
				child_process.stderr?.pipe(stderr)
			})
	} catch {
		throw stderr.toString().trim()
	}
	return stdout.toString().trim()
}
export const capture = capture_child_process
export const capture__child_process = capture_child_process
export type capture_child_process_opts_type = {
	stdout?: Writable
	stderr?: Writable
}

import { ChildProcess } from 'child_process'
import { WritableStream } from 'memory-streams'
import { pipe_child_process } from './pipe_child_process'
export async function capture_child_process(child_process:ChildProcess) {
	const stdout = new WritableStream()
	const stderr = new WritableStream()
	try {
		await pipe_child_process(
			child_process,
			child_process=>{
				child_process.stdout?.pipe(stdout)
				child_process.stderr?.pipe(stderr)
			})
	} catch {
		throw stderr.toString().trim()
	}
	return stdout.toString().trim()
}
export const capture__child_process = capture_child_process

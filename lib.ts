import { ChildProcess } from 'child_process'
import { WritableStream } from 'memory-streams'
export type Receive__child_process =
	(child_process:ChildProcess)=>void
export function pipe__stdout_and_stderr(child_process:ChildProcess) {
	child_process.stdout?.pipe(process.stdout)
	child_process.stderr?.pipe(process.stderr)
}
export type Pipe__child_process =
	(
		child_process:ChildProcess,
		pipe?:Receive__child_process
	)=>Promise<number>
export function _pipe__child_process(
	pipe:Receive__child_process = pipe__stdout_and_stderr
) {
	return function pipe__child_process(
		child_process:ChildProcess,
		pipe__override:Receive__child_process = pipe
	) {
		pipe__override(child_process)
		return new Promise((resolve, reject)=>{
			child_process.on('close', code=>{
				if (code) {
					reject(code)
				} else {
					resolve(code)
				}
			})
		})
	} as Pipe__child_process
}
export const pipe__child_process:Pipe__child_process = _pipe__child_process()
export function receive__child_process(fn:Receive__child_process) {
	return fn
}
export async function capture__child_process(child_process:ChildProcess) {
	const stdout = new WritableStream()
	const stderr = new WritableStream()
	try {
		await pipe__child_process(
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

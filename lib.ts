import { ChildProcessWithoutNullStreams } from 'child_process'
export type Receive__child_process = (child_process:ChildProcessWithoutNullStreams)=>void
export function pipe__stdout_and_stderr(child_process:ChildProcessWithoutNullStreams) {
	child_process.stdout.pipe(process.stdout)
	child_process.stderr.pipe(process.stderr)
}
export type Pipe__child_process = (child_process:ChildProcessWithoutNullStreams, pipe?: Receive__child_process) => Promise<number>
export function _pipe__child_process(pipe:Receive__child_process = pipe__stdout_and_stderr) {
	return function pipe__child_process(child_process:ChildProcessWithoutNullStreams, pipe__override = pipe) {
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
export const pipe__child_process = _pipe__child_process()

import type { ChildProcess } from 'child_process'
import type { receive_child_process_T } from './receive_child_process.js'
import { pipe_stdout_and_stderr } from './pipe_stdout_and_stderr.js'
export function pipe_child_process_(
	pipe:receive_child_process_T = pipe_stdout_and_stderr
) {
	return function pipe_child_process(
		child_process:ChildProcess,
		override_pipe:receive_child_process_T = pipe
	) {
		override_pipe(child_process)
		return new Promise((resolve, reject)=>{
			child_process.on('close', (code:number)=>{
				if (code) {
					reject(code)
				} else {
					resolve(code)
				}
			})
		})
	} as pipe_child_process_T
}
export type pipe_child_process_T =
	(child_process:ChildProcess, pipe?:receive_child_process_T)=>Promise<number>
export {
	pipe_child_process_ as _pipe__child_process
}

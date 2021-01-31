import type { ChildProcess } from 'child_process'
import type { receive_child_process_type } from './receive_child_process'
import { pipe_stdout_and_stderr } from './pipe_stdout_and_stderr'
export function _pipe_child_process(
	pipe:receive_child_process_type = pipe_stdout_and_stderr
) {
	return function pipe_child_process(
		child_process:ChildProcess,
		override_pipe:receive_child_process_type = pipe
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
	} as pipe_child_process_type
}
export type pipe_child_process_type =
	(child_process:ChildProcess, pipe?:receive_child_process_type)=>Promise<number>
export {
	_pipe_child_process as _pipe__child_process
}

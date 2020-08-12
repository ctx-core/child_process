import { ChildProcess } from 'child_process'
import { receive_child_process_type } from './receive_child_process'
import { pipe_stdout_and_stderr } from './pipe_stdout_and_stderr'
export type pipe_child_process_type =
	(child_process:ChildProcess, pipe?:receive_child_process_type)=>Promise<number>
export function _pipe_child_process(
	pipe:receive_child_process_type = pipe_stdout_and_stderr
) {
	return function pipe__child_process(
		child_process:ChildProcess,
		pipe__override:receive_child_process_type = pipe
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
	} as pipe_child_process_type
}
export const _pipe__child_process = _pipe_child_process
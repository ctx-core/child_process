import { stdout_stderr__pipe } from '../stdout_stderr__pipe/index.js'
export function child_process__pipe_(pipe = stdout_stderr__pipe) {
	return function child_process__pipe(child_process, override_pipe = pipe) {
		override_pipe(child_process)
		return new Promise((resolve, reject)=>{
			child_process.on('close', (code)=>{
				if (code) {
					reject(code)
				} else {
					resolve(code)
				}
			})
		})
	}
}
export {
	child_process__pipe_ as pipe_child_process,
	child_process__pipe_ as _pipe__child_process,
}

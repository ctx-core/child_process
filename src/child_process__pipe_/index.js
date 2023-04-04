import { stdout_stderr__pipe } from '../stdout_stderr__pipe/index.js'
/** @typedef {import('../child_process__receive').child_process__receive_T}child_process__receive_T */
/** @typedef {import('./index.d.ts').child_process__pipe_T}child_process__pipe_T */
/**
 * @param {child_process__receive_T}[pipe]
 * @returns {child_process__pipe_T}
 * @private
 */
export function child_process__pipe_(
	pipe = stdout_stderr__pipe
) {
	return function child_process__pipe(
		child_process,
		override_pipe = pipe
	) {
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

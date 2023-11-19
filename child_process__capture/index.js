import { WritableStream } from 'memory-streams'
import { child_process__pipe } from '../child_process__pipe/index.js'
/** @typedef {import('child_process').ChildProcess} */
/** @typedef {import('./index.d.ts').child_process__capture__params_T} */
/**
 * @param {ChildProcess}child_process
 * @param {child_process__capture__params_T}[params]
 * @returns {Promise<string>}
 */
export async function child_process__capture(
	child_process,
	params = {}
) {
	const stdout = params.stdout || new WritableStream()
	const stderr = params.stderr || new WritableStream()
	try {
		await child_process__pipe(child_process, child_process=>{
			child_process.stdout?.pipe(stdout)
			child_process.stderr?.pipe(stderr)
		})
	} catch {
		throw stderr.toString().trim()
	}
	return stdout.toString().trim()
}
export {
	child_process__capture as capture_child_process,
	child_process__capture as capture,
	child_process__capture as capture__child_process,
}

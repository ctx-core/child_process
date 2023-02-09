import { WritableStream } from 'memory-streams'
import { child_process__pipe } from '../child_process__pipe/index.js'
export async function child_process__capture(child_process, opts = {}) {
	const stdout = opts.stdout || new WritableStream()
	const stderr = opts.stderr || new WritableStream()
	try {
		await child_process__pipe(child_process, (child_process)=>{
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

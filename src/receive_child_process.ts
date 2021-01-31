import type { ChildProcess } from 'child_process'
export type receive_child_process_type = (child_process:ChildProcess)=>void
export function receive_child_process(fn:receive_child_process_type) {
	return fn
}
export {
	receive_child_process as receive__child_process
}

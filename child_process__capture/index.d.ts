import type { ChildProcess } from 'node:child_process'
import type { Writable } from 'stream'
export declare function child_process__capture(
	child_process:ChildProcess,
	params?:child_process__capture__params_T
):Promise<string>
export {
	child_process__capture as capture_child_process,
	child_process__capture as capture,
	child_process__capture as capture__child_process,
}
export interface child_process__capture__params_T {
	stdout?:Writable
	stderr?:Writable
}
export type child_process__capture_opts_type = child_process__capture__params_T

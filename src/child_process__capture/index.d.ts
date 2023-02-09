import type { ChildProcess } from 'child_process'
import type { Writable } from 'stream'
export declare function child_process__capture(child_process:ChildProcess, opts?:child_process__capture_opts_type):Promise<string>;
export interface child_process__capture_opts_type {
	stdout?:Writable;
	stderr?:Writable;
}
export {
	child_process__capture as capture_child_process,
	child_process__capture as capture,
	child_process__capture as capture__child_process,
}

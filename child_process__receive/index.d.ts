import type { ChildProcess } from 'node:child_process'
export declare function child_process__receive(
	fn:child_process__receive_T
):child_process__receive_T
export {
	child_process__receive as receive_child_process,
	child_process__receive as receive__child_process,
}
export type child_process__receive_T = (child_process:ChildProcess)=>void
export declare type receive_child_process_T = child_process__receive_T

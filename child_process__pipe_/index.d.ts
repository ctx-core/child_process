/// <reference types="node" />
import type { ChildProcess } from 'child_process'
import type { child_process__receive_T } from '../child_process__receive/index.js'
export declare function child_process__pipe_(
	pipe?:child_process__receive_T
):child_process__pipe_T
export {
	child_process__pipe_ as pipe_child_process_,
	child_process__pipe_ as _pipe__child_process,
}
export type child_process__pipe_T = (
	child_process:ChildProcess,
	pipe?:child_process__receive_T
)=>Promise<number>
export declare type pipe_child_process_T = child_process__pipe_T

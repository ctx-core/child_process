/// <reference types="node" />
import type { ChildProcess } from 'child_process';
import type { receive_child_process_type } from './receive_child_process';
export declare function _pipe_child_process(pipe?: receive_child_process_type): pipe_child_process_type;
export declare const _pipe__child_process: typeof _pipe_child_process;
export declare type pipe_child_process_type = (child_process: ChildProcess, pipe?: receive_child_process_type) => Promise<number>;

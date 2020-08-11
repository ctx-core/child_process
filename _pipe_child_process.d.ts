/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { receive_child_process_type } from './receive_child_process';
export declare type pipe_child_process_type = (child_process: ChildProcess, pipe?: receive_child_process_type) => Promise<number>;
export declare function _pipe_child_process(pipe?: receive_child_process_type): pipe_child_process_type;
export declare const _pipe__child_process: typeof _pipe_child_process;

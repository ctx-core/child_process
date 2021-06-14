/// <reference types="node" />
import type { ChildProcess } from 'child_process';
import type { receive_child_process_T } from './receive_child_process';
export declare function pipe_child_process_(pipe?: receive_child_process_T): pipe_child_process_T;
export declare type pipe_child_process_T = (child_process: ChildProcess, pipe?: receive_child_process_T) => Promise<number>;
export { pipe_child_process_ as _pipe__child_process };

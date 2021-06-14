/// <reference types="node" />
import type { ChildProcess } from 'child_process';
export declare type receive_child_process_T = (child_process: ChildProcess) => void;
export declare function receive_child_process(fn: receive_child_process_T): receive_child_process_T;
export { receive_child_process as receive__child_process };

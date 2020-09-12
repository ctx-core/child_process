/// <reference types="node" />
import type { ChildProcess } from 'child_process';
export declare type receive_child_process_type = (child_process: ChildProcess) => void;
export declare function receive_child_process(fn: receive_child_process_type): receive_child_process_type;
export declare const receive__child_process: typeof receive_child_process;

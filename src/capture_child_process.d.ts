/// <reference types="node" />
import type { ChildProcess } from 'child_process';
import type { Writable } from 'stream';
export declare function capture_child_process(child_process: ChildProcess, opts?: capture_child_process_opts_type): Promise<string>;
export interface capture_child_process_opts_type {
    stdout?: Writable;
    stderr?: Writable;
}
export { capture_child_process as capture, capture_child_process as capture__child_process, };

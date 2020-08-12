/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { Writable } from 'stream';
export declare function capture_child_process(child_process: ChildProcess, opts?: capture_child_process_opts_type): Promise<string>;
export declare const capture: typeof capture_child_process;
export declare const capture__child_process: typeof capture_child_process;
export declare type capture_child_process_opts_type = {
    stdin?: Writable;
    stdout?: Writable;
};

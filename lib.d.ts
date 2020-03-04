/// <reference types="node" />
import { ChildProcessWithoutNullStreams } from 'child_process';
export declare type Receive__child_process = (child_process: ChildProcessWithoutNullStreams) => void;
export declare function pipe__stdout_and_stderr(child_process: ChildProcessWithoutNullStreams): void;
export declare type Pipe__child_process = (child_process: ChildProcessWithoutNullStreams, pipe?: Receive__child_process) => Promise<number>;
export declare function _pipe__child_process(pipe?: Receive__child_process): Pipe__child_process;
export declare const pipe__child_process: Pipe__child_process;
export declare function receive__child_process(fn: Receive__child_process): Receive__child_process;

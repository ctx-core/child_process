/// <reference types="node" />
import { ChildProcess } from 'child_process';
export declare type Receive__child_process = (cmd: ChildProcess) => void;
export declare function pipe__stdout_and_stderr(cmd: ChildProcess): void;
export declare type Pipe__child_process = (child_process: ChildProcess, pipe?: Receive__child_process) => Promise<number>;
export declare function _pipe__child_process(pipe?: Receive__child_process): Pipe__child_process;
export declare const pipe__child_process: Pipe__child_process;

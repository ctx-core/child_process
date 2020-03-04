/// <reference types="node" />
import { ChildProcessWithoutNullStreams } from 'child_process';
export declare type Pipe = (cmd: ChildProcessWithoutNullStreams) => void;
export declare function pipe__stdout_and_stderr(cmd: ChildProcessWithoutNullStreams): void;
export declare function _spawn__pipe(pipe?: Pipe): (cmd_name: string, argv: string[], pipe__override?: Pipe) => Promise<number>;
export declare const spawn__pipe: (cmd_name: string, argv: string[], pipe__override?: Pipe) => Promise<number>;
export declare const _cmd__spawn: (cmd_name: string, argv: string[], pipe__override?: Pipe) => Promise<number>;

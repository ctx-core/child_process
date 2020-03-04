/// <reference types="node" />
import { ChildProcessWithoutNullStreams } from 'child_process';
export declare type Pipe = (cmd: ChildProcessWithoutNullStreams) => void;
export declare function pipe__stdout_and_stderr(cmd: ChildProcessWithoutNullStreams): void;
export declare type Spawn__pipe = (cmd_name: string, argv: string[], pipe__override?: Pipe) => Promise<number>;
export declare function _spawn__pipe(pipe?: Pipe): Spawn__pipe;
export declare const spawn__pipe: Spawn__pipe;
export declare const _cmd__spawn: Spawn__pipe;

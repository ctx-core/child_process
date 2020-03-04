/// <reference types="node" />
import { ChildProcessWithoutNullStreams } from 'child_process';
export declare function pipe__stdout_and_stderr(cmd: ChildProcessWithoutNullStreams): void;
export declare function _spawn__pipe(pipe?: typeof pipe__stdout_and_stderr): (cmd_name: any, argv: any, pipe__override?: typeof pipe__stdout_and_stderr) => Promise<unknown>;
export declare const spawn__pipe: (cmd_name: any, argv: any, pipe__override?: typeof pipe__stdout_and_stderr) => Promise<unknown>;
export declare const _cmd__spawn: (cmd_name: any, argv: any, pipe__override?: typeof pipe__stdout_and_stderr) => Promise<unknown>;

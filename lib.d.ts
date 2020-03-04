export declare function pipe__stdout_and_stderr(cmd: any): void;
export declare function _spawn__pipe(pipe?: typeof pipe__stdout_and_stderr): (cmd_name: any, argv: any) => Promise<unknown>;
export declare const spawn__pipe: (cmd_name: any, argv: any) => Promise<unknown>;
export declare const _cmd__spawn: (cmd_name: any, argv: any) => Promise<unknown>;

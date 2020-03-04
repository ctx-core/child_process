export declare function pipe__stdout_and_stderr(cmd: any): void;
export declare function spawn__pipe(cmd_name: any, argv: any, pipe?: typeof pipe__stdout_and_stderr): Promise<unknown>;
export declare const _cmd__spawn: typeof spawn__pipe;

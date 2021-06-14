export function pipe_stdout_and_stderr(child_process) {
    var _a, _b;
    (_a = child_process.stdout) === null || _a === void 0 ? void 0 : _a.pipe(process.stdout);
    (_b = child_process.stderr) === null || _b === void 0 ? void 0 : _b.pipe(process.stderr);
}
export { pipe_stdout_and_stderr as pipe__stdout_and_stderr };
//# sourceMappingURL=src/pipe_stdout_and_stderr.js.map
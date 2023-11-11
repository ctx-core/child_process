/** @typedef {import('child_process').ChildProcess}ChildProcess */
/**
 * @param {ChildProcess}child_process
 */
export function stdout_stderr__pipe(child_process) {
	child_process.stdout?.pipe(process.stdout)
	child_process.stderr?.pipe(process.stderr)
}
export {
	stdout_stderr__pipe as pipe_stdout_and_stderr,
	stdout_stderr__pipe as pipe__stdout_and_stderr,
}

import type { ChildProcess } from 'child_process'
export function pipe_stdout_and_stderr(child_process:ChildProcess) {
	child_process.stdout?.pipe(process.stdout)
	child_process.stderr?.pipe(process.stderr)
}
export {
	pipe_stdout_and_stderr as pipe__stdout_and_stderr
}

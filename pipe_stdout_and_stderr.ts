import type { ChildProcess } from 'child_process'
export function pipe_stdout_and_stderr(child_process:ChildProcess) {
	child_process.stdout?.pipe(process.stdout)
	child_process.stderr?.pipe(process.stderr)
}
export const pipe__stdout_and_stderr = pipe_stdout_and_stderr

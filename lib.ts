import { spawn } from 'child_process'
export function pipe__stdout_and_stderr(cmd) {
	cmd.stdout.pipe(process.stdout)
	cmd.stderr.pipe(process.stderr)
}
export function spawn__pipe(cmd_name, argv, pipe = pipe__stdout_and_stderr) {
	const cmd = spawn(cmd_name, argv)
	pipe(cmd)
	return new Promise((resolve, reject)=>{
		cmd.on('close', code=>{
			if (code) {
				reject(code)
			} else {
				resolve(code)
			}
		})
	})
}
export const _cmd__spawn = spawn__pipe

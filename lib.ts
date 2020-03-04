import { spawn } from 'child_process'
export function pipe__stdout_and_stderr(cmd) {
	cmd.stdout.pipe(process.stdout)
	cmd.stderr.pipe(process.stderr)
}
export function _spawn__pipe(pipe = pipe__stdout_and_stderr) {
	return function (cmd_name, argv) {
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
}
export const spawn__pipe = _spawn__pipe()
export const _cmd__spawn = spawn__pipe

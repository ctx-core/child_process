import { spawn, SpawnOptions } from 'child_process'
import { resolve } from 'path'
/**
 * @param command{string
 * @param args{ReadonlyArray<string>}
 * @param argv__options{import('child_process').SpawnOptions}
 * @return {Promise<import('child_process').ChildProcessWithoutNullStreams>}
 */
export async function exec(
	command,
	args,
	argv__options = {}
) {
	const options = Object.assign({
		cwd: resolve('.'),
		env: process.env,
		shell: true
	}, argv__options)
	return new Promise(ret=>{
		const proc = spawn(command, args, options).on(
			'exit', code=>{
				if (code) process.exit(code)
				ret(code)
			})
		proc.stdout.pipe(process.stdout)
		proc.stderr.pipe(process.stderr)
		ret(proc)
	})
}

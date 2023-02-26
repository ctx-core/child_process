import { clone } from '@ctx-core/object'
import { spawn } from 'child_process'
import { resolve } from 'path'
import { import_meta_env_ } from '@ctx-core/env'
/**
 * @param command{string}
 * @param args{ReadonlyArray<string>}
 * @param argv__options{import('child_process').SpawnOptions}
 * @return {Promise<import('child_process').ChildProcessWithoutNullStreams>}
 */
export async function spawn_pipe_process(
	command,
	args,
	argv__options = {}
) {
	const options = Object.assign({
		cwd: resolve('.'),
		env: import_meta_env_(),
		shell: true
	}, argv__options)
	return new Promise(ret=>{
		const proc = spawn(command, args, clone(options, { stdio: 'inherit' })).on(
			'exit', code=>{
				if (code) process.exit(code)
				ret(proc)
			})
	})
}
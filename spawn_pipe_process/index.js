import { import_meta_env_ } from '@ctx-core/env'
import { clone } from '@ctx-core/object'
import { spawn } from 'child_process'
import { resolve } from 'path'
/** @typedef {import('child_process').ChildProcessWithoutNullStreams}ChildProcessWithoutNullStreams */
/** @typedef {import('child_process').SpawnOptions}SpawnOptions */
/**
 * @param {string}command
 * @param {ReadonlyArray<string>}arg_a
 * @param {SpawnOptions}[argv__options]
 * @return {Promise<ChildProcessWithoutNullStreams>}
 */
export async function spawn_pipe_process(
	command,
	arg_a,
	argv__options = {}
) {
	const options = Object.assign({
		cwd: resolve('.'),
		env: import_meta_env_(),
		shell: true
	}, argv__options)
	return new Promise(ret=>{
		const proc =
			spawn(command, arg_a, clone(options, { stdio: 'inherit' }))
				.on('exit', code=>{
					if (code) process.exit(code)
					ret(proc)
				})
	})
}

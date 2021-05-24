import { pipe_stdout_and_stderr } from './pipe_stdout_and_stderr';
export function _pipe_child_process(pipe = pipe_stdout_and_stderr) {
    return function pipe_child_process(child_process, override_pipe = pipe) {
        override_pipe(child_process);
        return new Promise((resolve, reject) => {
            child_process.on('close', (code) => {
                if (code) {
                    reject(code);
                }
                else {
                    resolve(code);
                }
            });
        });
    };
}
export { _pipe_child_process as _pipe__child_process };

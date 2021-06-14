import { WritableStream } from 'memory-streams';
import { pipe_child_process } from './pipe_child_process';
export async function capture_child_process(child_process, opts = {}) {
    const stdout = opts.stdout || new WritableStream();
    const stderr = opts.stderr || new WritableStream();
    try {
        await pipe_child_process(child_process, child_process => {
            var _a, _b;
            (_a = child_process.stdout) === null || _a === void 0 ? void 0 : _a.pipe(stdout);
            (_b = child_process.stderr) === null || _b === void 0 ? void 0 : _b.pipe(stderr);
        });
    }
    catch (_a) {
        throw stderr.toString().trim();
    }
    return stdout.toString().trim();
}
export { capture_child_process as capture, capture_child_process as capture__child_process, };
//# sourceMappingURL=src/capture_child_process.js.map
import { exec as _exec } from 'node:child_process'
import { promisify } from 'util'
/** @typedef {import('node:child_process')} */
/** @type {typeof child_process.exec.__promisify__} */
export const exec = promisify(_exec)

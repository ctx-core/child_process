import { exec as _exec } from 'child_process'
import { promisify } from 'util'
/** @typedef {import('child_process')}child_process */
/** @type {typeof child_process.exec.__promisify__} */
export const exec = promisify(_exec)

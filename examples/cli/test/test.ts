import test from 'ava'
import fs from 'fs'
import { resolve as r } from 'path'
import execa from 'execa'

const distDir = r(__dirname, '..', 'dist')
const cli = r(distDir, 'cli.js')

test.before(async () => {
  // Compile TypeScript if `dist` directory is not found
  if (!fs.existsSync(distDir)) await execa('npx', ['tsc'])
})

test('main', async t => {
  const { stdout } = await execa(cli)
  t.is(stdout, 'unicorns & rainbows')
})

import test from 'ava'
import execa from 'execa'

test.before(async t => {
  await execa('npx', ['tsc'])
})

test('main', async t => {
  const { stdout } = await execa('dist/cli.js')
  t.is(stdout, 'unicorns & rainbows')
})

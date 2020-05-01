import test from 'ava'
<% if (!cli) { %>import <%= camelModuleName %> from '../'

test('title', t => {
	t.is(<%= camelModuleName %>('unicorns'), 'unicorns & rainbows')
})<% } if (cli) { %>import execa from 'execa'

test.before(async t => {
  await execa('npx', ['tsc'])
})

test('main', async t => {
  const { stdout } = await execa('dist/cli.js')
  t.is(stdout, 'unicorns & rainbows')
})<% } %>

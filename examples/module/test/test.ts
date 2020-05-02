import test from 'ava'
import myCoolPackage from '../'

test('main', t => {
  t.is(myCoolPackage('unicorns'), 'unicorns & rainbows')
})

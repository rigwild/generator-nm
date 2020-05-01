import test from 'ava'
import myCoolPackage from '../'

test('title', t => {
	t.is(myCoolPackage('unicorns'), 'unicorns & rainbows')
})

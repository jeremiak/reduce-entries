const test = require('tape')
const fn = require('./index')

test('function returns a function', t => {
  t.plan(1)
  t.equal(typeof fn, 'function')
})

test('converts array to object', t => {
  t.plan(2)
  const a = [{ key: 'foo', value: 'bar' }, { key: 'yo', value: 'dude' }]
  const actual = a.reduce(fn(), {})
  t.equal(actual.foo, 'bar')
  t.equal(actual.yo, 'dude')
})

test('converts array to object using value key', t => {
  t.plan(2)
  const a = [{ key: 'foo', baz: 'bar' }, { key: 'yo', baz: 'dude' }]
  const actual = a.reduce(fn('baz'), {})
  t.equal(actual.foo, 'bar')
  t.equal(actual.yo, 'dude')
})

test('converts array to object if initial object is missing', t => {
  t.plan(2)
  const a = [{ key: 'foo', value: 'bar' }, { key: 'yo', value: 'dude' }]
  const actual = a.reduce(fn())
  t.equal(actual.foo, 'bar')
  t.equal(actual.yo, 'dude')
})

# reduce-entries
[![CircleCI](https://circleci.com/gh/jeremiak/reduce-entries.svg?style=svg)](https://circleci.com/gh/jeremiak/reduce-entries)

Basically, the opposite of [d3's `.entries()`](https://github.com/d3/d3-collection#entries), takes an array of objects with `key` and `value` keys and reduces it into a single object.

```
import reduceEntries from 'reduce-entries'

const entries = [
  { key: 'foo', value: 'bar' },
  { key: 'dude', value: 'yo' }
]

const single = entries.reduce(reduceEntries())
console.log(single) // { foo: 'bar', dude: 'yo' }
```

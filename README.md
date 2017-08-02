# reduce-entities
[![CircleCI](https://circleci.com/gh/jeremiak/reduce-entities.svg?style=svg)](https://circleci.com/gh/jeremiak/reduce-entities)

Basically, the opposite of [d3's `.entities()`](), takes an array of objects with `key` and `value` keys and reduces it into a single object.

```
import reduceEntities from 'reduce-entities'

const entities = [
  { key: 'foo', value: 'bar' },
  { key: 'dude', value: 'yo' }
]

const single = entities.reduce(reduceEntities())
console.log(single) // { foo: 'bar', dude: 'yo' }
```

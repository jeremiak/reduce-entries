const reduceEntities = (valueKey = 'value') => (accum, next, i, total) => {
  const initialMissing = i === 1 && accum === total[0]
  return Object.assign(
    {},
    initialMissing ? { [accum.key]: accum[valueKey] } : accum,
    {
      [next.key]: next[valueKey]
    }
  )
}

module.exports = reduceEntities

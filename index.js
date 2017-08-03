const reduceEntries = (valueKey = 'value') => (accum, next, i, total) => {
  const initialMissing = i === 1 && accum === total[0]

  const old = initialMissing ? { [accum.key]: accum[valueKey] } : accum

  return Object.assign({}, old, { [next.key]: next[valueKey] })
}

module.exports = reduceEntries

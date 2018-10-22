export function capitalize(word) {
  return word.replace(/^([a-z])([a-z]+)/, (match, p1, p2) => {
    return `${p1.toUpperCase()}${p2}`
  })
}

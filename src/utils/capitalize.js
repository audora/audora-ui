export default (s) => {
  const str = s.toLowerCase()
  return str.toLowerCase()[0].toUpperCase() + str.slice(1)
}
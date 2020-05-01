export default (input: string, { postfix = 'rainbows' } = {}) => {
  return `${input} & ${postfix}`
}

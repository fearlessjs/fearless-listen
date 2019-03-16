module.exports = (port = 3000, handler = () => {}) => options => {
  const listen = {
    port,
    handler
  }

  return Array.isArray(options)
    ? {
      handlers: options,
      listen
    }
    : {
      ...options,
      listen
    }
}

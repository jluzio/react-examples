export default import(
  /* webpackChunkName: "faker-service" */ './faker-service'
).then(({ default: service }) => service)

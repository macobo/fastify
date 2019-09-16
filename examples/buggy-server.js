'use strict'

const fastify = require('../fastify')({
  ignoreTrailingSlash: true
})

fastify.register(function (fastify, opts, next) {
  fastify.get('/', async(request, reply) => {
    reply.send('101010101')
  })

  next()
}, { prefix: '/some_route/' })

fastify.listen(4000, function (err) {
  if (err) {
    throw err
  }
  console.log(`server listening on ${fastify.server.address().port}`)
})

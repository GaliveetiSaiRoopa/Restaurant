const corsConfig = {
  enabled: true,
  origin: true,

  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],

  headers: true,

  exposeHeaders: [],

  credentials: true,

  maxAge: 90,
}

export default corsConfig

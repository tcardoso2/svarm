profiles = {
  default: {
    ExpressEnvironment: {
      port: 8080
    },
    RequestDetector: {
      name: 'endpoint1',
      route: '/worker',
      handler: (req, res) => { res.json(true); }
    },
    StompNotifier: {
      conn: {
      	host: '127.0.0.1', 
      	port: 61613, 
      	user: 'admin', 
      	pass: 'admin'
      },
      queue: '/queue/queue3'
    }
  }
}

exports.profiles = profiles
exports.default = profiles.default

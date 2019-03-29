profiles = {
  default: {
    Environment: {},
    StompDetector: {
      conn: {
      	host: '127.0.0.1', 
      	port: 61613, 
      	user: 'admin', 
      	pass: 'admin'
      },
      queue: '/queue/queue1'
    },
    StompNotifier: {
      conn: {
      	host: '127.0.0.1', 
      	port: 61613, 
      	user: 'admin', 
      	pass: 'admin'
      },
      queue: '/queue/queue1'
    },
    //IMPORTANT! This filter must exist to block all signals to propagate from the Detector to the Notifiers, otherwise there will be an infinite loop!
    BlockAllFilter: [{}]
  }
}

exports.profiles = profiles
exports.default = profiles.default

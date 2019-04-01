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
      queue: '/queue/queue3'
    },
    RequestReplyWorker: {
      queue: '/queue/queue3',
      replyto: '/queue/queue3-reply',
      worker: 'worker1.js'
    }
  }
}

exports.profiles = profiles
exports.default = profiles.default

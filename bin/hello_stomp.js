'use strict'

//A hello world stomp test

var Stomp = require('stomp-client')

let client = new Stomp('127.0.0.1', 61613, 'admin', 'admin')

client.connect(function(sessionId){
  console.log(`STOMP client connected, session Id is ${sessionId}. Press CTRL-C to exit any time`)
  //Consumer
  client.subscribe('/queue/queue1', function(body, headers){
    console.log(`Consumer received message!: ${body}, headers:`)
    console.log(headers)
  })
  //Producer
  client.publish('/queue/queue1', "Hello World!")
  console.log("Producer sent message!")
})

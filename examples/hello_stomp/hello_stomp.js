//###############################################
//# call this file via: node hello_stomp        #
//###############################################


"use strict"

console.log('Vermon Hello Stomp example, requires ActiveMQ to be up and running')
setTimeout(() => console.log('End: Press CTRL-C to end this example.'), 1000)

let vermon = require('vermon')

vermon.setLogLevel('info')
vermon.configure('examples/hello_stomp/config.js')
vermon.watch().then((environment) => {
  environment.notifiers[0].notify('Hello Stomp!')
})

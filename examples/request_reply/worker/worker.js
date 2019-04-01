"use strict"

let vermon = require('vermon')

vermon.setLogLevel('info')
vermon.configure('worker/config.js')
vermon.watch().then((environment) => {
})

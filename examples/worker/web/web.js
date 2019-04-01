"use strict"

let vermon = require('vermon')
let web = require('vermon-web')

vermon.setLogLevel('info')
vermon.use(web)
vermon.configure('web/config.js')
vermon.watch().then((environment) => {
})

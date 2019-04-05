/*****************************************************
 * Svarmctl command tests
 *****************************************************/

let chai = require('chai')
let chaiAsPromised = require('chai-as-promised')
let should = chai.should()
let fs = require('fs')
let core = require('vermon-core-entities')
let ent = core.entities
let ext = core.extensions
let shell = require('shelljs')

// Chai will use promises for async events
chai.use(chaiAsPromised)

before(function (done) {
  done()
})

after(function (done) {
  done()
})

describe('svarmctl --configure', function () {
  it('-c option should point to folder which turns its subfolders into processes', function (done) {
    shell.exec('./svarmctl.js -c examples').code.should.equal(0)
    let child = shell.exec('./svarmctl.js -l', {async:true})
    let _done = false
    child.stdout.on('data', function(data) {
      console.log(`>>>> stdout > ${data}`)
      /* ... do something with data ... */
      if (!_done) {
        _done = true
        done()
      }
    });
  })
  xit('if -c not passed then init looks at a config file in the same dir', function () {
    if (shell.exec('./svarmctl.js init').code !== 0) {
      shell.echo('Error: Git commit failed');
      shell.exit(1);
    }
  })
  xit('should list all the subfolders as not-started processes', function () {
    // Prepare
  })
})

describe('svarmctl start', function () {
  xit('should contain the subfolder name which contains the main file', function () {
    // Prepare
  })
})
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

describe('stop any forever process first', function () {
  it('stop', function () {
    this.timeout(4000)
    shell.exec('./bin/forever stopall').code.should.equal(0)
  })
})

describe('svarmctl --configure', function () {
  it('-c option should point to folder which turns its subfolders into processes', function (done) {
    this.timeout(4000)
    shell.exec('./svarmctl.js -c examples/request_reply').code.should.equal(0)
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

describe('svarmctl --start', function () {
  it('should contain the subfolder name which contains the main file', function (done) {
    this.timeout(10000)
    let child = shell.exec('./svarmctl.js -s -', {async:true})
    let _done1 = 0
    child.stdout.on('data', function(data) {
      if (data.indexOf('/web/') > 0) _done1++
      if (data.indexOf('/worker/') > 0) _done1++
      if (_done1 == 2) {
        done()
      }
    });
    // Prepare
  })
})
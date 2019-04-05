#!/usr/bin/env node

/******************************
 * Uses forever under the hood
 *****************************/
"use strict"

let program = require('commander')
let colors = require('colors')
let assert = require('assert')
let shell = require('shelljs')
let _package = require('./package.json')
const { lstatSync, readdirSync, writeFileSync } = require('fs')
const { join } = require('path')
const homedir = require('os').homedir();

//Constants
const SVARM_FILE_LOCATION =  `${homedir}/.svarmprocs.json`

let lastStartedProc;
//Functions
const isProc = source => source.endsWith(lastStartedProc)
const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory)
const getProcs = () => {
  let procs
  try { procs = require(SVARM_FILE_LOCATION) } catch {}
  if(!procs) procs = { main: [] }
  return procs
}
const setProcs = (newProcs, createNew = true) => {
  let output = getProcs()
  output.main = createNew ? output.main = newProcs : output.main.concat(newProcs)
  writeFileSync(SVARM_FILE_LOCATION, JSON.stringify(output), { flag: 'w+' });
}

//Main Program
program
  .version(_package.version, '-v, --version')
  .option('-c, --config <dir>', 'Some directory location with sub-folders of processes', config)
  .option('-s, --start <proc>', 'Some process to start, - for all', start)
  .option('-l, --list', 'List existing processes', list)
  .parse(process.argv);

//CLI functions
function config(dir){
  try{
    assert(isDirectory(dir))
  } catch(e) {
  	console.log(e.message)
  	process.exit(1)
  }
  setProcs(getDirectories(dir))
  console.log(getProcs())
}

function list(){
  getProcs().main.map(name => console.log(name))
}

function start(proc){
  lastStartedProc = proc
  let procs = proc == '-' ? getProcs().main : getProcs().main.filter(isProc)
  procs.map(name => shell.exec(`./bin/forever start ${name}/main.js`))
}


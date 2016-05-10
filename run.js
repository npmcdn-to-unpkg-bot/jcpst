'use strict'

const path = require('path')
const os = require('os')
const tasks = require('run-task')
const sh = require('shelljs')
const harp = require('harp')

const buildDir = path.join(__dirname, 'build')
const srcDir = path.join(__dirname, 'src')
const tempDir = path.join(os.tmpdir(), '__temp_static_content')
const port = 9000

function clean () {
  sh.rm('-r', buildDir)
}

function build () {
  clean()
  harp.compile(srcDir, buildDir, () => {
    console.log(`compiled in ${buildDir}`)
  })
}

function deploy () {
  clean()
  harp.compile(srcDir, tempDir, () => {
    console.log(`compiled in ${tempDir}`)
  })
}

function start () {
  harp.server(srcDir, { port }, () => {
    console.log(`listening at http://${os.hostname()}:${port}`)
  })
}

tasks({
  clean,
  build,
  deploy,
  start
})


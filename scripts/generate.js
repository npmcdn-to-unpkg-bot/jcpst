'use strict'

const path = require('path')
const EOL = require('os').EOL
require('shelljs/global')


const genDir = path.normalize(`${__dirname}/../src/_generated`)
const fanPage = path.join(__dirname, 'parse_fanpage')
const results = path.join(genDir, 'bandcamp-results.html')
const fanPageMd = path.join(genDir, 'parse_fanpage.md')

if (test('-d', genDir)) {
  echo('already generated, run `npm run clean` first')
  exit(0)
}

const codeBlock = '```bash' + EOL + cat(fanPage) + '```'

echo('generating html and md...')
mkdir(genDir)
exec(`bash ${fanPage}`, { silent: true }).output.to(results)
codeBlock.to(fanPageMd)

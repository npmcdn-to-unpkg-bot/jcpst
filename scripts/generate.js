'use strict'

require('shelljs/global')

let genDir = `${__dirname}/../src/_generated`
let fanPage = `${__dirname}/parse_fanpage`
let results = `${genDir}/bandcamp-results.html`
let fanPageMd = `${genDir}/parse_fanpage.md`

if (test('-d', genDir)) {
  echo('already generated, run `npm run clean` first')
  exit(0)
}

let codeBlock = `\`\`\`bash\n${cat(fanPage)}\`\`\``

echo('generating html and md...')
mkdir(genDir)
exec(`bash ${fanPage}`, { silent: true }).output.to(results)
codeBlock.to(fanPageMd)

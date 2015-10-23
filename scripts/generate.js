'use strict'

require('shelljs/global')

let scriptsDir = __dirname
let genDir = [__dirname, '/../src/_generated'].join('')
let fanPage = [scriptsDir, '/parse_fanpage'].join('')
let results = [genDir, '/bandcamp-results.html'].join('')
let fanPageMd = [genDir, '/parse_fanpage.md'].join('')

if (test('-d', genDir)) {
  echo('code already generated, run `npm run clean` first')
  exit(0)
}

echo('generating pages')
mkdir(genDir)

;(exec('bash ' + fanPage, {silent: true}).output).to(results)
;('```bash\n' + cat(fanPage) + '```').to(fanPageMd)


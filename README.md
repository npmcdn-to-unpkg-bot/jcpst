# jcpst.com

This is a static blog written with [markdown][1], [jade][2], [stylus][3] and [yaml][4]. It's generated using [metalsmith][1].


Use:

    git clone https://gitlab.com/jcpst/jcpst.git
    cd jcpst
    npm install
    npm start

To view a list of commands, use `npm run`:

    Lifecycle scripts included in jcpst:
      start
        parallelshell 'npm run server -s' 'npm run watch -s'
    
    available via `npm run-script`:
      build
        metalsmith
      clean
        rimraf public/
      deploy
        npm run deploy:build -s && npm run deploy:run -s
      deploy:build
        docker build --tag jcpst .
      deploy:run
        docker run -p 3000:3000 -d jcpst
      server
        http-server
      watch
        watch metalsmith src/ layouts/ -d



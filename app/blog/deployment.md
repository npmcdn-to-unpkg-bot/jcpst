I like automating things, and I like deploying applications. Fortunately, I get
to do a lot of this.

For this website, I don't need all the build complexity of an enterprise-scale
microservices architecture, so I just use a few simple scripts.

At first I dockerized this site, but I was having issues running Docker on my
VPS (which only has 256MB RAM). So I simplified.

```shell
#!/bin/sh

npm run clean
npm run build
scp -r build user@xxx.xxx.xx.xxx:~/jcpst/
```

Yep, just `scp` (**s**ecure **c**o**p**y). `npm run clean` deletes my `build/`
directory, then `npm run build`... builds. Then I copy the fresh build onto my
remote server. I already have [http-server][] running using [forever][]. I don't
need to stop it and the site updates with almost zero downtime.

[http-server]: https://www.npmjs.com/package/http-server
[forever]: https://www.npmjs.com/package/forever


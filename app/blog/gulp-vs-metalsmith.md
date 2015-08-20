## Gulp vs Metalsmith

##### 2015-08-16

In my last blog post, I said that if I wanted to use a streaming build tool with 
functionality via plugins, I would rather use [Gulp][] over [Metalsmith][]. I
had a request from [Ev][] to write a post comparing the two, and it sounded like
an opportunity for a fun experiment.

[Gulp]: http://gulpjs.com/
[Metalsmith]: http://www.metalsmith.io/
[Ev]: http://evbogue.com/

First, I want to go over how these two are different. Gulp is a build automation
tool that runs tasks, in the same feature space as tools like [Grunt][],
[Jake][], and older Unix tools like Make. Metalsmith is static site generator, a
specialized type of build automation tool. More similar to [Brunch][] and a 
[ton of others](https://staticsitegenerators.net/). 

[Grunt]: http://gruntjs.com/
[Jake]: http://jakejs.com/
[Brunch]: http://brunch.io/
[Wintersmith]: http://wintersmith.io/

Both can be used to build static sites. If you want to get really crazy, check
out [Gulpsmith][].

[Gulpsmith]: https://www.npmjs.com/package/gulpsmith


### Metalsmith

Metalsmith is pretty great at what it does. Add some files to a folder, install some 
plugins, and Metalsmith will transform and copy the files over for you. There are 
two ways to use Metalsmith. One way is programmatically (like Ev's [Metalwork][] 
setup), another is with a configuration file called `metalsmith.json`. I prefer the 
configuration file because if I'm doing something like a static site, I want to 
write as little code as possible.

[Metalwork]: http://evbogue.com/metalwork/

Metalsmith doesn't do incremental builds. It will rebuild everything, every time.  It's 
very flexible though. I've embedded Metalsmith inside of a [Loopback][] app 
before with no issues, and even shared metadata with the rest of the app.

[Loopback]: http://loopback.io/


### Gulp

Gulp is a bit of a different beast. Where Metalsmith specializes in processing
a directory of files, Gulp is a full blown build tool. You can automate
templating, copying, transpiling, gzipping, serving, watching, hot-reloads, deployment...
you name it. While it's possible to do such in Metalsmith, it's not as
generalized of a tool as Gulp.

There is some common ground though. Both are based on streams, and have a
ecosystem of plugins built around them. Gulp has a bit stronger community.

So, you have tasks. A task has a name, optional dependent tasks, and a function. 
A common sort of task is like what follows...

```javascript
gulp.task('default', ['clean', 'css', 'html'], function () {
    gulp.src(src)
        .pipe(gulp.dest(build));
});
```

Any task in your `gulpfile.js` can be called on the command line with `gulp <task name>`. 
In the case of the 'default' task, you only need to type `gulp`.
The array contains the tasks that need to be completed before this task runs.
Dependent tasks run asynchronously. 

### npm?

Who said anything about npm? I'm going to mention it because it's my favorite node
tool. 

You can run Gulp with npm. Or Metalsmith. Or any node module. Or any shell
command. It's just shell scripts. When you install an npm module, it
creates a symlink from the module's `bin` directory to `./node_modules/.bin`. So 
you can use locally installed modules in scripts the same way you would use them 
on the command line if they were installed globally.

Here's an example of the `scripts` object from this site's `package.json`

```javascript
"scripts": {
  "build": "harp compile app build",
  "clean": "rimraf build",
  "docker": "npm run docker:build -s && npm run docker:run -s",
  "start": "harp server app",
  "static": "http-server build",
  "docker:build": "docker build -q -t jcpst .",
  "docker:run": "docker run -d --name='jcpst' -p 8080:8080 jcpst",
  "prebuild": "npm run clean -s",
  "predocker:build": "npm run clean -s && npm run build -s",
  "predocker:run": "docker rm -f jcpst >/dev/null 2>&1 || true",
  "prestatic": "npm run build -s"
}
```


### So?

On my own projects, I do most of my automation in npm, then script files if it's
really necessary. When would I use Gulp? When I want to automate a bunch of my
workflow on a larger project with a team of collaborators, especially if any of 
them are running Windows. What about Metalsmith? It's pretty cool, and you can 
get a static site running in _almost_ no time. This site was Metalsmith for a
little bit before I decided to use [Harp][].

[Harp]: http://harpjs.com/

Who wins? npm of course.

**%%%**

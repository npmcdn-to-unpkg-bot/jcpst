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
specialized type of build automation tool. Similar to [Brunch][], [Wintersmith][], 
and a [ton of others](https://staticsitegenerators.net/). 

[Grunt]: http://gruntjs.com/
[Jake]: http://jakejs.com/
[Brunch]: http://brunch.io/
[Wintersmith]: http://wintersmith.io/

Both can be used to build static sites. If you want to get really crazy, look up 
[Gulpsmith][].

[Gulpsmith]: https://www.npmjs.com/package/gulpsmith


### Metalsmith

Metalsmith is pretty great at what it does. Add some files to a folder, install some 
plugins, and Metalsmith will transform and copy the files over for you. There are 
two ways to use Metalsmith. One way is programmatically (like Ev's [Metalwork][] 
setup), another is with a configuration file called `metalsmith.json`. I prefer the 
configuration file because if I'm doing something like a static site, I want to 
write as little code as possible.

[Metalwork]: http://evbogue.com/metalwork/

Metalsmith is kind of slow. This gets worse with more plugins and files. And it
doesn't do incremental builds. It's very flexible though. I've embedded
Metalsmith inside of a [Loopback][] app before with no issues, and even shared
metadata with the rest of the app.

[Loopback]: http://loopback.io/


### Gulp

Gulp is an entirely different beast. Where Metalsmith specializes in processing
a directory of files, Gulp is a full blown build tool. You can automate
templating, copying, transpiling, gzipping, serving, watching, hot-reloads, deployment...
you name it. 

Compared to Metalsmith, you're going to spend more time with setup,
especially the first time you do it. 

### npm

You can run Gulp with npm. Or Metalsmith. Or any npm module. Or any shell
command. They're just shell scripts. When you install an npm module, it
creates a symlink from the module's `bin` directory to `./node_modules/.bin`. So 
you can use locally installed modules the same way you would use them on the
command line if they were installed globally.


I want to go over my decision making process for using a framework. If I
don't have to write code, that awesome. That's what I like so much about
[Harp][]. All I write is templating, styling, and content, and the framework does
everything I want it to do. 

---


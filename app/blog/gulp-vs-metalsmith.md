## Gulp vs Metalsmith

[TOC]

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

Second, I am actually going to be comparing three tools. Gulp, Metalsmith, and
[npm][]. Why? Because npm is awesome, and it's my favorite build tool. It comes
with node and is simple yet very powerful.

[npm]: https://www.npmjs.com/

I'm going to do this tutorial style. Before we begin, let's set some requirements.

* static site generator
* jade for templating
* stylus for CSS preprocessing
* prose written in Markdown
* Use metadata to avoid repeating common information
* integrated http server
* 'watch' mode

We'll cover how to do all this, but I also have the code in a repo. It has
multiple branches that use the same source, but different build tools. To get
it and compare:

```git
git clone
cd gulp-vs-metalsmith
git checkout [ metalsmith | gulp | npm ]
```

### Metalsmith

Let's start with Metalsmith, because I think it will be the quickest to set up.
You should have Node installed already. Let's run some commands.

```bash
mkdir my-static-site
cd my-static-site
npm init
npm i -S metalsmith metalsmith-collections metalsmith-markdown metalsmith-permalinks metalsmith-stylus metalsmith-layouts
```

That will get us most of the dependencies we need. There are two ways to use
Metalsmith. One way is programmatically (like Ev's [Metalwork][] setup), another 
is with a configuration file called `metalsmith.json`. I prefer the configuration 
file, but I'll cover both.

[Metalwork]: http://evbogue.com/metalwork/

We're going to create a structure in you project directory like so:

```
.
├── layouts
│   └── layout.jade
├── src
│   ├── blog
│   │   ├── hello-again.md
│   │   └── hello.md
│   ├── styles
│   │   └── style.styl
│   └── index.md
└── package.json
```

Create a file called `metalsmith.json` in the project root:

```javascript
{
  "destination": "public",
  "plugins": {
    "metalsmith-stylus": {},
    "metalsmith-markdown": {},
    "metalsmith-collections": {},
    "metalsmith-permalinks": ":collections:title",
    "metalsmith-layouts": "jade"
  }
}
```

The Metalsmith ecosystem is all about conventions. By default, it will copy
files from the `src` to a `build` directory. We're going to override the
destination directory in `metalsmith.json` to be `public`. This is a convention
with a number of http servers and build tools, and a personal preference.

Let's install Metalsmith globally so we have it available on the command line:

```bash
npm i -g metalsmith
```

Now we can run the `metalsmith` command to generate a static site based on our 
configuration file.

We'll also be adding metadata to the first lines of our Markdown files with YAML 
front-matter. Define a title, template and date:

```yaml
---
title: Hello
template: layout.jade
date: 2015-08-16
---
```

### Gulp



### npm

You can run Gulp with npm. Or Metalsmith. Or any npm module. Or any shell
command. They're just shell scripts. When you install an npm module, it
creates a symlink from the module's `bin` directory to `./node_modules/.bin`. So 
you can use locally installed modules the same way you would use them on the
command line if they were installed globally.



---


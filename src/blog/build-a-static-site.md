This article is meant to help folks get from zero to running with a website.
Some parts may be a bit simplistic for those already familiar with the basics 
of web publishing. However, if you're using techniques you learned 10 or even 5
years ago, you will find some interesting information.

### Required software

* Node.js
* Text Editor (NOT a word processor)
* Web Browser

### Overview of tools

* [Node.js][1] is a platform for running JavaScript outside of the browser.
* [npm][2] is a tool that comes with Node that is used to install other modules.
* [Harp.js][3] is a platform for creating static websites.

### Non-specific tools you will need

* 'Modern' Text Editors (featureful and easy to use)
    * [Sublime Text][4] (Linux, OSX, Windows)
    * [Atom][5] (Linux, OSX Windows)
    * [Visual Studio Code][6] (Linux, OSX, Windows)
    * [Notepad++][7] (Windows)
    * [Textmate][8] (OSX)

* 'Classic' Text Editors (very powerful, steep learning curve)
    * [Vim][9] (Linux, OSX, Windows)
    * [Emacs][10] (Linux, OSX, Windows)

* Use a Modern browser, like Chrome or Firefox. You'll want to learn how to use
  the dev tools. Chrome has better dev tools, but you'll be ok with either.
    * [Chrome Dev Tools][11]
    * [Firefox Dev Tools][12]

### Getting Started

Install Node.js with [nvm][13] (or [nvmw][14] for windows). Why not use the download
from [nodejs.org][1]? Because the node platform is evolving
fast, and not everything works with the latest version of node. As of this
writing, v4.0.0 is the latest, but for Harp, we'll want to use v0.12.7 for now.
Use `nvmw` in you commands instead of `nvm` if you are on Windows.

If you've never used the command line before, be not afraid. On Windows, type
`WIN+R`, then `CMD` and enter. On OSX, open the Terminal application. If you're
on Linux, go home, you're drunk.

```Shell
nvm install v0.12.7
nvm alias default v0.12.7
```

Then, install Harp.

```shell
npm install --global harp
```

Or use the shorthand.

```shell
npm i -g harp
```

Let's make a folder to store all your websites.

```shell
mkdir Dev
cd Dev
```

Then a folder inside that for your first harp app.

```shell
mkdir hello
cd hello
```
Create a basic harp app, then start the server.

```shell
harp init
harp server
```

Point your web browser to <http://localhost:9000>. You should see the app!

### Getting Fancy

Writing plain HTML, CSS, and JavaScript is an option, but not a very good one.
If you want the pages on your site to share a similar layout, you'll be copying
and pasting, then a line will get messed up somewhere, and it will be
frustrating. Want to change the Footer? Have fun while you change it on every
page.

Here's the thing though. Web browsers only understand HTML, CSS and JavaScript
(for now). This is where Harp steps in. It will convert from several different
languages to HTML/CSS/JavaScript automatically.

**HTML**

Harp understands [Jade][15], [EJS][16], and [Markdown][17], and will convert them all 
into HTML. Jade and EJS are used for templating, while Markdown is more for
writing articles, blogs, etc. Here's what a basic HTML page looks like in Jade.

```jade
doctype html
html
  head
    title My Web Page
  body
    h1 Hello World!
```

Becomes this:

```markup
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

It has a ton of powerful features that Jade site covers in detail. You can even
edit the text in some of the examples on thier website to get a better
understanding of how it works. Some folks are off-put by Jade because of it's 
whitespace sensitive and looks different from HTML. For those people, there's 
EJS. It looks just like HTML, but let's you **E**mbed **J**ava**S**cript to
create templates.

If you're writing something that's a paragraph or more, you might want to be
using Markdown. This page you're reading right now is written in Markdown.
Another small example:

```markdown
# Hello World

Welcome to my website. Here are my top three favorite things:

1. Apples
2. Bananas
3. Analog Synthesizers
```

Becomes:

```markup
<h1 id="hello-world">Hello World</h1>
<p>Welcome to my website. Here are my top three favorite things:</p>
<ol>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Analog Synthesizers</li>
</ol>
```

It's simple and elegant.

**CSS**

Harp is able to convert [Stylus][18], [Less][19], and [SASS][20] to CSS. All
three of these will let you use cool things like variables, mixins, functions,
etc. As you can see from this site, I like to use as little css as possible, In
fact here's all of it:

```css
a, a:active, a:hover, a:visited {
  color: #000;
}

body {
  background: #fffacd;
  max-width: 700px;
}

img {
  width: 100%;
}

.light {
  font-weight: 300;
}
```

But written in Stylus, it looks like this:

```stylus
a, a:active, a:hover, a:visited
  color black

body
  background lemonchiffon
  max-width 700px

img
  width 100%

.light
  font-weight:300
```

Not much different, but nice. It really shows it's power when you do stuff like
generate styling for a grid:

```stylus
for n in 1..12
  .c{n} 
    width (1/12*n*100)%
```

Becomes:

```css
.c1 {
  width: 8.333333333333332%;
}
.c2 {
  width: 16.666666666666664%;
}
.c3 {
  width: 25%;
}
.c4 {
  width: 33.33333333333333%;
}
.c5 {
  width: 41.666666666666664%;
}
.c6 {
  width: 50%;
}
.c7 {
  width: 58.33333333333333%;
}
.c8 {
  width: 66.66666666666666%;
}
.c9 {
  width: 75%;
}
.c10 {
  width: 83.33333333333333%;
}
.c11 {
  width: 91.66666666666666%;
}
.c12 {
  width: 100%;
}
```

**JavaScript**

JavaScript, the one true programming language for the web. With it, your site
can do amazing things. I don't think this is the time or place to dive into it,
but I'll mention that Harp will convert [CoffeeScript][21] for you. It would be
fair to generalize and say it's like the previous examples in the sense that you
type less and you get some extra tricks.

### Harp

Here's where the magic happens. Harp takes care of automatically converting all
those languages for you. So you can have a structure like:

```shell
app
├── assets
│   └── styles
│       └── style.styl
├── blog
│   ├── using-harp.md
│   └── website-for-beginners.md
├── _layout.jade
├── 404.md
├── about.md
├── contact.md
├── index.jade
└── resume.pdf
```

That becomes:

```shell
app
├── assets
│   └── styles
│       └── style.css
├── blog
│   ├── using-harp.html
│   └── website-for-beginners.html
├── 404.html
├── about.html
├── contact.html
├── index.html
└── resume.pdf
```

I suggest looking at the documentation for Harp, [here][3]. It will tell you
everything you need to know.

### More Tools

So you've got all these tools going, now what? More tools!

* [StackOverflow][22]: Largest Collection of Programming Q & A on the 'Net
* [DevDocs][23]: Searchable documentation web app
* [StackEdit][24]: Really fancy Markdown editor
* [Jade][15]: Test out your Jade
* [Stylus][18]: Test out your Stylus

### Building your site

Here's how I usually work.

1. Open the terminal and navigate to the root of the site.
2. Type `harp server`
3. Make a change to a file in a text editor.
4. Refresh the page at <http://localhost:9000> to see the changes.
5. Repeat.

If you go with a template, you can change any `.html` file to end with `.ejs` to
start using it like an EJS file. If you build from scratch, I suggest starting
with a `_layout.jade` or `_layout.ejs` file, then an index file, some styling,
then whatever else you want to add.

### Deployment

This site is running on a tiny little Ubuntu server that I pay $1/month for. I'm
not an Ubuntu fan, but hey, I got grandfather'd in at that rate and it's hard to
argue with a dollar.

If you don't feel the need to run you're own server, there's a few options.
[Github Pages][25] is one. You'll need to learn a little bit about Git, which is
a version control system, essential for any software development team. Another
option I ran into recently is [Forge][26]. You just archive your site in a zip
file and drag 'n drop. Easy peasy.

[1]: https://nodejs.org
[2]: https://www.npmjs.com/
[3]: http://harpjs.com/docs/
[4]: http://www.sublimetext.com/
[5]: https://atom.io/
[6]: https://code.visualstudio.com/
[7]: https://notepad-plus-plus.org/
[8]: http://macromates.com/
[9]: http://www.vim.org/
[10]: https://www.gnu.org/software/emacs/
[11]: https://developer.chrome.com/devtools
[12]: https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox
[13]: https://github.com/creationix/nvm#node-version-manager-
[14]: https://github.com/hakobera/nvmw#node-version-manager-for-windows
[15]: http://jade-lang.com/
[16]: https://github.com/tj/ejs#ejs
[17]: http://daringfireball.net/projects/markdown/
[18]: https://learnboost.github.io/stylus/try.html
[19]: http://lesscss.org/
[20]: http://sass-lang.com/
[21]: http://coffeescript.org/
[22]: http://stackoverflow.com/
[23]: http://devdocs.io/
[24]: https://stackedit.io/
[25]: https://pages.github.com/
[26]: https://getforge.com/

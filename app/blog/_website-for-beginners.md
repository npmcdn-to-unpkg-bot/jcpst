This article is meant to help folks get from zero to running with a website.
Some parts may be a bit simplistic for those already familiar with the basics 
of web publishing. However, if you're using techniques you learned 10 or even 5
years ago, you will find some interesting information.

### Getting Started

#### Required software

* Node.js
* Text Editor (NOT a word processor)
* Web Browser

#### Overview of tools

* Node is a platform for running javascript outside of the browser.
    * Programs written in node can be installed as modules
    * npm is a module that comes with Node that is used to install other
      modules.
    * Harp.js is a platform for creating static websites.
        * Works with:
            * HTML
            * CSS
            * JavaScript
        * As well as:
            * Markdown
            * EJS
            * Jade
            * LESS
            * Sass
            * Stylus
            * CoffeeScript

#### Getting started on Windows

This assumes you don't alread have Node.js or Git intstalled.

The easiest way I've found to do this is with [Chocolately][], which is a
package manager for Windows. If you're not familiar with a package manager, it
makes installing, updating, or removing (*managing*) programs (*packages*) a
snap.

With Chocolatey you're going to install Node.js and Git. 

    choco install nodejs.install
    choco install git.install

Git actually isn't required to use Node.js.

Let's make a folder to store all your websites.

    mkdir Dev
    cd Dev

Then a folder inside that for your first harp app.

    mkdir hello
    cd hello

Create your harp app, then start the server.

    harp init
    harp server

Point your web browser to `localhost:9000`. You should see the app!

**links**

[Notepad++]: https://notepad-plus-plus.org/
[Atom]: https://atom.io/
[Sublime]: http://www.sublimetext.com/

[Forge]: https://getforge.com/
[Start Bootstrap]: http://startbootstrap.com/
[Mozilla Tools]: https://teach.mozilla.org/tools/

[Try Git]: https://www.codeschool.com/courses/try-git
[Custom Domain]: https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/

## Using Harp

##### 2015-08-14

I've switched frameworks a few times with this website recently. 

For a long time it was an [Express][] app, not too different from the one the 
cli tool generates. Not bad, but it got old and less fun to maintain. 

Then I tried out [Metalsmith][]. It's simple and quick to set up. My gripe with 
is if I want to use a streaming build system with added functionality via
plugins, I would just use [Gulp][]. Unlike Metalsmith, Gulp has good
documentation and is more versatile. And I'm familiar with it from using it on 
some projects. But then that seems like overkill for such a simple website.

Yesterday I decided to revist [Harp][]. I had my whole site rewritten and
working in less than an hour. It requires zero application biolerplate. I just
wrote my site in [Jade][], [Markdown][] and [Stylus][], ran `harp server` and 
was done with it. It also supports [EJS][], [LESS][], [Sass][], and 
[Coffeescript][] out of the box. Mix and match how you want, and it will take
care of serving static content.

Nice.

[Express]: http://expressjs.com/
[Metalsmith]: http://www.metalsmith.io/
[Gulp]: http://gulpjs.com/
[Harp]: http://harpjs.com/
[Jade]: http://jade-lang.com/
[Markdown]: http://daringfireball.net/projects/markdown/
[Stylus]: https://learnboost.github.io/stylus/
[EJS]: https://github.com/tj/ejs
[LESS]: http://lesscss.org/
[Sass]: http://sass-lang.com/
[Coffeescript]: http://coffeescript.org/


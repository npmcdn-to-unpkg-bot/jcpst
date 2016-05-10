I decided it didn't make sense to use a VPS for this site. It's all static with 
no server-side code. So I decided to use [Github Pages][1]. Now my $1/mo 
[Debian][2] box is freed up to run some sort of REST API or somethin'.

So for the new build, when I do a get push, [Travis CI][3] runs a script that 
builds it and copies it to the `gh-pages` branch. I'm doing almost exactly the 
same thing that's done [here][4], so I don't need to cover all the details. 

Simple to set up and use.

[1]: https://pages.github.com/
[2]: https://www.debian.org/
[3]: https://travis-ci.org/
[4]: http://www.jvandemo.com/how-to-use-travis-ci-to-automatically-deploy-a-harpjs-application-to-github-pages/

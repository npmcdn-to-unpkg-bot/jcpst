I decided it didn't make sense to use a VPS for this site. It's all static with 
no server-side code. So I decided to use [Github Pages][1] instead, which is
free. Now my $1/mo [Debian][2] box to run some sort of REST API or somethin'.

So for the new build, when I do a get push, [Travis CI][3] runs a script that 
builds it and copies it to the `gh-pages` branch. I'm doing almost exactly the 
same thing that's done [here][4], so I don't need to cover all the details here. 
The main difference is I'm using more of the implicit functionality of Travis
and [NVM][5].

`.travis.yml`:

```yaml
language: node_js
after_success: bash deploy
env:
  global:
    secure: <AN_ENCRYPTED_TOKEN_HERE>
```

After you tell it you're using Node.js, if there's an `.nvmrc` file, it will use
whatever version is specified. So you could put `0.10`, `0.12`, `4`, etc. If you
put `node` in there, it will always get latest stable, which is what I'm
doing. 

Then it will do an `npm install` and `npm test` for you. I have no tests, so
nothing happens there.

If that works, I explicitly tell [Bash][6] to run `deploy`, that way I don't 
need an extra step just to make that file executable.

Dead simple to set up and use. Already have a client that I'm using this
workflow with. After it's all set up, he can edit the content Markdown files and 
deploy just by pushing.

[1]: https://pages.github.com/
[2]: https://www.debian.org/
[3]: https://travis-ci.org/
[4]: http://www.jvandemo.com/how-to-use-travis-ci-to-automatically-deploy-a-harpjs-application-to-github-pages/
[5]: https://github.com/creationix/nvm
[6]: https://www.gnu.org/software/bash/manual/bashref.html

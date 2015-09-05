Can't wait until monday to get your hands on Node v4? Here's how to start using
right now with nvm.

Of course, this requires nvm, so if you don't have it, you'll need to [install
it][1].

Next, you'll need to download the appropriate `tar.gz` file from the node.js
site:

<https://nodejs.org/download/rc/v4.0.0-rc.1/>

After that, you'll need to unpack it 

```shell
tar -xvf node-v4.0.0-rc.1-linux-x64.tar.gz
```

and copy the folder to `.nvm/versions/node/v4.0.0-rc.1` (or wherever you have
nvm installed)

Type `nvm use 4`

To check this you can type

```shell
node -v
```

to see that you're using node v4. To really prove it, drop into a REPL

```shell
node
```

and try the following

```javascript
var a = x => x + 1;
a(1)
```

Arrow functions!

Have fun.

[1]: https://github.com/creationix/nvm

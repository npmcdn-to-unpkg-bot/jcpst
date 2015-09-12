I published my first node module on [npm][1] last night. I'm sure there are very 
few people that will be interested in what it does, but it's the first step to a
larger project I'm working on.

When programmers see the word [Scala][2], they think of the multi-paradigm behemoth
of a programming language that runs on the JVM. This has absolutely nothing to
do with that.

But this has to do with [Scala][3], the cross-platform application that is used
for experimenting with musical tunings.

I would like to make a web application that can be used to create and listen to
musical tunings, and display data using dynamic graphs. 

This module reads a Scala (.scl) tuning file and converts it into an array of
MIDI note frequencies.

<https://www.npmjs.com/package/scl-to-frequency>

**Installation:**

```shell
npm install scl-to-frequency
```

**Usage:**

```javascript
'use strict';

let scl = require('scl-to-frequencies');
 
let notes = scl('/path/to/scl/file');
 
// Defaults to Middle C at MIDI note 48 and 261.625565300598623 Hz. 
let notes = scl('/path/to/scl/file', 48, 261.625565300598623);
```

[1]: https://www.npmjs.com/
[2]: http://www.scala-lang.org/
[3]: http://www.huygens-fokker.org/scala/


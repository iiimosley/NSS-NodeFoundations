# Welcome to the Bangazon Corp!
## a  Node.Js  corporation

### Some of our products:

#### Greetings
Our greeting to our target market: the world!
Type the following command in your terminal:
```
$ node hello-world.js
```

#### Cheer Generator
Spirits feeling a lil low? Add some pep to your day by entering the following command with a name of your choosing:
```
$ node cheer.js [name of your choosing]
```

#### Direct Execution
We offer direct execution features through modulating file permissions.
First, you might need to run the following for the continuing services: 
```
$ chmod +x <file name to be executed>
```
Then, run this command for an example of the service:
```
$ ./direct-exec.js
```

#### Version Detail
To find out what version of `Node.Js` and the V8 Javascript Engine you are running (via Global/Process Destructuring & [NVM](https://github.com/creationix/nvm/blob/master/README.md)), run the following:
```
$ ./global.js
```

#### Add Up Those Numbers!
Need a quick sum? Enter this following command with the numbers you need summed up.
We'll do the crunchin'!
```
$ ./args.js [your numbers // separated by space key]
```

#### Salute the Flag
Need a patriotic boost in your morale? Enter the following command:
```
$ ./flag.js
```
* implementing [Chalk's](https://www.npmjs.com/package/chalk) terminal string styling 

#### Read your files
Place your file path into the following command line to read its contents (synchronously w/ `readFileSync`):
```
$ ./file-io.js [your file path]
```

We also provide a customer-preferred *asynchronous* reading of files with this command
```
$ ./async.js [your file path]
```

#### Streaming
Convert any file's text to uppercase with our through Node `Transform()` & `Writable()` stream piping
```
$ ./stream.js [your file path]
```
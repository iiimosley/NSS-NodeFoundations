#!/usr/bin/env node

const {createReadStream, appendFile} = require('fs');
const { Transform, Writable } = require('stream');

const upperCaseify = Transform();
const writeStream = Writable();

const [,,fileArg] = process.argv;
const fileSplit = fileArg.indexOf('.');

let fileUppercase = (value, index) => `${value.substring(0, index)}_CAPS${value.substring(index, value.length)}`;

upperCaseify._transform = (buffer, _, callback) => {
    callback(null, `${buffer}`.toUpperCase());
}

writeStream._write  = (buffer, _, next) =>{
    appendFile(fileUppercase(fileArg, fileSplit), buffer, err => {
        if(err) throw err;
        process.stdout.write(`${buffer}\n`); 
    });
};

createReadStream(fileArg)
.pipe(upperCaseify)
.pipe(writeStream);

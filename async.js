#!/usr/bin/env node

const { readFile } = require('fs');
const [,,filePath] = process.argv;

readFile(filePath, (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
});
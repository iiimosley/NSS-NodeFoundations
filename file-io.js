#!/usr/bin/env node

const { readFileSync } = require('fs');
const [,,filePath] = process.argv;

console.log(typeof(filePath));

!filePath ? process.exit() : process.stdout.write(readFileSync(filePath));
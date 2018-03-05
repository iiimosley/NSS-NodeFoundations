#!/usr/bin/env node

const { readFileSync } = require('fs');
const [,,filePath] = process.argv;

!filePath ? process.exit() : process.stdout.write(readFileSync(filePath));
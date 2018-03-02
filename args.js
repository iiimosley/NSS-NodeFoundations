#!/usr/bin/env node

const [,,...nums] = process.argv;
let sums;

!nums.length ? sums=0
: sums = nums.map(x=>parseInt(x)).reduce((acc,cv)=>acc+cv);

console.log(sums)
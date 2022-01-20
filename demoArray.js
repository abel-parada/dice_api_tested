'use strict';

const ubounds = [];

for (let i=2; i<=20; i++){
    ubounds.push([i]);
};

console.log(ubounds);

// Another way to do it

const temp = new Array(19).fill(2);
console.log(temp);

const mapped = temp.map(value => value+5);
console.log(mapped);
// this didn't change the temp at all

const mappedWithInc = temp.map((value,index)=>[value+index]);
console.log(mappedWithInc);

// All of this can be a oneliner

const bounds = new Array(19).fill(2).map((value,index)=>[value+index]);
console.log(bounds);
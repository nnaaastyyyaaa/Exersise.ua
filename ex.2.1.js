const elements = (array, hash) =>
{
for ( const item of array) 
    {hash[typeof item] +=1};
return hash;
};
const array = [ true, false, 98, 678, 1, 'hello', 'world', 'apple', 'new', false, 67, true, 87, 'car'];
let hash = { boolean: 0, string: 0, number: 0};

console.dir(elements(array,hash))

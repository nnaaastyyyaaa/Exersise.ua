const elements2 = (array, hash) =>{
        for (const element of array) {
            if (Object.getOwnPropertyNames(hash).includes 
        (typeof element)) {
            {hash[typeof element] +=1};  
        } else { 
            Object.defineProperty(hash, typeof 
                element, {
                    writable: true, 
                    value: 1,})
        }
        }
        return hash;
    };
    const array = [ true, false, 98, 678, 1, 'hello', 'world', 'apple', 'new', false, 67, true, 87, 'car'];
    array.push({ });
    hash = {};
    console.dir(elements2(array, hash));
        
   
    
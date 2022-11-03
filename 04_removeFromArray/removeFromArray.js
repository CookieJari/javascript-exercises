function removeFromArray(arr, par){
    
        
    for (let a = 0; a < arguments.length; a++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]===arguments[a]){
                arr.splice(i,1);
            } 
        }
             
    }

    return arr;
}

// Do not edit below this line
module.exports = removeFromArray;

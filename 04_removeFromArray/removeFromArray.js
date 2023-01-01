const removeFromArray = function(array, ...remove) {
    let keepArray = [];        
     out: for (let i = 0; i < array.length; i++) {
         for (let j = 0; j < remove.length; j++) {
             if (array[i] === remove[j]) {
                 continue out;
             }
         }
         keepArray.push(array[i]);
     }
     return keepArray;
 }   

// Do not edit below this line
module.exports = removeFromArray;

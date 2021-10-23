// return first non repeating integer in a given array
// [a,a,b,c,c,f,f,g,g,g] -> return b
// [a,a,b,b,c,f,f,f,h,j,j,k] -> return c

let strArray = ['a','a','b','b','c','f','f','f','h','j','j','k'] 

// naiveSolution
function nonRepeatingchar(strArray){
  for(let i = 0; i < strArray.length; i++) {
    let isDuplicate = false;
    for(let j = 0; j < strArray.length; j++) {
      if(strArray[i] === strArray[j] && (i != j)){
        isDuplicate = true;
        break;
      }
    }
    if(!isDuplicate) return strArray[i]
  }
  return '_'
}

console.log(nonRepeatingchar(strArray))
console.log(nonRepeatingchar(strArray))
/*
A number can eat the number to the right of it if it's smaller than itself. After eating that number, it becomes the sum of itself and that number. Your job is to create a function that returns the final array after the leftmost element has finished "eating".

EXAMPLES:

[5, 3, 7] ➞ [8, 7] ➞ [15]
// 5 eats 3 to become 8
// 8 eats 7 to become 15

[5, 3, 9] ➞ [8, 9]
// 5 eats 3 to become 8
// 8 cannot eat 9, since 8 < 9

nomNom([1, 2, 3]) ➞ [1, 2, 3]
nomNom([2, 1, 3]) ➞ [3, 3]
nomNom([8, 5, 9]) ➞ [22]

YOUR TASK:
Make all test cases pass successfully
NOTE:
Test input contains only an array of numbers. 
cntrl + enter to run tests
*/

function nomNom(arr) {
  // TODO:  Implement this function
  let pointer2 = 1;
  let newArr = [];
  
  for( let pointer1 = 0; pointer1 < arr.length; pointer1++) {
  // checking pointer1 vs pointer2
    
       if(arr[pointer1] > arr[pointer2]){
      let sum = arr[pointer1] + arr[pointer2]
      
      newArr.push(sum)
      pointer1 = pointer1 + 1;
      pointer2 = pointer2 + 1;
    }
    else if(arr[pointer1] === arr[pointer2]){
      newArr.push(arr[pointer2])
      pointer1++
      pointer2++
    }
    else if(arr[pointer1] < arr[pointer2]) {
     newArr.push(arr[pointer1])
     
     pointer1++
     pointer2++
    }
    else {
    return arr;
    }
  }
  return newArr
}
const reverseArray = (arr) => {
  let reversedArr = [];

  for(let i = arr.length - 1; i >-0; i--) {
    let number = arr[i];
    reversedArr.push(number)
  }
  return reversedArr
}
function high(sentence){
  
  let alphabet = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
}


 let answer = ''
 
 let sentenceArray = sentence.split(' ')
 
 let hashmap = new Map();
  
 
  for(let i = 0; i < sentenceArray.length; i++) {
    let word = sentenceArray[i];
    let sum = 0;
    
    for(let j = 0; j < word.length; j++){
      let letter = word[j]

      let currentNumberVal = alphabet[letter]
      
      if(letter == ' ') {
         continue;
      }
      else{
        sum += currentNumberVal
      }
    }
    
    hashmap.set(word, sum)
    
  }
  
  let highestScoringWord = Math.max(...hashmap.values())
  
  for ( let key of hashmap){
    console.log(key[1])
    if(key[1] == highestScoringWord){
      return key[0]
    }
  }
}
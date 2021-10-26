function codingScoreReportPercent(scores) {
  // hahsmap to store scores based on levels
  let hashmap = {};
  
  // arrays to store scores based on levels in hashmap
  let poorArr = [];
  let fairArr = [];
  let goodArr = [];
  let excellentArr = [];
  let eliteArr = [];
  
  // loop through scores array and grab the scores based off conditionals and add to hashmap
  for(let i = 0; i < scores.length; i++){
      let score = scores[i]
      
      if(score >= 300 && score <= 599){
          hashmap['Poor'] = poorArr.push(score)
      }else if(score >= 600 && score <= 699){
          hashmap['Fair'] = fairArr.push(score)
      }else if(score >= 700 && score <= 749){
          hashmap['Good'] = goodArr.push(score)
      }else if(score >= 750 && score <= 799){
          hashmap['Excellent'] = excellentArr.push(score)
      }else {
          hashmap['Elite'] = eliteArr.push(score)
      }
  }
  
  let scoresPercentages = [];

  
  // loop through hashmap add key and percentage of score to a string and push into an array
  for(let key in hashmap){
      
      // calculate percent for each score level
      let percent = (hashmap[key] / scores.length * 100).toFixed(2)
      
      // push that percantage and level into an array
      scoresPercentages.push(`${key}: ${percent}%`)
  }
  // sort scores with highest percentages to the beginning of the array
  return scoresPercentages;
}

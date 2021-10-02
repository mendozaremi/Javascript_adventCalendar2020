let args = [["shoe", "shirt", "belt", "pant"], ["AstroCorp_shoe", "BetaCorp_hat", "CaliCorp_pant", "AstroCorp_shirt", "DeltaCorp_pant", "BetaCorp_shirt", "AstroCorp_belt", "DeltaCorp_shoe", "BetaCorp_belt", "BetaCorp_shoe", "CaliCorp_shirt", "CaliCorp_shoe", "AstroCorp_hat", "CaliCorp_belt", "CaliCorp_jacket", "DeltaCorp_belt", "DeltaCorp_pant", "AstroCorp_pant", "DeltaCorp_lanyard", "DeltaCorp_shirt"]]

const uniform = (args) => {

  
  // variable to hold total amount of matches we need
  let matchNeeded = args[0].length;

  // console.log(args[0])
  // [ 'shoe', 'shirt', 'belt', 'pant' ]

  // have a counter for pieces matched
  let uniformMatchCount = 0;
  
  // create hashmap for uniformSet
  let uniformSetMap = new Map();
  
  // fill uniformSet hashMap with data
  for(let i = 0; i < args[0].length; i++){
    uniformSetMap.set(args[0][i], 0)
  }

  // console.log(uniformSetMap)
  // Map { 'shoe' => 0, 'shirt' => 0, 'belt' => 0, 'pant' => 0 }

  // create hashmap to hold company and pieces
  let uniformPiecesCompany = [];
  
  // loop through uniform pieces created hashMaps for each company
  for(let i = 0; i < args[1].length; i++){
    
    let curr = args[1][i];

    // grab company string before the underscore
    let companyName = curr.substring(0, curr.indexOf("_"));
  
    // grab company piece string after underscore
    let companyPiece = curr.substring(curr.indexOf("_") + 1);
    
    let arr = []
    
    // if companyName exist push piece and if doesnt exist 
    uniformPiecesCompany.push([companyName, companyPiece])
  }
  
  console.log(`this is hashmap containing uniform comapany and pieces ${uniformPiecesCompany}`)
}
const fs = require("fs");
const path = require('path')
const map = fs.readFileSync(path.join(__dirname, './day2.txt'), 'utf8')

console.log(map)
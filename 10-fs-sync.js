const {readFileSync,writeFileSync}=require('fs')

// alternate way
// const fs =require(fs)
// fs.readFileSync

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    //{flag:'a'}// use it only to append in the file 
)
     // if file name not present creates a file and writes the result and if file name already exists, clears the file and writes the results 
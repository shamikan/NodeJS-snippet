const path= require('path')

console.log(path.sep)

const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath) // join and display path

const base = path.basename(filePath)
console.log(base) // view base file or leaf node

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)
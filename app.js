//npm -global command , comes w/ node
// npm --version

//local dependencies - use it only in this particular project

// npm i <packageName>

//global depencdies - use it in any project
//npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json -manifest file(store important info about the proh=ject /package)
// manual approach (create package.json in the root , create properties etc)
// npm init( step by step, process enter to skip)
// npm init -y(everything default)



const _ =require('lodash');

const items = [ 1 ,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log((newItems));
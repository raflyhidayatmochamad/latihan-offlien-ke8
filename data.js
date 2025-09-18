const {error}   = require('console');
const fs = require('fs');
//menuliskan string  ke file (sync)
try{
    fs.writeFileSync('data/test.txt','Hello Synchronous World!');
}
catch(e){
    console.log(e);
}

//menuliskan file string ke file (async)
// fs.writeFile('data/TextDecoderStream.txt','Hello Asynchronous World!',(e)=>{
//     console.log(err);
// });

//membaca file (sync)
const data = fs.readFileSync('data/test.txt','utf-8');
console.log(data.toString() );
//atau
//const data1 = fs.readFileSync('data/test.txt','utf-8');
//console.log(data1);


const fs = require('fs');

const readStream = fs.createReadStream('./doc/blog', 'utf-8');
const writeStream = fs.createWriteStream('./doc/blog2');

readStream.on('data', (chunk)=>{
    console.log("----------------NEW CHUNK----------------");
    console.log(chunk);
    writeStream.write('\n new chunk \n')
    writeStream.write(chunk);
})
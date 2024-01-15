//built in module

//file handling
const fs = require('fs');

//write file 
fs.writeFile('./text/t1', 'hi mate', ()=>{ //if file doesnot exist then it creates files
    console.log("file updated");
});

//reading file
fs.readFile('./text/t1', 'utf-8', (err,data)=>{ //utf-8 to receive string instead of buffer
    if(err){
       console.log(err);
    }

    console.log(data); // use data.tostring() to convert buffer to string or just pass utf-8.
});

//directories
if(!fs.existsSync('./text2')){
    //mkdir to create, rmdir to delete directories
    fs.mkdir('./text2', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
} else{
    console.log("folder already exist");
}

//removing file
if(fs.existsSync('./text2/deleteme')){
    fs.unlink('./text2/deleteme', (err)=>{
        if(err){
            console.log(err);
        }
        console.log("deleteme file deleted");
    })
}
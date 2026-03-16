const fs = require('fs');


// create file and overwrite in file

fs.writeFile('new.txt','This is new file created using fs....',(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("File created successfully...");
    }
})

// Appending file
fs.appendFile('new.txt','\n Helloooo....',(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Appending successfully...");
    }
})

fs.readFile('new.txt', 'utf-8', (err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})

// // deleting file
fs.unlink('new.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File deleted successfully...");
    }
})


// rename file

fs.rename('new.txt','new1.txt', (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("file renamed successfully...");
    }
})

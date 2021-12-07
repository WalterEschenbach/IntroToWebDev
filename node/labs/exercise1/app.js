// import the readline node core module
// use this module to take input from user in their terminal
const fs = require('fs');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// declare variables with the two questions we'll be asking
// declare variable for the message we are going to write to our file
let q1 = 'Please enter your name: ';
let q2 = 'Enter a file name: '
let msg = 'You are awesome';

// First Question
const askQ1 = () => {
    return new Promise((resolve, reject)=>{
        rl.question(q1, name=>{
            console.log(`${msg}, ${name}.`)
            resolve();
        })
    })
}

//Second Question
const askQ2 = () => {
    return new Promise((resolve, reject)=>{
        rl.question(q2, async (fName)=>{
            let fileExists = await checkFileExists(fName);
            console.log('File exists: ', fileExists)
            
            if(fileExists){
                console.log('This file already exists');                
            }else{
                writeMessageInNewFile(fName, msg);
            }
            resolve();
        })
    })
}


const promptUser = async () => {
    await askQ1();
    await askQ2();
    rl.close();
};

promptUser();


async function checkFileExists (str){
    try {
        await fs.promises.access(`${str}.txt`);
        return true;
    } catch (error) {
        return false;
    }
}

function writeMessageInNewFile(fName, msg){
    fs.promises.writeFile(`${fName}.txt`, msg, (error)=>{
        if(error) throw error;
        console.log('The file has been saved!');
    });

}




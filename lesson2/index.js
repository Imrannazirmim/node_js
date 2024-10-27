//built-in module in nodejs
//example: http, url, path, fs,
//writeFile(), appendFile(), readFile(), unlink(), exits()

//fs module

const fs = require('fs');


fs.writeFile('demo.txt', ' my name is imran nazir mim ', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('succesfull')
    }
})

fs.appendFile('demo.txt', 'i am 22 years old.', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('succesfull file append')
    }
});

fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});

fs.rename('demo.txt', 'demo2.txt', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('succesful rename')
    }
});

fs.unlink('demo2.txt', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('succesfull delete')
    }
})

fs.exists('demo2.txt', (result) => {
    if(result){
        console.log('found')
    }else[
        console.log('not found')
    ]
})


//built-in module os, path _ method

const {totalmem, freemem, userInfo, homedir, hostname} = require('os');
console.log(userInfo())
console.log(homedir())
console.log(hostname())
console.log(totalmem())
console.log(freemem())


//path

// console.log(__dirname)
// console.log(__filename)
const path = require('path')
const extentionName = path.extname('index.html');
console.log(extentionName)

const joinName = path.join(__dirname + '/../views')
console.log(joinName)
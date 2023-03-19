const mongoose = require('mongoose'); 
const readLine = require('readline');

if(process.platform === 'win32'){
    const rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT',()=>{
        process.emit('SIGINT');
    })
}


const dbURI = 'mongodb://0.0.0.0/BlueBurger';
mongoose.connect(dbURI,{useNewUrlParser: true});


mongoose.connection.on('connected', ()=> {
    console.log(`Mongoose connected to ${dbURI}`);
})

mongoose.connection.on('error', (err)=> {
    console.error(`Mongoose connection error: `,err);
})

mongoose.connection.on('disconnected', ()=> {
    console.log(`Mongoose disconnected`);
})

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
}

// For nodemon restarts 
process.once('SIGUSR2', ()=> {
    gracefulShutdown('nodemon restart', ()=>{
        process.kill(process.pid, 'SIGUSR2');
    });
});

//For app termination
process.on('SIGINT', ()=> {
    gracefulShutdown('app termination', ()=>{
        process.exit(0);
    });
});








process.env.UV_THREADPOOL_SIZE = 1;

// Is the file being executed in master mode?

// Im a child, Im going to act like a server and do nothing else

    const express = require('express');
    const crypto = require('crypto');
    const app = express();
    const Worker = require('webworker-threads').Worker;

    app.get('/', (req, res) => {
        // crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=>{
        //     res.send('Hi there');
        // });
        const worker = new Worker(function(){
            this.onmessage = function(){
                let counter = 0;
                while (counter < 1e9) {
                    counter++;
                }
                postMessage(counter);
            }

        });
        worker.onmessage = function(myCounter){
            console.log(myCounter);
        }
        worker.postMessage();
    });

    app.get("/fast", (req, res)=>{
        res.send("This was fast!");
    })
    app.listen(3000);



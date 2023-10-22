const EventEmitter = require('events');


class logger extends EventEmitter{

    log(message){
        console.log(message);

        // event'i tetikle 
        this.emit('connection',{id:1, message:'hello'});
    }

}

module.exports = logger;


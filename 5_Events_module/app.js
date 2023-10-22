
const Logger = require('./logger');
const logger = new Logger();
// listener kayıt et


logger.on('connection', function(args){

    console.log('bağlantı sağlandı',args);
});

logger.log('veli yarar login oldu')
//event'i tetikle 

// emitter.emit('connection',{id:1, message:'hello'});

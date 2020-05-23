const fs =  require('fs');
const logFileName = 'log.txt';



const log = (content) => {
    fs.appendFileSync(logFileName, `${new Date()} -> ${content}\n` );

}


module.exports = log;

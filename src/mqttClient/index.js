const facade = require('./facade');
const db = require('../db');

const init = () => {
    facade.listenMessage((topic,message) => {
        const temp = JSON.parse(message.toString());
        const temperature = {idMachine:temp.idMachine,value:temp.value,frequency:temp.frequency}
        db.saveTemperature(temperature).then((result)=> console.log(result));
      })
}

const sendMessage = (idMachine,message) => {
    facade.publish(idMachine,message);
}

module.exports = {
    init,
    sendMessage,
    listenMessage:facade.listenMessage
}

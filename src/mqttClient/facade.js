var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://mosquitto')
client.on('connect',  () => {
    client.subscribe('general')
})

const listenMessage = (callback)=>{
    client.on('message',callback);
}

const subscribe = (topic) =>{
    client.subscribe(topic);
}

const unsubscribe =(topic)=> {
    client.unsubscribe(topic);
}

const publish = (topic,message) =>{
    client.publish(topic,message);
}

module.exports = {
    listenMessage,
    subscribe,
    unsubscribe,
    publish
}
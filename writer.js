var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://127.0.0.1");


var frequency = process.argv[3] || 5000;

//A setTimeout recursivly can generate memory leaks
const loop = () => {
  sendMessage();
  setTimeout(loop, frequency);
}

const sendMessage = () => {
  const temperature = Math.random() * (37 - 23.5) + 23.5;
  let message = {
    idMachine: process.argv[2],
    value: temperature,
    frequency: frequency
  };
  client.publish("general", JSON.stringify(message));
  console.log("Message Sent" + JSON.stringify(message));
}


client.on("connect", function() {
  loop();
});

client.subscribe(`${process.argv[2]}`);

client.on("message", (topic, message) => {
  jsonMessage = JSON.parse(message.toString());
  console.log(jsonMessage);
  frequency = jsonMessage.frequency;
});

const express = require("express");
const mqttClient = require("./mqttClient");
const {temperature} = require('./routes')

mqttClient.init();

const app = express();
app.use(express.json());

app.use('/temperatures',temperature);


app.listen(3000,()=>{
  console.log("listening in 3000")
})
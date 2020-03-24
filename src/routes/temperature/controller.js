const db = require('../../db');
const mqttClient = require('../../mqttClient')
const getCollection = (req,res)=>{  
    db.getAllTemperatures().then((temperatures)=>res.json(temperatures)).catch(error => res.code(500).json({error}))
  }

  const getResourse = (req,res)=>{
    const id = req.params.id;
      db.getTemperatureByMachine(id).then(temperature => res.json(temperature)).catch(error => res.code(500).json({error}))
  }

  const setFrequency = (req,res) => {
    const id = req.params.id;
    const frequency = req.body.frequency;
    mqttClient.sendMessage(id,JSON.stringify({frequency}))
    res.json({message:`send ${frequency} to ${id} machine`})
  }

  module.exports ={
      getCollection,
      getResourse,
      setFrequency
  }
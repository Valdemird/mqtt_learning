const {get,getAll,save} = require('./facade')
const Temperature = require('./models/Temperature')


const getAllTemperatures =  () => getAll(Temperature)
const getTemperatureByMachine =  (id) => get(Temperature,{idMachine:id})
const saveTemperature = (data) => save(Temperature,data)

module.exports = {
    getAllTemperatures,
    getTemperatureByMachine,
    saveTemperature
};

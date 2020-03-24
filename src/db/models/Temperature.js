const { Schema, model } = require("mongoose");

const TemperatureSchema = new Schema(
  {
    idMachine: String,
    value: Number,
    frequency: Number
  },
  { timestamps: true }
);

module.exports = model('Temperature',TemperatureSchema);

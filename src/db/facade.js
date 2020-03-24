const mongoose = require('mongoose');
mongoose.connect('mongodb://root:example@mongo:27017/admin', {useNewUrlParser: true, useUnifiedTopology: true});

const getAll = model => {
  return new Promise((resolve, reject) => {
    model.find({}, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const get = (model,predicate) => {
    return new Promise((resolve, reject) => {
      model.find(predicate, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  };

const save = (model,data) => {
    return new Promise((resolve,reject) => {
      const newModelElement = new model(data);
      newModelElement.save((err,res) => {
        if(err)
          reject(err)
        resolve(res)
      })
    })  
}

module.exports = {
    get,
    getAll,
    save
}
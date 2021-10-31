const mongoose = require ('mongoose')

module.exports= mongoose.model('Client', {
  male: {type:String, default:''},
  city: {type:String, default:''},
  mail: {type:String, default:''},
  text: {type:String, default:''},
})

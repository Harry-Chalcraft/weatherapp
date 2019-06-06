var mongoose = require('mongoose');

var CitySchema = mongoose.Schema({
    name : String,
    desc: String,
    img: String,
    temp_min: Number,
    temp_max: Number,
    longitude: Number,
    latitude: Number
   });

module.exports = mongoose.model('cities', CitySchema);

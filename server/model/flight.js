const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/");
const flightSchema = mongoose.Schema({
    id : {type: Number, required:true, unique:true},
    airline :{type:String, required:true},
    source :{type:String, required:true},
    destination:{type:String, required:true},
    fare:{type:Number, required:true},
    duration:{type:Number, required:true}
})

const Flight = mongoose.model('Flight', flightSchema);
const f1 = new Flight;
f1.id = 2132435
f1.fare = 2332;
console.log(f1.fare);

module.exports = Flight;
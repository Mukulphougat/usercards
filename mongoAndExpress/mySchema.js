const mongoose = require("mongoose");
const schema = mongoose.Schema;
const studSchema = new schema({
    studId: {
        type: Number,
        required: true
    },
    studName: {
        type: String,
        required: true
    },
    studCourse: {
        type: String,
        required: true
    },
})
studSchema.pre('save', function () {
    console.log("Before Saving")
})
const studs = mongoose.model("studData",studSchema);
module.exports = {
    studData: studs
}

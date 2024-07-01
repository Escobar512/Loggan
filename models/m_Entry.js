const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    topicName: {
        type: String,
        required: true
    },
    entryDate: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Entry", entrySchema);

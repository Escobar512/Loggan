const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
    Type: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Topic", topicSchema);

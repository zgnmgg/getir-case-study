const mongoose = require('mongoose');

/**
 * @description database record object
 */
const recordSchema = new mongoose.Schema({
        key: {
            type: String
        },
        value: {
            type : String
        },
        createdAt: {
            type: Date
        },
        counts: [
            {
                type: Number
            }
        ]
    }, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('record', recordSchema);

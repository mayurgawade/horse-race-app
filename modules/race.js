const mongoose = require('mongoose')

const raceResultSchema = new mongoose.Schema({
    start: {
        event: {
            type: String,
        },
        horse: {
            id: {
                type: Number
            },
            name: {
                type: String
            }
        },
        time: {
                type: Number
        }
    },
    start: {
        event: {
            type: String,
        },
        horse: {
            id: {
                type: Number
            },
            name: {
                type: String
            }
        },
        time: {
                type: Number
        }
    },
})

const Race = mongoose.model('race', raceResultSchema);

module.exports = Race;
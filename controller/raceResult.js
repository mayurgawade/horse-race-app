const Race = require('../modules/race')

exports.raceResults = async (req,res) => {
    try {
        const raceResults = await Race.find({})
        if(raceResults.length) {
            res.send({
                statusCode:201,
                status:'Success',
                raceResults
            })
        }
    } catch (err) {
        console.log('Error Occured', err)
        res.send({
                statusCode:400,
                status:'failure',
                errorMessage: err
            })
    }
}
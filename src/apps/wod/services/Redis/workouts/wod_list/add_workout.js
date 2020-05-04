/*]
|| ----------------------------------------------------------- ||
    ADD WORKOUT TO WOD LIST
    ----------------------------------------------------------
    The workout list in REDIS should be a FIFO of some length
    of WODs.

    ----------------------------------------------------------
    Born On:    4.May.2020
    Author:     Alex Wilson
|| ----------------------------------------------------------- ||
[*/
const createClient = require('../../client')
const getWorkouts = require('./get_wod_list')
/*]
[|]
[*/
module.exports = (newWorkout) => {
    return new Promise((resolve, reject) => {
        let controlStruct = {
            client: {},
            workouts: []
        }
        /*]
        [|]
        [*/
        createClient()
            .then((client) => {
                controlStruct.client = client
            })
            .then(() => {
                return getWorkouts(controlStruct.client)
            })
            .then((wodList) => {
                if (wodList !== null) {
                    /*]
                    [|] TODO|AW: Check for duplicates prior to the add.  Use the workout name.
                    [*/
                    controlStruct.workouts = JSON.parse(wodList)
                }
            })
            .then(() => {
                /*]
                [|] TODO|AW: Take this silly shit out!
                [*/
                controlStruct.workouts.push(newWorkout)
                /*]
                [|]
                [*/
                const dat = JSON.stringify(controlStruct.workouts)
                /*]
                [|]
                [*/
                controlStruct.client.set('wod_list', dat, (err) => {
                    if (!err) {
                        resolve()
                    } else {
                        reject({
                            msg: 'Failed when adding to the workout list',
                            err: err
                        })
                    }
                })
            })
            .catch((e) => {
                reject({
                    msg: 'Failed when adding a workout to the workouts list',
                    err: e
                })
            })
    })
}
/*]
[E] END
[*/

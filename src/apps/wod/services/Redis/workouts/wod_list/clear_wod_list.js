/*]
|| ----------------------------------------------------------- ||
    CLEAR WOD LIST
    ----------------------------------------------------------
    Remove everything from the WOD list
    ----------------------------------------------------------
    Born On:    4.May.2020
    Author:     Alex Wilson
|| ----------------------------------------------------------- ||
[*/
const createClient = require('../../client')
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
                /*]
                [|]
                [*/
                resolve()
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

/*]
|| ----------------------------------------------------------- ||
    SET CURRENT WOD
    ----------------------------------------------------------
    Sets the current WOD to one of the wods selected randomly
    from the WOD list.
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
                const dat = JSON.stringify(newWorkout)
                /*]
                [|]
                [*/
                controlStruct.client.set('active_wod', dat, (err) => {
                    if (!err) {
                        resolve()
                    } else {
                        reject({
                            msg: 'Failed when updating the active wod',
                            err: err
                        })
                    }
                })
            })
            .catch((e) => {
                reject({
                    msg: 'Failed when updating the active wod',
                    err: e
                })
            })
    })
}
/*]
[E] END
[*/

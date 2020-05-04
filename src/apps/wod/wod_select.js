const jsonfile = require('jsonfile')
const random = require('./services/name_generator/types/random')
/*]
[|]
[*/
module.exports = (path) => {
    return new Promise((resolve, reject) => {
        let workouts = []
        /*]
        [|]
        [*/
        jsonfile.readFile(path)
            .then((workoutData) => {
                workouts = workoutData.workouts
            })
            .then(() => {
                const workout_index = random(0, workouts.length)
                const selected_workout = workouts[workout_index]
                resolve(selected_workout)
            })
            .catch((e) => {
                reject({
                    msg: 'Failed during WOD select',
                    err: e
                })
            })
    })
}
/*]
[E] END
[*/

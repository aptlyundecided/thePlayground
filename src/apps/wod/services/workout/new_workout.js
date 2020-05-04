const newWorkoutStruct = require('./workout_struct')
const newWorkoutMethods = require('./workout_methods')
/*]
[|]
[*/
module.exports = () => {
    const new_workout = {}
    /*]
    [|]
    [*/
    const struct = newWorkoutStruct()
    const methods = newWorkoutMethods()
    /*]
    [|]
    [*/
    for (let property in struct) {
        new_workout[property] = struct[property]
    }
    /*]
    [|]
    [*/
    for (let method in methods) {
        new_workout[method] = methods[method]
    }
    /*]
    [|]
    [*/
    return new_workout
}
/*]
[E] END
[*/

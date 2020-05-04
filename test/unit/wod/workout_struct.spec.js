const test = require('ava')
const newWorkout = require('../../../src/apps/wod/services/workout/new_workout')
/*]
[|]
[*/
test('Generate workout structure.', (t) => {
    const workout = newWorkout()
    t.is(typeof workout, 'object')
})
/*]
[|]
[*/
test('set workout name', (t) => {
    const workout = newWorkout()
    const name = 'The noisy headphone'
    workout.set_name(name)
    t.is(workout.name, name)
})
/*]
[E] END
[*/

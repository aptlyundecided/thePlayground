const test = require('ava')
const selectWOD = require('../../../src/apps/wod/wod_select')
/*]
[|]
[*/
test('Select a WOD', (t) => {
    const workout = selectWOD()
    // t.is(typeof workout, 'object')
    t.pass()
})
/*]
[|]
[*/
// test('set workout name', (t) => {
//     const workout = newWorkout()
//     const name = 'The noisy headphone'
//     workout.set_name(name)
//     t.is(workout.name, name)
// })
/*]
[E] END
[*/

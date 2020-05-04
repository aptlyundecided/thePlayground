const test = require('ava')
const addWOD = require('../../../../src/apps/wod/services/Redis/workouts/wod_list/add_workout')
// const createClient = require('../../../../src/apps/wod/services/Redis/client')
/*]
[|]
[*/
test('Add a workout to the workout list', async t => {
    const yea = {
        name: 'test_workout',
        workout: {
            rounds: 12,
            items: [
                'fart'
            ],
            for_time: true
        }
    }
    const workout_list = await addWOD(yea)
    t.log(workout_list)
    t.pass()
})
/*]
[E] END
[*/

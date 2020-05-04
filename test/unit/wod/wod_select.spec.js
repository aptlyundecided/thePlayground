const test = require('ava')
const selectWOD = require('../../../src/apps/wod/wod_select')
/*]
[|]
[*/
test('Select a WOD', async t => {
    const workout = await selectWOD('./src/apps/wod/wods.json')
    t.is(typeof workout, 'object')
    t.is(typeof workout.name, 'string')
    t.pass()
})
/*]
[E] END
[*/

const test = require('ava')
const getWodList = require('../../../../src/apps/wod/services/Redis/workouts/wod_list/get_wod_list')
const createClient = require('../../../../src/apps/wod/services/Redis/client')
/*]
[|]
[*/
test('Generate workout structure.', async t => {
    const client = await createClient()
    const workout_list = await getWodList(client)
    t.pass()
})
/*]
[E] END
[*/

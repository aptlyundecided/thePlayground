const test = require('ava')
const type1 = require('../../../../src/apps/wod/services/name_generator/types/type1')
/*]
[|]
[*/
test('Type 1 Workout Name Generator', async t => {
    const testName = await type1()
    console.log(testName)
    t.pass()
})
/*]
[E] END
[*/

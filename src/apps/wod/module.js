const CronJob = require('cron').CronJob
const wodSelect = require('./wod_select')
const R = require('./services/Redis')
const path = require('path')
/*]
[|]
[*/
function uniqueNewYork (list) {
    const wod = wodSelect(path.join(__dirname, '/wods.json'))
    /*]
    [|]
    [*/
    const matched = list.forEach((workout) => {
        return workout.name === wod.name
    })
    /*]
    [|]
    [*/
    if (typeof matched === 'undefined') {
        return wod
    } else {
        uniqueNewYork(list)
    }
}
/*]
[|]
[*/
module.exports = {
    rotation () {
        /*]
        [|] Create a job who runs at midnight
        [*/
        const job = new CronJob('0 0 0 * * *', () => {
            R.wod_list.get_workouts()
                .then((workoutsString) => {
                    const w = JSON.parse(workoutsString)
                    return w
                })
                .then((workouts) => {
                    return uniqueNewYork(workouts)
                })
                .then((wod) => {
                    const sh = [ 
                        R.WOD.set_wod(wod),
                        R.wod_list.add_workout(wod)
                    ]
                    /*]
                    [|]
                    [*/
                    return sh
                })
                .then(() => {
                    console.log('Rotation Complete')
                })
                .catch((e) => {
                    console.log({
                        msg: 'failed in rotation()',
                        err: e
                    })
                })
        }, null, true, 'America/Los_Angeles')
        /*]
        [|]
        [*/
        job.start()
    },
    start () {
        R.WOD.get_wod()
            .then((wod) => {
                if (wod === null) {
                    const w = wodSelect()
                    return R.WOD.set_wod(w)
                }
            })
            .then(() => {
                console.log('WOD is set.')
            })
            .then(() => {
                this.rotation()
            })
            .catch((e) => {

            })
    }
}
/*]
[E] END
[*/

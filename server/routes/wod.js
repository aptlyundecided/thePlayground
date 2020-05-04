/*]
|| ----------------------------------------------------------- ||
    WORKOUT OF THE DAY
    ----------------------------------------------------------
    Routes for the WOD app.
    ----------------------------------------------------------
    Born On:    4.May.2020
    Author:     Alex Wilson
|| ----------------------------------------------------------- ||
[*/
const express = require('express')
const body_parser = require('body-parser')
const R = require('../../src/apps/wod/services/Redis')
/*]
[|]
[*/
const json_parser = body_parser.json()
/*]
[|]
[*/
const router = express.Router()
/*]
[|] ---------------------------------------------------------
[|]        CLI SECTION
[|] ---------------------------------------------------------
/*]
[|] ---------------------------------------------------------
[|]        Insomnia!  JWT practice
[|] ---------------------------------------------------------
[*/
router.post('/insomnia/get-wod-list', (req, res) => {
    R.wod_list.get_workouts()
        .then((workoutString) => {
            res.send(workoutString)
        })
        .catch((e) => {
            res.send({
                msg: 'Failed to get wod_list from redis',
                err: e
            })
        })
})
/*]
[|]
[*/
router.post('/insomnia/clear-wod-list', (req, res) => {
    R.wod_list.clear_wod_list()
        .then(() => {
            res.send({
                msg: 'wod_list has been cleared'
            })
        })
        .catch((e) => {
            res.send({
                msg: 'Failed to get wod_list from redis',
                err: e
            })
        })
})
/*]
[|]
[*/
router.post('/insomnia/add-workout', json_parser, (req, res) => {
    const workout = req.body.workout
    /*]
    [|]
    [*/
    R.wod_list.add_workout(workout)
        .then(() => {
            res.send({
                msg: 'Added a new workout!'
            })
        })
        .catch((e) => {
            res.send({
                msg: 'Failed to get wod_list from redis',
                err: e
            })
        })
})
/*]
[|]
[*/
router.post('/insomnia/get-wod', json_parser, (req, res) => {
    R.WOD.get_wod()
        .then((wod) => {
            res.send({
                msg: 'Retrieved workout',
                wod: JSON.parse(wod)
            })
        })
        .catch((e) => {
            res.send({
                msg: 'Failed to get wod from redis',
                err: e
            })
        })
})
/*]
[|]
[*/
module.exports = router
/*]
[E] END
[*/

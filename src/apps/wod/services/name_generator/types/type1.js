/*]
|| ----------------------------------------------------------- ||
    TYPE 1 WORKOUT NAME
    ----------------------------------------------------------
    Generate a workout name in the format of:
    "The Adjective Noun"

    I think this will work?
    ----------------------------------------------------------
    Born On:    4.May.2020
    Author:     Alex Wilson
|| ----------------------------------------------------------- ||
[*/
const nouns = require('../language/nouns/nouns')
const adj = require('../language/adjectives/adjectives')
const random = require('./random')
/*]
[|]
[*/
module.exports = () => {
    const struct = {
        name: '',
        noun_list: [],
        adj_list: []
    }
    /*]
    [|]
    [*/
    return new Promise((resolve, reject) => {
        nouns.make_nouns_array()
            .then((nounList) => {
                struct.noun_list = nounList
                return adj.make_adjectives_array()
            })
            .then((adjList) => {
                struct.adj_list = adjList
            })
            .then(() => {
                /*]
                [|] Randomize
                [*/
                const noun_index = random(0, struct.noun_list.length)
                const adj_index = random(0, struct.adj_list.length)
                /*]
                [|] Name Build
                [*/
                struct.name = `The ${struct.adj_list[adj_index]} ${struct.noun_list[noun_index]}`
            })
            .then(() => {
                /*]
                [|] Return the name
                [*/
                resolve(struct.name)
            })
            .catch((e) => {
                reject({
                    msg: 'Failed during type1 workout name generation',
                    err: e
                })
            })
    })
}
/*]
[E] END
[*/

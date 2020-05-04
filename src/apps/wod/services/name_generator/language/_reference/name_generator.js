/*]
[|] || -------------------------------------------------------------------------- ||
[|]     BAND NAME GENERATOR
[|]     -----------[]
[|]     filename:       .js
[|]     description:
[|]     born on:
[|]     author:         Alex Wilson
[|] || -------------------------------------------------------------------------- ||
[*/
const verbs = require('./verbs/verbs')
const nouns = require('./nouns/nouns')
const adverbs = require('./adverbs/adverbs')
const adjectives = require('./adjectives/adjectives')
const mat = require('../../../util/math')
/*]
[|]
[*/
function random_name_type () {
    return mat.random_int(0, 5)
}
/*]
[|]
[*/
function s_check (s) {
    if (s.slice(-1) === 's') {
        return s
    } else {
        return `${s}s`
    }
}
/*]
[|] name type functions object.
[*/
const types = {
    type_0 () {
        return new Promise((resolve) => {
            let x = mat.random_int(0, 2)
            let y = 0
            /*]
            [|]
            [*/
            switch (x) {
                case 0:
                    nouns.make_nouns_array()
                        .then((noun_list) => {
                            y = mat.random_int(0, noun_list.length)
                            resolve(noun_list[y])
                        })
                        .catch(e => {
                            console.log(e)
                            resolve()
                        })
                    break


                case 1:
                    verbs.make_verbs_array()
                        .then((verb_list) => {
                            y = mat.random_int(0, verb_list.length)
                            resolve(verb_list[y])
                        })
                        .catch(e => {
                            console.log(e)
                            resolve()
                        })
                    break


                default:
                    resolve('NO NAME')
            }
        })
    },
    type_1 () {
        return new Promise((resolve) => {
            nouns.make_nouns_array()
                .then((noun_list) => {
                    let y = mat.random_int(0, noun_list.length)
                    let name = noun_list[y]
                    if (name.slice(-1) === 's') {
                        resolve(`The ${name}`)
                    } else {
                        resolve(`The ${name}s`)
                    }
                })
        })
    },
    type_2 () {
        return new Promise((resolve) => {
            let adverb_list = ''
            let noun_list = ''
            /*]
            [|]
            [*/
            Promise.resolve()
                .then(() => {
                    return new Promise((resolve) => {
                        adverbs.make_adverbs_array()
                            .then((d) => {
                                adverb_list = d
                                resolve()
                            })
                            .catch(e => {
                                console.log(e)
                                resolve()
                            })
                    })
                })
                .then(() => {
                    return new Promise((resolve) => {
                        nouns.make_nouns_array()
                            .then((d) => {
                                noun_list = d
                                resolve()
                            })
                            .catch(e => {
                                console.log(e)
                                resolve()
                            })
                    })
                })
                .then(() => {
                    let x = mat.random_int(0, adverb_list.length)
                    let y = mat.random_int(0, noun_list.length)
                    let adverb = adverb_list[x]
                    let noun = noun_list[y]
                    resolve(`The ${noun} ${adverb}`)
                })
                .catch(e => {
                    console.log(e)
                    resolve('error')
                })
        })
    },
    type_3 () {
        return new Promise((resolve) => {
            let adjective_list = []
            let noun_list = []
            /*]
            [|]
            [*/
            Promise.resolve()
                .then(() => {
                    return new Promise((resolve) => {
                        adjectives.make_adjectives_array()
                            .then((d) => {
                                adjective_list = d
                                resolve()
                            })
                            .catch(e => {
                                console.log(e)
                                resolve()
                            })
                    })
                })
                .then(() => {
                    return new Promise((resolve) => {
                        nouns.make_nouns_array()
                            .then((d) => {
                                noun_list = d
                                resolve()
                            })
                            .catch(e => {
                                console.log(e)
                                resolve()
                            })
                    })
                })
                .then(() => {
                    let x = mat.random_int(0, adjective_list.length)
                    let y = mat.random_int(0, noun_list.length)
                    let adjective = adjective_list[x]
                    let noun = noun_list[y]
                    resolve(`${adjective} ${noun}`)
                })
                .catch(e => {
                    console.log(e)
                    resolve('error')
                })
        })
    },
    type_4 () {
        return new Promise((resolve, reject) => {
            let noun_list = []
            let adjective_list = []
            /*]
            [|]
            [*/
            nouns.make_nouns_array()
                .then((d) => {
                    noun_list = d
                })
                .then(() => {
                    return new Promise((resolve) => {
                        adjectives.make_adjectives_array()
                            .then((d) => {
                                adjective_list = d
                                resolve()
                            })
                            .catch(e => {
                                console.log(e)
                                reject()
                            })
                    })
                })
                .then(() => {
                    let x = mat.random_int(0, noun_list.length)
                    let y = mat.random_int(0, adjective_list.length)
                    let z = mat.random_int(0, noun_list.length)
                    let predicatenoun = s_check(noun_list[z])
                    let subjectnoun = noun_list[x]
                    let adj = adjective_list[y]
                    /*]
                    [|] Capitalize
                    [*/
                    subjectnoun = `${subjectnoun.charAt(0).toUpperCase()}${subjectnoun.slice(1)}`
                    /*]
                    [|]
                    [*/
                    resolve(`${subjectnoun} and the ${adj} ${predicatenoun} `)
                })
                .catch(e => {
                    console.log(e)
                    reject()
                })
        })
    }
}
/*]
[|]
[*/
function make_name (x) {
    return new Promise((resolve, reject) => {
        let type = 0
        /*]
        [|]
        [*/
        if (x === 'number') {
            type = x
        } else {
            type = random_name_type()
        }
        /*]
        [|] Create 'band_name' generator 'function name'
        [*/
        const func_name = `type_${type}`
        /*]
        [|]
        [*/
        types[func_name]()
            .then((d) => {
                resolve(d)
            })
            .catch(e => {
                reject(e)
            })
    })
}
/*]
[|]
[*/
module.exports = {
    types,
    make_name
}
/*]
[E] END
[*/

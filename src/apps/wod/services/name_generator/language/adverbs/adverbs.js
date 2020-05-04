/*]
[|] || -------------------------------------------------------------------------- ||
[|]
[|]     -----------[]
[|]     filename:       .js
[|]     description:
[|]     born on:
[|]     author:         Alex Wilson
[|] || -------------------------------------------------------------------------- ||
[*/
const fs = require('fs')
/*]
[|]
[*/
function make_adverbs_array () {
    return new Promise((resolve) => {
        Promise.resolve()
            .then(() => {
                /*]
                [|] Read the file from storage to memory
                [*/
                return new Promise((resolve) => {
                    fs.readFile(`${__dirname}/adverbs.txt`, 'utf8', (err, data) => {
                        if (!err) {
                            resolve(data)
                        } else {
                            console.log(err)
                        }
                    })
                })
            })
            .then((d) => {
                /*]
                [|] Parse the file into a regular array.
                [*/
                let arr = d.split(/\r?\n/)
                /*]
                [|]
                [*/
                resolve(arr)
            })
            .catch(e => {
                resolve(e)
            })
    })
}
/*]
[|]
[*/
module.exports = {
    make_adverbs_array
}
/*]
[E] END
[*/

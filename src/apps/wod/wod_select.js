const jsonfile = require('jsonfile')
/*]
[|]
[*/
module.exports = () => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile('./wods.json')
            .then((data) => {
                console.log(data)
            })
            .catch((e) => {
                reject({
                    msg: 'Failed during WOD select',
                    err: e
                })
            })
    })
}
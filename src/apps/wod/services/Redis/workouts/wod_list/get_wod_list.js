const path = require('path')
const fileName = path.basename(__filename)
/*]
[|]
[*/
module.exports = (client) => {
    return new Promise((resolve, reject) => {
        client.get('wod_list', (err, res) => {
            if (!err) {
                resolve(res)
            } else {
                reject({
                    msg: 'Failed to get "wod_list" from redis',
                    filename: fileName,
                    err: err
                })
            }
        })
    })
}
/*]
[E] END
[*/

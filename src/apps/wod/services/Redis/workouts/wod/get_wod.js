const path = require('path')
const _filename = path.basename(__filename)
const createClient = require('../../client')
/*]
[|]
[*/
module.exports = (client) => {
    return new Promise((resolve, reject) => {
        Promise.resolve()
            .then(() => {
                if (typeof client === 'undefined') {
                    return createClient()
                } else {
                    return client
                }
            })
            .then((client) => {
                /*]
                [|] TODO|AW:
                [|] I get the feeling that this string should be a config var
                [|] since a typo will trigger a fucking actual nightmare.
                [*/
                client.get('active_wod', (err, res) => {
                    if (!err) {
                        resolve(res)
                    } else {
                        reject({
                            msg: 'Failed to get "active_wod" from redis',
                            filename: _filename,
                            err: err
                        })
                    }
                })
            })
            .catch((e) => {
                reject({
                    msg: 'failed to get active_wod from redis',
                    filename: _filename,
                    err: e
                })
            })
    })
}
/*]
[E] END
[*/

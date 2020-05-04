/*]
|| ----------------------------------------------------------- ||
    CREATE REDIS CLIENT
    ----------------------------------------------------------
    This is the initial part of a promise chain for carrying
    out a redis operation.  Create the client first, then
    begin conducting queries and what not.
    ----------------------------------------------------------
    Born On:    4.May.2020
    Author:     Alex Wilson
|| ----------------------------------------------------------- ||
[*/
const redis = require('redis')
/*]
[|]
[*/
module.exports = () => {
    return new Promise((resolve) => {
        let client
        /*]
        [|] Create client depending on process env
        [*/
        if (typeof process.env.REDIS_URL === 'undefined') {
            client = redis.createClient()
        } else {
            client = redis.createClient(process.env.REDIS_URL)
        }
        /*]
        [|]
        [*/
        resolve(client)
    })
}
/*]
[E] END
[*/

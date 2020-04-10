/*]
|| ----------------------------------------------------------- ||
    PORTFOLION APPLICATION SERVER
    ----------------------------------------------------------
    Node.js application server to do all sorts of weird little
    tasks that I will end up adding to this thing.
    ----------------------------------------------------------
    Born On:    10.Apr.2020
    Author:     Alex Wilson
|| ----------------------------------------------------------- ||
[*/
const express = require('express')
const path = require('path')
/*]
[|] --------------------------------------------------------- ||
[|]        Globals
[|] --------------------------------------------------------- ||
[*/
const port = process.env.PORT || 5000
/*]
[|]
[*/
const app = express()
app.use(express.static(path.join(__dirname, '../vue_front_end/dist/index.html')))
/*]
[|] --------------------------------------------------------- ||
[|]        Configure Routers
[|] --------------------------------------------------------- ||
[*/
/*]
[|] --------------------------------------------------------- ||
[|]        Configure Application Level Routes
[|] --------------------------------------------------------- ||
[*/
app.get('/', (req, res) => {
    res.send('./index.html')
})
/*]
[|]
[*/
app.listen(port, () => {
    console.log(`Portfolio application server running on port: ${port}`)
})
/*]
[E] END
[*/

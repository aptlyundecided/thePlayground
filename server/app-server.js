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
const helmet = require('helmet')
/*]
[|] --------------------------------------------------------- ||
[|]        Globals
[|] --------------------------------------------------------- ||
[*/
const port = process.env.PORT || 5000
const app = express()
/*]
[|] --------------------------------------------------------- ||
[|]        App Modules
[|] --------------------------------------------------------- ||
[*/
const WOD = require('../src/apps/wod/module')
WOD.start()
/*]
[|] --------------------------------------------------------- ||
[|]        Import Routers
[|] --------------------------------------------------------- ||
[*/
const WOD_router = require('./routes/wod')
/*]
[|] --------------------------------------------------------- ||
[|]        Configure Application and Routers
[|] --------------------------------------------------------- ||
[*/
app.use(helmet())
app.use(express.static(path.join(__dirname, '../src/vue_front_end/dist/')))
/*]
[|]
[*/
app.use('/wod', WOD_router)
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

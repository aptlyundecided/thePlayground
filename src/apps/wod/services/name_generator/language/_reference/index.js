const formed_date = require('./formed_date')
const generator = require('./name_generator')
const genre = require('./genre')
const hometown = require('./hometown')
/*]
[|]
[*/
module.exports = {
    formed_date,
    hometown,
    genre,
    make_name: generator.make_name,
    types: generator.types
}
/*]
[|] END
[*/

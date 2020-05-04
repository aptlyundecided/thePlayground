const name_generator = require('./name_generator')


for (let i = 0; i < 100; i += 1) {
    name_generator.make_name()
        .then((d) => {
            console.log(d)
        })
        .catch(e => {
            console.log(e)
        })
}
/*]
[E] END
[*/

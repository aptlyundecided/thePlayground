function random_int (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
/*]
[|]
[*/
function choose_formed_date () {
    let day = random_int(1, 31)
    let month = random_int(1, 13)
    let year = random_int(1979, 2019)
    /*]
    [|]
    [*/
    if (month === 2) {
        if (day > 28) {
            let diff = random_int(1, 4)
            day = day - diff
        }
    }
    /*]
    [|]
    [*/
    return `${month}/${day}/${year}`
}
/*]
[|]
[*/
module.exports = choose_formed_date
/*]
[|] END
[*/

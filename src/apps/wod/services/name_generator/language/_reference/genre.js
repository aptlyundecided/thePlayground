function random_int (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
/*]
[|]
[*/
function random_genre () {
    let genres = [
        'Blues',
        'Ambient Electronica',
        'Rock',
        'Pop',
        'Techno',
        'Funk',
        'Hip Hop',
        'Rap',
        'Folk',
        'Indie Folk',
        'Indie Rock',
        'Jazz',
        'Country',
        'Classical',
        'Classical Orchestra',
        'Punk Rock',
        'Spoken Word',
        'Dubstep',
        'Reggae',
        'Soul',
        'Rhythm and Blues',
        'Bluegrass',
        'Electronic Dance Music',
        'metal',
        'Nu Metal',
        'heavy metal',
        '80s metal'
    ]
    /*]
    [|]
    [*/
    return genres[random_int(1, genres.length)]
}
/*]
[|]
[*/
module.exports = random_genre
/*]
[|] END
[*/

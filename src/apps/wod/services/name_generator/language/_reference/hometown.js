function random_int (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}
/*]
[|]
[*/
function hometown () {
    let hometown_list = [
        'greenville, sc',
        'boston, ma',
        'Austin, TX',
        'New York City, NY',
        'Chicago, IL',
        'Nashville, TN',
        'Memphis, TN',
        'Asheville, NC',
        'Houston, TX',
        'Phoenix, AZ',
        'Juno, AK',
        'Huntsville, AL',
        'Little Rock, AR',
        'San Francisco, CA',
        'Denver, CO',
        'Newark, DE',
        'Miami, FL',
        'Atlanta, GA',
        'Honolulu, HI',
        'Boise, ID',
        'Indianapolis, IN',
        'Des Moines, IA',
        'Kansas City, Kansas',
        'Lexington, KY',
        'Baton Rouge, LA',
        'Portland, ME',
        'Detroit, MI',
        'Minneapolis, MN',
        'Biloxi, MS',
        'St. Louis, MO',
        'Helena, MT',
        'Lincoln, NE',
        'Reno, NV',
        'Nashua, NH',
        'Trenton, NJ',
        'Albequerque, NM',
        'Fargo, ND',
        'Cleveland, OH',
        'Lawton, OK',
        'Portland, OR',
        'Philadelphia, PA',
        'Newport, RI',
        'Pierre, SD',
        'Salt Lake City, UT',
        'Killinton, VT',
        'Richmond, VA',
        'Seattle, WA',
        'Charleston, WV',
        'Green Bay, WI',
        'Cody, WY'
    ]
    /*]
    [|]
    [*/
    return hometown_list[random_int(1, hometown_list.length)]
}
/*]
[|]
[*/
module.exports = hometown
/*]
[|] END
[*/

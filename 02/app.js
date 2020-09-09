const calendarJS = {
    'ES1': '1997-06',
    'ES2': '1998-06',
    'ES3': '1999-12',
    'ES4': null,
    'ES5': '2009-12',
    'ES6': '2015-06',
    'ES7': '2016-06',
    'ES8': '2017-06',
    'ES9': '2018-06',
    //testing more versions
    'ES10': null,
    'ES11': 'future'
}


for(version in calendarJS) {
    if (calendarJS[version] === null) {
    console.log(`${version} nie zostało wydane.`)
    continue
    }
    console.log(`${version} wydano w terminie ${calendarJS[version]}.`)
}
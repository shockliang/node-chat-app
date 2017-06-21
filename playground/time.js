const moment = require('moment');

var date = moment();
// date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do,YYYY'));

// 10:35 am
console.log(date.format('H:m a'));
// 06:01 am
console.log(date.format('HH:mm a'));
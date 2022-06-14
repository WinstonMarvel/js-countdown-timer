// const moment = require('moment')
//
// class TimeoutClockPlugin {
//
//     constructor(htmlReferences) {
//
//     }
//
//     getTimeRemaining(endtime) {
//         const timeRemaining = Date.parse(endtime) - Date.parse(new Date());
//         if(timeRemaining < 1) {
//             return {
//                 'total': 0,
//                 'days': 0,
//                 'hours': 0,
//                 'minutes': 0,
//                 'seconds': 0
//             }
//         }
//         const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);
//         const minutesRemaining = Math.floor((timeRemaining / 1000 / 60) % 60);
//         const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
//         const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//         return {
//             'total': timeRemaining,
//             'days': daysRemaining,
//             'hours': hoursRemaining,
//             'minutes': minutesRemaining,
//             'seconds': secondsRemaining
//         }
//     }
//
//     _updateClock() {
//         const t = that.getTimeRemaining(endtime);
//         daysSpan.innerHTML = t.days;
//         hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//         minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//         secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
//
//         if (t.total <= 0) {
//             clearInterval(timeinterval);
//         }
//     }
//
//     initializeClock(id, endtime) {
//         const clock = document.getElementById(id);
//         const daysSpan = clock.querySelector('.days');
//         const hoursSpan = clock.querySelector('.hours');
//         const minutesSpan = clock.querySelector('.minutes');
//         const secondsSpan = clock.querySelector('.seconds');
//         this._updateClock();
//         const timeinterval = setInterval(this._updateClock, 1000);
//     }
// };
//
//
// const timeoutClockPlugin = {
//
//
// }
//
// const deadline = new Date(Date.parse(new Date()));
// timeoutClockPlugin.initializeClock('clockdiv', deadline)
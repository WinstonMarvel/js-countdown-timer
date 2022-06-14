const moment = require('moment')

class TimerUtils{
    static getTimeUntilWeeklyEventInMilliseconds(repeatedIsoDay, repeatedEventTimeUTC, startTimeStamp = new Date()) {
        const start = startTimeStamp.utcOffset(0);
        const currentDay = start.isoWeekday();
        let differenceInDays = repeatedIsoDay - currentDay;
        if(differenceInDays < 0) {
            differenceInDays += 7
        }
        const targetDay = start.clone().add(differenceInDays, 'days');
        targetDay.set({'hour': 0, 'minute': 0, 'second': 0});
        const targetTimestamp = targetDay.set(moment(repeatedEventTimeUTC, 'HH:mm:ss'));
        return targetTimestamp.diff(start);
    }
}

module.exports = {TimerUtils};
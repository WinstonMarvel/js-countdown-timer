const moment = require('moment');
const chai = require('chai')
const expect = chai.expect;
const TimerUtils = require('../main').TimerUtils;

describe('Should test countdown timer functions', () => {
    it('should return the time of now until next Sunday in milliseconds', () => {
        const testCases = [
            {
                startTimeStamp: moment('2021-02-13 09:30:00Z'), // Saturday
                repeatedIsoDay: 4,
                output: 5 * 24 * 60 * 60 * 1000,
            },
            {
                startTimeStamp: moment('2021-02-13 09:30:00Z'),
                repeatedIsoDay: 7,
                output: 24 * 60 * 60 * 1000,
            },
            {
                startTimeStamp: moment('2021-02-13 00:30:00Z'),
                repeatedIsoDay: 6,
                output: 9 * 60 * 60 * 1000,
            }
        ];
        for(let test of testCases){
            expect(TimerUtils.getTimeUntilWeeklyEventInMilliseconds(test.repeatedIsoDay, '09:30:00', test.startTimeStamp)).to.equal(test.output); //14th Feb 2020 is a Sunday
        }
    })
});
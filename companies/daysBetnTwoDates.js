/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */


 var daysBetweenDates = function(date1, date2) {
    let millisecondsInBetn = Math.abs(new Date(date1).getTime() - new Date(date2).getTime());

    return Math.round(millisecondsInBetn/(1000*60*60*24))
};

console.log(daysBetweenDates("2019-06-29", "2019-06-30"));

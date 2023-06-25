export function isTimeDifferenceGreaterThanHours(date1: Date, date2: Date, hours: number) {
    const hoursInMilliseconds = hours * 60 * 60 * 1000;

    const timeDifference = Math.abs(date2.getTime() - date1.getTime());

    return timeDifference > hoursInMilliseconds;
}

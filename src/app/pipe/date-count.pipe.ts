import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let today: Date = new Date();

    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      today.getHours(),
      today.getMinutes(),
      today.getSeconds()
    );


    var startDate:any = new Date(value.substring(0,10))


    var secondsDifference = Math.abs(todayWithNoTime - startDate);


    const secondsInYear = 31184999;
    const secondsInMonth = 2592999;
    const secondsInHours = 3600;
    const secondsInMinutes = 60;
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day

    var dateDifferenceSeconds = secondsDifference * 0.001; //converts milliseconds to seconds


    var countYears = Math.trunc(dateDifferenceSeconds / secondsInYear);
    var countMonths = Math.trunc(dateDifferenceSeconds / secondsInMonth);
    var dateCounter = Math.trunc(dateDifferenceSeconds / secondsInDay);
    var hoursCounter = Math.trunc(dateDifferenceSeconds / secondsInHours);
    var minutesCounter = Math.trunc(dateDifferenceSeconds / secondsInMinutes);
    var countSeconds = Math.trunc(dateDifferenceSeconds)


    if (countYears >= 1) {
      return countYears + " year(s) ago";
    } else if (countMonths >= 1) {
      return countMonths + " month(s) ago";
    } else if (dateCounter >= 1) {
      return dateCounter + " day(s) ago";
    } else if (dateCounter < 1 && hoursCounter >= 1) {
      return hoursCounter + " hour(s) ago";
    } else if (hoursCounter < 1 && minutesCounter >= 1) {
      return minutesCounter + " minute(s) ago";
    } else {
      return countSeconds + " second(s) ago";
    }
  }
}



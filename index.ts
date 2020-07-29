import { Observable, interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';


//its cancles the old subscribtion
//Tutorial - https://www.youtube.com/watch?v=6lKoLwGlglE

// function buySugarInBulk() {
//   return new Observable((observer) => {
//     observer.next('Suger purchase in bulk');
//   })
// }

// function getSugerInQuantity(quantity) {
//   return new Observable((observer) => {
//     observer.next('Suger of '+ quantity + ' is here for you!!!');
//   })
// }

// function getSugerfromShop(quantity) {
//   return buySugarInBulk().pipe(switchMap(()=> {
//     return getSugerInQuantity(quantity);
//   }))
// }

// getSugerfromShop('1kg').subscribe((data) => {
//   console.log(data);
// })

var button = document.getElementById('myButton');

var obs1 =  fromEvent(button, 'click')
  .pipe(
    // restart counter on every click
    switchMap((data) => {
      return getInterval();
    })
  )
  .subscribe((value) => {
     console.log(value)
  });


function getInterval(): Observable<any> {
  return interval(1000);
}



// document.getElementById('myButton').addEventListener('click', () => {
//   getInterval().subscribe((data) => {
//     console.log(data);
//   })
// });


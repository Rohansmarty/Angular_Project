import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, concatMap, forkJoin, from, interval, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [
    CommonModule
  ],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  nums!: Observable<any>;

  // ngOnInit() {
  //    this.demo1();
  //   this.demo2();
  // }

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    // this.forkjoinDemo();
     this.mergeMapDemo();
    //this.concatMapDemo();
  }

  demo1() {
    let publisher1 = new Observable((observer) => {
      observer.next('AAAAA');
      observer.next('BBBBB');
      observer.next('CCCCC');
      observer.next('DDDDD');
      observer.complete();
    });
    publisher1.subscribe({
      next: (response) => { console.log('Next....', response) }, // 4 times
      error: (err) => { console.log(err) },
      complete: () => { console.log('All Data Received') }, // 1
    });
  }

  demo2() {
    let cars = ['Tata', 'Hundai', 'Toyota', 'Honda'];
    let carsObservable = from(cars);
    carsObservable.subscribe(val => console.log(val));

    // this.nums = interval(1000);
    // this.nums.subscribe(val => console.log(val));
  }

  forkjoinDemo() {
    let userIds = [1, 3, 5];
    let requests = userIds.map(userId => { // requests = [observable1,observable2,observable3]
      return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    });
    forkJoin(requests).subscribe({
      next: (response) => { console.log('Next....', response) },
      error: (err) => { console.log(err) },
      complete: () => { console.log('All Data Received') },
    });
  }

  mergeMapDemo() {
    let productPublisher = of(1, 2, 3, 4, 5); // of() returns observable
    productPublisher.pipe(mergeMap(productId => {
      return this.httpClient.get(`https://fakestoreapi.com/products/${productId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }

  concatMapDemo() {
    let productPublisher = of(1, 2, 3, 4, 5); // of() returns observable
    productPublisher.pipe(concatMap(productId => {
      return this.httpClient.get(`https://fakestoreapi.com/products/${productId}`)
    })).subscribe(cartResponse => {
      console.log(cartResponse)
    });
  }



}

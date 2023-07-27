import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, DoCheck, OnDestroy {
  count: number = 0;

  ngOnInit() { // First render
    console.log("First render");

    setTimeout(() => {
      this.increment();
    }, 5000);


    setInterval(() => {
      this.increment();
    }, 1000);
  }

  ngDoCheck() { // Re-render
    console.log("Changes performed (re-render)");
    if (this.count >= 10) {
      this.count = 0;
    }
  }

  ngOnDestroy() {// Last render (destroy)
    console.log("Component destroyed");
  }

  increment() {
    this.count = this.count + 1; // potential re-render
  }
}

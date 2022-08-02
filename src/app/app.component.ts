import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-store';

  person = {
    age: 21,
    name: 'John Doe'
  };

  onScroll(event: Event): void {
    const scroll = event.target as HTMLElement;
    console.log(scroll.scrollTop);
  }
}

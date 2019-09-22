import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Anna';

  constructor() {
    this.changeName('Amy')
  }

  changeName(name:string) {
    this.name = name
  }
}

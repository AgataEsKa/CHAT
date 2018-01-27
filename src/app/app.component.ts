import { Component } from '@angular/core';
import { HeaderComponent} from './components/header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pawel';

  hello(age = 20){
    return `to jest moja appka ${this.title} i mam lat ${age}`
  }
}

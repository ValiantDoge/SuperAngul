import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // template:  `
  //     <h1>Hello {{title}}!</h1>
  //     <p>Hello</p>
  // `,
  // styles:[`
  //   p{
  //     background-color:red;
  //   }`]
})

export class AppComponent {
  title = 'SuperAngul';
}

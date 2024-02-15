import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Carlitos"
  title = 'Title Teste'
  userData = {
    email: "Carlos@carlos.com",
    role: "admin"
  }
}

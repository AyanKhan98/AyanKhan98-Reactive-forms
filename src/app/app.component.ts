import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm= new FormGroup(
    {
      userName: new FormControl('Ayan'),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }
  );
}

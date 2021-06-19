import { Component } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { forbiddenFunctionName } from './shared/userValidator';
import { passWordValidator } from './shared/passwordValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get UserName()
  {
    return this.registrationForm.get('userName');
  }

  constructor(private fb: FormBuilder){}

  registrationForm= this.fb.group({
    userName:['Ayan',[Validators.required,Validators.minLength(3),forbiddenFunctionName]],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      code:['']
    })
  },{validator: passWordValidator});
  /*registrationForm= new FormGroup(
    {
      userName: new FormControl('Ayan'),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      address: new FormGroup({
        city:new FormControl(''),
        state:new FormControl(''),
        code: new FormControl('')
      })
    }
  );*/

  loadApiData()
  {
    /*this.registrationForm.setValue({
      userName: 'Ayan',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city:'New York',
        state:'New Jersey',
        code: '10011'
    }
  }); Cant add only few datas*/
  this.registrationForm.patchValue({
    userName: 'Ayan',
      password: 'test',
      confirmPassword: 'test'
  });
}
}

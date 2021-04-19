import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/common/must-match-validator';

@Component({
  selector: 'dbf1-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUSerComponent implements OnInit {
  registerForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', Validators.required]
  }, {
    validator: MustMatch('password' , 'repassword')}
  );
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onReset() {
     this.submitted = false;
     this.registerForm.reset();
   }

}

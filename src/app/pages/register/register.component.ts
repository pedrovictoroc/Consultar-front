import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  shoulDisplayPassword: boolean = false;
  shoulDisplayConfirmPassword: boolean = false;
  eyeIconClosed: string = "../../../assets/eye-closed.svg"
  eyeIconOpen: string = "../../../assets/eye-open.svg"
  registerForm: FormGroup = this.formBuilder.group({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  setEyeIconPassword(){
    this.shoulDisplayPassword = !this.shoulDisplayPassword
  }

  setEyeIconConfirmPassword(){
    this.shoulDisplayConfirmPassword = !this.shoulDisplayConfirmPassword
  }

  getEyeIconPassword(){
    return this.shoulDisplayPassword ? this.eyeIconOpen : this.eyeIconClosed
  }

  getEyeIconConfirmPassword(){
    return this.shoulDisplayConfirmPassword ? this.eyeIconOpen : this.eyeIconClosed
  }

  onSubmit(){
    this.router.navigate(['home'])
  }

  redirectToLogin(){
    this.router.navigate(['login'])
  }

}

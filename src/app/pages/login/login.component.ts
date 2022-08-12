import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  eyeIcon: string = "../../../assets/eye-closed.svg"
  constructor() { }

  ngOnInit(): void {
  }

}

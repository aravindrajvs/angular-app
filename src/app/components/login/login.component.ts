import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/service/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Router: Router,
    private router: Router, private _AuthService: AuthService) { }

  @ViewChild('loginForm') loginForm: NgForm;

  login: Login = {} as Login;

  ngOnInit(): void {


  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._AuthService.validate(this.login).subscribe(res => {
        this._Router.navigate(['/welcome', res.id]);
      })
    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCreate } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _Router: Router,
    private router: Router, private _UserService: UserService) { }

  @ViewChild('userForm') userForm: NgForm;

  user: UserCreate = {} as UserCreate;

  ngOnInit(): void {


  }

  onSubmit() {
    if (this.userForm.valid) {
      this._UserService.createUser(this.user).subscribe(res => {
        this._Router.navigate(['/login']);
      })
    }
  }
  
  

}

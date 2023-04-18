import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _Router:Router, private userService: UserService, private route: ActivatedRoute,
    ) { }

  userId: number;

  user: User = {} as User;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id'); 
      this.loadUser(this.userId);
    });
  }

  loadUser(userId:number){
    this.userService.getUserById(userId).subscribe(data => {
      this.user = data;
    });
  }

  logout(){

    this._Router.navigate(['/login'])
  }
}

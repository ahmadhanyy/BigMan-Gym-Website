import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Interfaces/iuser';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  account!: IUser
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.account = data;
    });
  }

}

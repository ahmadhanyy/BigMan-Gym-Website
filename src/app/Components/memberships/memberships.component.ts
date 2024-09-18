import { Component, OnInit } from '@angular/core';
import { IMembership } from '../../Interfaces/imembership';
import { MembershipService } from '../../Services/membership.service';

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.scss'
})
export class MembershipsComponent implements OnInit {
  membershipsList: IMembership[] = [];

  constructor(private memService: MembershipService) {}

  ngOnInit(): void {
    //this.memService.getMemberships().subscribe((data) => {
    //  this.membershipsList = data;
    //});
    this.membershipsList = this.memService.getMemberships();
  }

}

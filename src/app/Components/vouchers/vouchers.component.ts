import { Component, OnInit } from '@angular/core';
import { VoucherService } from '../../Services/voucher.service';
import { UserService } from '../../Services/user.service';
import { IVoucher } from '../../Interfaces/ivoucher';
import { IUser } from '../../Interfaces/iuser';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrl: './vouchers.component.scss'
})
export class VouchersComponent implements OnInit {
  user!: IUser;
  usedVouchers: IVoucher[] = [];
  activeVouchers: IVoucher[] = [];
  showActiveSection: boolean = true;

  constructor(private voucherService: VoucherService, private userService: UserService) {}

  ngOnInit(): void {
    //this.user = this.userService.getUser();
    //this.usedVouchers = this.voucherService.getUserUsedVouchers(this.user.id);
    //this.activeVouchers = this.voucherService.getUserActiveVouchers(this.user.id);
  }

  showActiveVouchers(): void {
    this.showActiveSection = true;
  }

  showUsedVouchers(): void {
    this.showActiveSection = false;
  }
}

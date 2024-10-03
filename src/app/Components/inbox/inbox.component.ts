import { Component, OnInit } from '@angular/core';
import { IMessage } from '../../Interfaces/imessage';
import { MessageService } from '../../Services/message.service';
import { IUser } from '../../Interfaces/iuser';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss'
})
export class InboxComponent implements OnInit {
  user!: IUser;
  messages: IMessage[] = [];

  constructor(private messageService: MessageService, private userService: UserService) {}

  ngOnInit(): void {
    //this.user = this.userService.getUser();
    //this.messages = this.messageService.getUserMessages(this.user.id);
  }

}

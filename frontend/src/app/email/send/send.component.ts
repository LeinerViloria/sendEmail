import { Component, OnInit } from '@angular/core';
import { SendEmailService } from '../../services/send-email.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css'],
})
export class SendComponent implements OnInit {
  public content: any;
  private message: string = '';
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private durationInSecond: number = 3000;

  constructor(private _sendEmail: SendEmailService, private _snackBar: MatSnackBar) {
    this.content = {};
  }

  sendEmail(){

  }

  ngOnInit(): void {}
}

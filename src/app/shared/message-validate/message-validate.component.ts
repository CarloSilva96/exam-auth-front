import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-msg-validate',
  templateUrl: './message-validate.component.html',
  styleUrls: ['./message-validate.component.css']
})
export class MessageValidateComponent implements OnInit {
  @Input() msgValidate!: string;

  @Input() classSend!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

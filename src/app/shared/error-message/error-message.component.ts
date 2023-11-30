import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {
@Input()err:any|null=null;
@Input()field:any|null=null;
}

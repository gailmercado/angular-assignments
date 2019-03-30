import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  message = "Opps! Error message here"
}

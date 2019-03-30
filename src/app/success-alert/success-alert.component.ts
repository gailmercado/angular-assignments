import { Component } from "@angular/core";

@Component({
    selector: 'basic-app-success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
    message = "Congratulations! Success message here.";
}
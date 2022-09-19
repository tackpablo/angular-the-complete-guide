import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styles: [
    `
      .alert-red {
        padding: 10px;
        border: 1px solid pink;
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent {}

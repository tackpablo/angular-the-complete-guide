import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .white-text {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showDetails = false;
  buttonClicks = [];

  onCreateDetails() {
    this.showDetails = !this.showDetails;
    this.buttonClicks.push(this.buttonClicks.length + 1);
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  username: string = "";

  constructor() {}

  onReset() {
    this.username = "";
  }

  ngOnInit(): void {}
}

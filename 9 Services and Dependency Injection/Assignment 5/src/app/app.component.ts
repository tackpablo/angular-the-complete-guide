import { Component, EventEmitter, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UsersService],
})
export class AppComponent implements OnInit {
  active: string[];
  inactive: string[];
  activeCounter: number;
  inactiveCounter: number;

  constructor(
    private usersService: UsersService,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.active = this.usersService.activeUsers;
    this.inactive = this.usersService.inactiveUsers;
    this.activeCounter = this.counterService.activeToInactiveCounter;
    this.inactiveCounter = this.counterService.inactiveToActiveCounter;
  }
}

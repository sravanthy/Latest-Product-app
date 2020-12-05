import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  date;
  toggle: boolean = true;
  constructor() {}

  ngOnInit() {
    this.date = Date.now();
  }

  format() {
    return this.toggle ? "shortDate" : "fullDate";
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
}

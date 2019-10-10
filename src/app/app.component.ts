import { Component, OnInit } from "@angular/core";
import "jquery";
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

  ngOnInit() {
    $.getScript("assets/js/webflow.e465d9327.js");
  }
}

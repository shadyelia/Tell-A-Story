import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  id: number;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(res => {
      this.id = res["id"];
    });
  }
}

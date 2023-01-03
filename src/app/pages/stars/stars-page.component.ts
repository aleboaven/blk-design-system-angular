import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-stars",
  templateUrl: "stars-page.component.html"
})
export class StarsComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("stars-page");

    document.querySelector('video').play()
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("stars-page");
  }
}

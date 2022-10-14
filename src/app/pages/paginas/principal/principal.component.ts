import { Component, OnInit, OnDestroy } from '@angular/core';
import noUiSlider from "nouislider";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  // styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit, OnDestroy {
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

  ngOnInit(): void {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("principal-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("principal-page");
  }

}

import { Component, OnInit } from '@angular/core';
import {SvgImages} from "../../image/image-svg/image-svg.component";

@Component({
  selector: 'app-page-navigate',
  templateUrl: './page-navigate.component.html',
  styleUrls: ['./page-navigate.component.scss']
})
export class PageNavigateComponent implements OnInit {
  public svgImages = SvgImages;
  constructor() { }

  ngOnInit(): void {
  }

}

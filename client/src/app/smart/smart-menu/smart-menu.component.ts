import { Component, OnInit } from '@angular/core';
import {SvgImages} from "../../image/image-svg/image-svg.component";

@Component({
  selector: 'app-smart-menu',
  templateUrl: './smart-menu.component.html',
  styleUrls: ['./smart-menu.component.scss']
})
export class SmartMenuComponent implements OnInit {
  public svgImages = SvgImages;
  constructor() { }

  ngOnInit(): void {
  }

}

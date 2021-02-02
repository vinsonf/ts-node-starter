import { Component, OnInit } from '@angular/core';
import {SvgImages} from "../../image/image-svg/image-svg.component";

@Component({
  selector: 'app-smart-header',
  templateUrl: './smart-header.component.html',
  styleUrls: ['./smart-header.component.scss']
})
export class SmartHeaderComponent implements OnInit {
  public svgImages = SvgImages;
  constructor() { }

  ngOnInit(): void {
  }

}

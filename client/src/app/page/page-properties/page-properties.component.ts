import { Component, OnInit } from '@angular/core';
import {SvgImages} from "../../image/image-svg/image-svg.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-page-properties',
  templateUrl: './page-properties.component.html',
  styleUrls: ['./page-properties.component.scss']
})
export class PagePropertiesComponent implements OnInit {
  public svgImages = SvgImages;
  public properties$: Observable<any>;
  constructor() { }

  ngOnInit(): void {
  }

}

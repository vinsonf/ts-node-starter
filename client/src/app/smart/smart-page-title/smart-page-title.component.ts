import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SvgImages} from "../../image/image-svg/image-svg.component";
import {ActivatedRoute} from "@angular/router";
import {RoutingService} from "../../services/routing.service";

@Component({
  selector: 'app-smart-page-title',
  templateUrl: './smart-page-title.component.html',
  styleUrls: ['./smart-page-title.component.scss']
})
export class SmartPageTitleComponent implements OnInit {
  @Input() public showAddButton = false;
  @Input() public viewPath = '';
  @Output() public emitterAddNew: EventEmitter<null> = new EventEmitter<null>();

  public title = 'Navigate';
  public svgImages = SvgImages;
  public data$: any;
  constructor(
    private route: ActivatedRoute,
    private routingService: RoutingService,
  ) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.data.title;
    this.viewPath = this.route.snapshot.data.viewPath;
    console.log('viewPath', this.route.snapshot.data['title']);
    this.data$ = this.routingService.data$;
  }

  public addNew() {
    console.log('add new')
    this.routingService.goToNewEntity()
  }
}

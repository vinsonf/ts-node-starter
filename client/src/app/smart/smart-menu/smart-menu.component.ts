import { Component, OnInit } from '@angular/core';
import {SvgImages} from "../../image/image-svg/image-svg.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-smart-menu',
  templateUrl: './smart-menu.component.html',
  styleUrls: ['./smart-menu.component.scss']
})
export class SmartMenuComponent implements OnInit {
  public svgImages = SvgImages;

  public linkRoutes: any = [
    {route: ['dashboard'], text: 'Main', icon: SvgImages.homeIcon },
    {route: ['navigate', 'properties'], text: 'Properties', icon: SvgImages.propertiesIcon },
    {route: ['messages'], text: 'Messages', icon: SvgImages.messagesIcon },
    {route: ['lms'], text: 'Resource Center', icon: SvgImages.lmsIcon},
    {route: ['my-profile'], text: 'Profile', icon: SvgImages.profileIcon },
    {route: ['checklists'], text: 'Checklists', icon: SvgImages.checklistsIcon },
    // {route: ['notifications'], text: 'Notifications', icon: SvgImages.notificationsIcon },
    {route: ['departments'], text: 'Departments', icon: SvgImages.departmentsIcon },
    {route: ['documents'], text: 'User Documents', icon: SvgImages.usersDocumentsIcon },
    {route: ['navigate', 'users'], text: 'Users', icon: SvgImages.usersIcon },
    {route: ['audit-log'], text: 'Audit Log', icon: SvgImages.auditLogIcon },
    {route: ['employees'], text: 'Employees', icon: SvgImages.employeesIcon },
    {route: [''], text: 'Log Out', icon: SvgImages.logoutIcon }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public menuNavigate(link: any) {
    if (link.text === 'Log Out') {
      this.router.navigate(['']);
    } else {
      console.log('link', link)
      this.router.navigate(link.route);
    }
  }

}

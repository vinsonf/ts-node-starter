import {Component, Input, OnInit} from '@angular/core';
export enum SvgImages {
  fullLogo = 'full-logo',
  messagesIcon = 'messages-icon',
  lmsIcon = 'lms-icon',
  profileIcon = 'profile-icon',
  checklistsIcon = 'checklists-icon',
  notificationsIcon = 'notifications-icon',
  departmentsIcon = 'departments-icon',
  usersIcon = 'users-icon',
  usersDocumentsIcon = 'users-documents-icon',
  auditLogIcon = 'audit-log-icon',
  employeesIcon = 'employees-icon',
  propertiesIcon = 'properties-icon',
  bellIcon = 'bell-icon',
  mailIcon = 'mail-icons',
  logoutIcon = 'log-out-icon',
  homeIcon = 'home-icon',
  smallHomeIcon = 'small-home-icon',
  closeIcon = 'close-icon',
  addIcon = 'add-icon',
  floatingLogo = 'floating-logo',
  circleLogo = 'circle-logo',
  editIcon = 'edit-icon',
  trashIcon = 'trash-icon',
  binIcon = 'bin-icon',
  porpertyGroupIcon = 'property-group-icon',
  smallEditIcon = 'small-edit-icon',
  smallTrashIcon = 'small-trash-icon',
}
@Component({
  selector: 'app-image-svg',
  templateUrl: './image-svg.component.html',
  styleUrls: ['./image-svg.component.scss']
})
export class ImageSvgComponent implements OnInit {
  public svgImages = SvgImages;

  @Input() public image = '';

  constructor() { }

  ngOnInit(): void {
  }

  public is(name: string) {
    return this.image.toLowerCase() === name.toLowerCase();
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSvgComponent } from './image-svg/image-svg.component';



@NgModule({
  declarations: [ImageSvgComponent],
  exports: [
    ImageSvgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageModule { }

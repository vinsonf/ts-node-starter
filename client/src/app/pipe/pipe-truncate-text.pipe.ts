import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTruncateText'
})
export class PipeTruncateTextPipe implements PipeTransform {


  transform(value: string, length: number): string {
    const biggestWord = 50;
    const elipses = "...";
    if(typeof value === "undefined") return value;
    if(value.length <= length) return value;
    if(length < elipses.length) return '';
    let truncatedText = value.slice(0, length + biggestWord);

    while (truncatedText.length > length - elipses.length) {
      let lastSpace = truncatedText.lastIndexOf(" ");
      if(lastSpace === -1) {
        truncatedText = ""
        break;
      }
      truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/,'');
    };
    return truncatedText + elipses;
  }
}


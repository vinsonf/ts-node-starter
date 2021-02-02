import { Injectable } from '@angular/core';
import {PATTERNS} from "./consts/validation.patterns";

@Injectable({
  providedIn: 'root'
})
export class MaskService {
  constructor() {}

  public phoneFormat(s: string): string {
    let mutable = s;
    let testCount = '';
    switch (s.length) {
      case 1:
        mutable = mutable.replace(/[^0-9\-(]/g, '');
        if (mutable[0] !== '(') { mutable = '(' + mutable; }
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 1) { mutable = mutable.substring(0, 1); }
        break;
      case 2:
        mutable = mutable.replace(/[^0-9\-(]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 1) { mutable = mutable.substring(0, 1); }
        break;
      case 3:
        mutable = mutable.replace(/[^0-9\-(]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 2) { mutable = mutable.substring(0, 2); }
        break;
      case 4:
        mutable = mutable.replace(/[^0-9\-(]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 3) { mutable = mutable.substring(0, 3); }
        break;
      case 5:
        mutable = mutable.replace(/[^0-9\-()]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length === 4) { mutable = mutable.substring(0, 4) + ') ' + mutable.substring(4, 5); }
        break;
      case 6:
        mutable = mutable.replace(/[^0-9\-()]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length === 4) { mutable = mutable.substring(0, 5) + ' ' + mutable.substring(5, 6); }
        break;
      case 8:
        mutable = mutable.replace(/[^0-9\-()\s]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 5) { mutable = mutable.substring(0, 7); }
        break;
      case 9:
        mutable = mutable.replace(/[^0-9\-()\s]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 6) { mutable = mutable.substring(0, 8); }
        break;
      case 10:
        mutable = mutable.replace(/[^0-9\-()\s]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 7) {
          if (mutable[9] !== '-') { mutable = mutable.substring(0, 8); }
        } else {
          mutable = mutable.substring(0, 9) + '-' + mutable.substring(9, 10);
        }
        break;
      case 12:
        mutable = mutable.replace(/[^0-9\-()\s]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 8) { mutable = mutable.substring(0, 11); }
        break;
      case 13:
        mutable = mutable.replace(/[^0-9\-()\s]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 9) { mutable = mutable.substring(0, 12); }
        break;
      case 14:
        mutable = mutable.replace(/[^0-9\-()\s]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 10) { mutable = mutable.substring(0, 13); }
        break;
      case 15:
        mutable = mutable.substring(0, 14);
        break;
    }

    return mutable;
  }

  public phoneFormatInbound(s: string = ''): string {
    let mutable = s;
    let testCount = '';

    if (mutable.length === 7) {
      mutable = mutable.replace(/[^0-9\-()\s]/g, '');
      testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
      mutable = mutable.substring(0, 3) + '-' + mutable.substring(3, 7);
    }

    if (mutable.length === 10) {
      mutable = mutable.replace(/[^0-9\-()\s]/g, '');
      testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
      mutable = '(' + mutable.substring(0, 3) + ') ' + mutable.substring(3, 6) + '-' + mutable.substring(6, 10);
    }

    return mutable;
  }
  public zipCodeFormat(s: string): string {
    let mutable = s;
    let testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
    switch (s.length) {
      case 1:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 1) { mutable = mutable.substring(0, 0); }
        break;
      case 2:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 2) { mutable = mutable.substring(0, 1); }
        break;
      case 3:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 3) { mutable = mutable.substring(0, 2); }
        break;
      case 4:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 4) { mutable = mutable.substring(0, 3); }
        break;
      case 5:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 5) { mutable = mutable.substring(0, 4); }
        break;
      case 6:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length === 6) { mutable = mutable.substring(0, 5) + '-' + mutable.substring(5, 6); }
        break;
      case 7:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 6) { mutable = mutable.substring(0, 6); }
        break;
      case 8:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 7) { mutable = mutable.substring(0, 7); }
        break;
      case 9:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 8) { mutable = mutable.substring(0, 8); }
        break;
      case 10:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        if (testCount.length !== 9) { mutable = mutable.substring(0, 9); }
        break;
      case 11:
        mutable = mutable.substring(0, 10);
        break;
      default:
        mutable = mutable.replace(/[^0-9\-]/g, '');
        testCount = mutable.replace(PATTERNS.NON_DECIMAL_DIGITS, '');
        mutable = mutable.substring(0, 10);

    }
    return mutable;
  }
}

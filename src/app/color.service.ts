import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
private sendColour = new BehaviorSubject<string>('');
currentColor = this.sendColour.asObservable();
  constructor() { }

  sendColor(color: any ){
    var color1 = color
    this.sendColour.next(color1);
  }
}

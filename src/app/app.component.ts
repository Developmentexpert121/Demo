import { Component, OnInit } from '@angular/core';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo';
  showFiller = false;
  colorPick: string = '';
  public defaultColors: string[] = [
    'lightpink', 'red', 'orange',
    'yellow', 'green', 'blue', 'purple'
  ];

  constructor( private color: ColorService ){

  }
  ngOnInit(){
  }
  sendColor(color: any){
    this.color.sendColor(color);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CountService }      from '../../services/count.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  ngOnInit() {
  }

 constructor(private countService: CountService) {
    
  }
  
  getCount() {
    return this.countService.get();
  }
getlastoperation() {
    return this.countService.getlastoperation();
  }
  

}

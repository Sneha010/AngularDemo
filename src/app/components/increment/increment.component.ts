import { Component, OnInit } from '@angular/core';
import { CountService }      from '../../services/count.service';

@Component({
  selector: 'app-incerement',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncerementComponent implements OnInit {


  ngOnInit() {
    
  }

    constructor(private countService: CountService) { }
  
  incCount() {
    this.countService.increment();
    
  }


}

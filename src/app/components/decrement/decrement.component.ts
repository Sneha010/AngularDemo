import { Component, OnInit } from '@angular/core';
import { CountService }      from '../../services/count.service';

@Component({
  selector: 'app-decerement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecerementComponent implements OnInit {


  ngOnInit() {
  }



  constructor(private countService: CountService) { }

  decCount() {
    this.countService.decrement();
  }

}

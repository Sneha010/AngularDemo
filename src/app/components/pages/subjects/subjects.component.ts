import { Component } from '@angular/core';
import { CountService } from '../../../services/count.service';

@Component({
  selector: 'page-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [CountService]
})
export class SubjectsComponent {

}

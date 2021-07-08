import { Component, OnInit } from '@angular/core';
import { FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-timeline-details',
  templateUrl: './timeline-details.component.html',
  styleUrls: ['./timeline-details.component.css']
})
export class TimelineDetailsComponent implements OnInit {

  constructor(
   private formBuilder: FormBuilder,
   ) { }

  timelineForm = this.formBuilder.group({
    timelineName: '',
    timelineCategory: '',
    timelineCreationDate:'',
  });

   onSubmitTimeline(): void {
   this.timelineForm.reset();
  }

  cardForm = this.formBuilder.group({
    cardName: '',
    cardCreationDate: '',
    cardUrl:'',
    cardDescription:'',
  });

  onSubmitCard(): void {
    this.cardForm.reset();
  }

  ngOnInit(): void {
  }

}

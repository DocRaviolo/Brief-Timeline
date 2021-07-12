import { Component, OnInit } from '@angular/core';
import { FormBuilder} from "@angular/forms";
import {TimelinesListService} from "../timelines-list.service";

@Component({
  selector: 'app-timeline-details',
  templateUrl: './timeline-details.component.html',
  styleUrls: ['./timeline-details.component.css']
})
export class TimelineDetailsComponent implements OnInit {

  cardList= this.timelinesListService.getCardList(1);

  constructor(
   private formBuilder: FormBuilder,
   private timelinesListService: TimelinesListService,
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
    cardDate: '',
    cardUrl:'',
    cardDescription:'',
  });

  onSubmitCard(): void {
    this.cardForm.reset();
  }

  ngOnInit(): void {
  }

  deleteCard(card:any) {
    console.log("suppression de la carte : " + card.id);
  }

 // document.getElementById("cardsDiv").style.display = none;
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Card} from "../card";
import {TimelinesListService} from "../timelines-list.service";

@Component({
  selector: 'app-timeline-play',
  templateUrl: './timeline-play.component.html',
  styleUrls: ['./timeline-play.component.css']
})

export class TimelinePlayComponent implements OnInit {

  cardsToGuess: Card[] = [];
  guessingCard: Card | undefined;
  cardsAlreadyGuessed: Card[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cardService: TimelinesListService,
  ) {  }

  timelinePlayForm = this.formBuilder.group({
    timelineName: '',
    timelineCategory: '',
    timelineCreationDate: '',
  });

  onSubmitTimelinePlay(): void {
    this.timelinePlayForm.reset();
  }

  ngOnInit(): void {
    // Vous irez récupérer l'ID depuis la route mais moi je suis pressé
    this.cardService.getCardList(1).subscribe(cardList => {
      // remplir la liste des cartes à deviner
      this.cardsToGuess = cardList;
      // Vous ferez le tirage aléatoire mais moi je suis pressé (donc je prends la dernière)
      this.guessingCard = this.cardsToGuess.pop();
      console.log("Dans le subscribe");
      console.log(this.guessingCard);
      console.log(this.cardsToGuess);
    });
    console.log("hors subscribe");
    console.log(this.guessingCard);
    console.log(this.cardsToGuess);
  }

  //guessCard() {
  // Si la date est bonne alors je change la guessingCard et je remplis mon tableau de guessedCards
  // Sinon je dis au joueur qu'il est nul
  // }
}



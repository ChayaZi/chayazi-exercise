import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardNum: number;
  @Output() cardChosen = new EventEmitter <boolean>();
  isChosenCard = false;

  constructor() { 
    this.cardNum = 0;
   }

  ngOnInit(): void {
  }

  chosen(){
    this.isChosenCard = !this.isChosenCard;
    this.cardChosen.emit(this.isChosenCard);

  }

}


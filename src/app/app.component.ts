import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'chayaz-exercise';

  searchText = "12";
  equalNames = "";
  amountNames = "";
  chosenCards: Array<number>;
  cardLists = [
    [{id: 0, view: true},
      {id: 1, view: true},
      {id: 2, view: true},
      {id: 3, view: true},
      {id: 4, view: true},
      {id: 5, view: true}],   
    [{id: 10, view: true},
      {id: 11, view: true},
      {id: 12, view: true},
      {id: 13, view: true},
      {id: 14, view: true},
      {id: 15, view: true}],
    [{id: 20, view: true},
      {id: 21, view: true},
      {id: 22, view: true},
      {id: 23, view: true},
      {id: 24, view: true},
      {id: 25, view: true}],
    [{id: 30, view: true},
      {id: 31, view: true},
      {id: 32, view: true},
      {id: 33, view: true},
      {id: 34, view: true},
      {id: 35, view: true}]
  ];

  constructor() { 
    this.chosenCards = [];
   }

  addItem(newCard: number){
    this.chosenCards.push(newCard);
  }

  removeItem(newCard: number){
    const index = this.chosenCards.indexOf(newCard, 0);
    if (index > -1) {
        this.chosenCards.splice(index, 1);
    }
  }

  all(){
    for(let line of this.cardLists)
    {
      for(let item of line){
        item.view = true;
      }
    }
  }

  chosen(){
    for(let line of this.cardLists)
    {
      for(let item of line){
        const index = this.chosenCards.indexOf(item.id, 0);
        if (index > -1) {
          item.view = true;
        }
        else{
         item.view = false;
        }
      }
    }
  }

  notChosen(){
    for(let line of this.cardLists)
    {
      for(let item of line){
        const index = this.chosenCards.indexOf(item.id, 0);
        if (index == -1) {
          item.view = true;
        }
        else{
         item.view = false;
        }
      }
    }
  }

  searchCard(value: string){
    //alert(this.searchText + " 123");
    for(let line of this.cardLists)
    {
      for(let item of line){
        const index = item.id.toString().indexOf(value, 0);
        if (index > -1) {
          item.view = true;
        }
        else{
         item.view = false;
        }
      }
    }
  }
}

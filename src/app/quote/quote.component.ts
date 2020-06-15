import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [    
    new Quote('A woman is like a tea bag  you cant tell how strong she is until you put her in hot water','Eleanor Roosevelt','Maratah',new Date(2020,4,4),0,0),
   
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.dateAdded = new Date();
    this.quotes.push(quote);
    console.log(this.quotes);
    
  }
  removeQuote(complete,index){
    if(complete){
      this.quotes.splice(index,1);
    }
  }

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  constructor() { }

  ngOnInit() {
  }

}

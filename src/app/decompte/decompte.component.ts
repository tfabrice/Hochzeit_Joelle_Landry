import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decompte',
  templateUrl: './decompte.component.html',
  styleUrls: ['./decompte.component.css']
})
export class DecompteComponent implements OnInit {

  second: number;
  minute: number;
  hour: number;
  day: number;
  strSecond: string;
  strMinute: string;
  strHour: string;

  start: any;
  
  constructor() {
    
   }

  ngOnInit() {
    this.getCounter()
    this.start = setInterval( () => {
      this.getCounter()
    }, 1000);

  }


  getCounter() {
    let currentDate = new Date();
    let eventDate = new Date(2020, 11, 14);

    let currentTime = new Date().getTime();
    let eventTime = new Date(2020, 11, 14).getTime();
    
    let Datedifference = eventTime - currentTime;

    this.second = Math.floor(Datedifference / 1000);
    this.minute = Math.floor(this.second / 60);
    this.hour = Math.floor(this.minute / 60);
    this.day = Math.floor(this.hour / 24);

    // Recuperer le modulo de la valeur obtenue plus haut
    this.hour %= 24;
    this.minute %= 60;
    this.second %= 60;
/*
    if (this.hour < 10) {
      this.strHour = "0" + (this.hour).toString();
    }
    else {
      this.strHour = (this.hour).toString();
    }

    if (this.minute < 10) {
      this.strMinute = "0" + (this.minute.toString());
    }
    else {
      this.strMinute = (this.minute).toString();
    }

    if (this.second < 10) {
      this.strSecond = "0" + (this.second).toString();
    }
    else {
      this.strSecond = (this.second).toString();
    }
*/
    // Adapter le formatage si la valeur est inferieur a 10 on ecrit un "0" devant
    this.strHour = ((this.hour < 10) ? "0" + this.hour : this.hour).toString();
    this.strMinute = ((this.minute < 10) ? "0" + this.minute : this.minute).toString();
    this.strSecond = ((this.second < 10) ? "0" + this.second : this.second).toString();
  }

}

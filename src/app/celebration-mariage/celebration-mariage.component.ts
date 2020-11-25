import { Component, OnInit } from '@angular/core';

import { HostListener } from "@angular/core";

/* Caroussel */
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-celebration-mariage',
  templateUrl: './celebration-mariage.component.html',
  styleUrls: ['./celebration-mariage.component.css'],
  providers: [NgbCarouselConfig]  // add CarousselComponent to the component providers
})
export class CelebrationMariageComponent implements OnInit {

  // Declare height and width variables
  scrHeight:any;
  scrWidth:any;
  celMariage: boolean = true;
  bildchirmgröße: boolean = false;

  tableauElementCelbrationMariage = [
    {
      evenement: 'Bénédiction nuptiale',
      date: 'Le 10 Octobre 2020',
      ville: 'Ville: Douala',
      heure: 'À 15 heure précis',
      lieu: 'Salle de fête "Chateau blanc" Situé a Douala 5eme entre l’école les Dinosaures et l’Hopital General de Douala'
    }, 
    {
      evenement: 'vin d´honneur',
      date: 'le 10 octobre 2020',
      ville: 'Ville: Douala',
      heure: 'Á partir de 20 heure',
      lieu: 'Salle de fête "Chateau blanc" Situé a Douala 5eme entre l’école les Dinosaures et l’Hopital General de Douala'
    },
    {
      evenement: 'Mariage Religieux',
      date: 'le 17 octobre 2020',
      ville: 'Ville: Yaoundé',
      heure: 'À 15 heure précis',
      lieu: 'Salle de fête "Chateau blanc" Situé a Douala 5eme entre l’école les Dinosaures et l’Hopital General de Douala'
    },
    {
      evenement: 'Soirée de mariage',
      date: 'le 17 octobre 2020',
      ville: 'Ville: Yaoundé',
      heure: 'À 21 heure précis',
      lieu: 'Salle de fête "Chateau blanc" Situé a Douala 5eme entre l’école les Dinosaures et l’Hopital General de Douala'
    }
  ]

  @HostListener('window:resize', ['$event'])
  /* 
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }*/

  getSreenWidth(event?) {
    this.scrWidth = window.innerWidth;
    return this.scrWidth
    /*console.log(this.scrWidth);*/
  }

  getScreenHeight(event?) {
    this.scrHeight = window.innerHeight;
    return this.scrHeight
    /*console.log(this.scrHeight);*/
  }

  

  tailleEcran() {
    if (this.scrWidth <= 1272) {
      this.bildchirmgröße = false;
    }
    else {
      this.bildchirmgröße = true;
    }

    return this.bildchirmgröße;
  }

  ngOnInit() {
    
  }





  /*----------------------------  Carousel ------------------------------*/

constructor(config: NgbCarouselConfig) {
  // customize default values of carousels used by this component tree
  config.interval = 3000;
  config.wrap = true;
  config.keyboard = false;
  config.pauseOnHover = false;
}
 /*----------------------------  End Carousel ------------------------------*/

}

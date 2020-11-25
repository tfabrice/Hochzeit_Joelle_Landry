import { Component, OnInit } from '@angular/core';

/* Caroussel */
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
/* End Caroussel */

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
  providers: [NgbCarouselConfig]  // add CarousselComponent to the component providers
})


export class CarousselComponent implements OnInit {
  /*
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1500/500`);
*/

images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

constructor(config: NgbCarouselConfig) {
  // customize default values of carousels used by this component tree
  config.interval = 6000;
  config.wrap = true;
  config.keyboard = false;
  config.pauseOnHover = false;
}


  ngOnInit(): void {
  }



}

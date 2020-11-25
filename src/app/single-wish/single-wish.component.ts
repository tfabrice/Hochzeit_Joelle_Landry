import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-wish',
  templateUrl: './single-wish.component.html',
  styleUrls: ['./single-wish.component.css']
})
export class SingleWishComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'statut';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Recuperer les informations a partir de "ActivatedRoute" du constructeur
    this.name = this.route.snapshot.params['id']  
  }

}

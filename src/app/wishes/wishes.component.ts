import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { WishesListService } from '../services/wishes-list.service';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {
  souhaits: any[];

  lastUpdate = new Date();
  constructor(
    private listeDeSouhaits: WishesListService, 
    private modalService: NgbModal) { }

  ngOnInit() {
    // le Tableau local sera égale au tableau du service
    this.souhaits = this.listeDeSouhaits.getSouhaits;
  }

  /* Modal Anfang */
  title = 'appBootstrap';
  
  closeResult: string;
      
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  /* Modal End */

}

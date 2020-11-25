import { HttpRequestService } from './../services/http-request.service';
import { Component, OnInit, DebugNode } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  users: any = [];

  constructor(private httpRequestService: HttpRequestService) { }

  ngOnInit(): void {
  }
/*
  onSubmit(username: string, email: string) {
    this.httpRequestService.senData({username: username, email: email}).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }*/

  // Daten zu Server schicken
  onSubmit(nom: string, email: string, message: string) {
    this.httpRequestService.senData({nom: nom, email: email, message: message}).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onGetData() {
    this.httpRequestService.getData().subscribe(
      data => console.log(data)
    );
  }

  log(x) {
    console.log(x);
  }

}

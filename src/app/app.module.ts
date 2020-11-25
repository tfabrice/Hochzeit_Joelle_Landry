import { HttpRequestService } from './services/http-request.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CelebrationMariageComponent } from './celebration-mariage/celebration-mariage.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CadeauxComponent } from './cadeaux/cadeaux.component';
import { WishesComponent } from './wishes/wishes.component';
import { PicturesVideosComponent } from './pictures-videos/pictures-videos.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { SingleWishComponent } from './single-wish/single-wish.component';
import { NotreHistoireComponent } from './celebration-mariage/notre-histoire/notre-histoire.component';

//Service pour la liste des souhaits
import { WishesListService } from './services/wishes-list.service';
import { AudioComponent } from './audio/audio.component';
import { DecompteComponent } from './decompte/decompte.component';
import { ModalVoeuxComponent } from './modal-voeux/modal-voeux.component';
import { AutresComponent } from './celebration-mariage/autres/autres.component';

/* Pour creer les Routes */
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'cadeaux', component: CadeauxComponent },
  { path: 'wishes', component: WishesComponent },
  { path: 'wishes/:id', component: SingleWishComponent },
  { path: 'gallery', component: PicturesVideosComponent },
  { path: 'gasts', component: AdminComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarousselComponent,
    CelebrationMariageComponent,
    FormulaireComponent,
    CadeauxComponent,
    WishesComponent,
    PicturesVideosComponent,
    AdminComponent,
    HomeComponent,
    SingleWishComponent,
    NotreHistoireComponent,
    AudioComponent,
    DecompteComponent,
    ModalVoeuxComponent,
    AutresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),  /* pour integrer les Routes a l´application */
    HttpModule
  ],
  providers: [ // Les services sont integré ici
    WishesListService,
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

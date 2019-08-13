import { BrowserModule } from '@angular/platform-browser';

// tslint:disable-next-line:import-spacing
import {ModuleWithProviders, NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import {NgZone} from '@angular/core';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButton,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule, MatIconModule, MatButtonToggleModule
} from '@angular/material';

import { SliderComponent } from './Components/slider/slider.component';
import 'bootstrap/dist/js/bootstrap.bundle';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AccueilContenuComponent } from './Components/accueil-contenu/accueil-contenu.component';
import { ArticlesComponent } from './Components/articles/articles.component';
import { DropdownLaMarqueComponent } from './Components/dropdown-la-marque/dropdown-la-marque.component';
import { PageFilleComponent } from './Components/Filles/page-fille/page-fille.component';
import { PageGarconComponent } from './Components/Garcons/page-garcon/page-garcon.component';
import { PageEspaceProComponent } from './Components/page-espace-pro/page-espace-pro.component';
import { NotreHistoireComponent } from './Components/page-lamarque/notre-histoire/notre-histoire.component';
import { NotreSavoirFaireComponent } from './Components/page-lamarque/notre-savoir-faire/notre-savoir-faire.component';
import { PageFille4pattesComponent } from './Components/Filles/Page-Fille-4pattes/page-fille4pattes.component';
import { ArticlesFilles4PattesComponent } from './Components/Filles/articles-filles-4pattes/articles-filles4-pattes.component';
import { ArticlesFillesJuniorComponent } from './Components/Filles/articles-filles-junior/articles-filles-junior.component';
import { CoupsdecoeursComponent } from './Components/page-espace-pro/coupsdecoeurs/coupsdecoeurs.component';
import { InspirationsComponent } from './Components/page-lamarque/inspirations/inspirations.component';
import { ProjetsComponent } from './Components/page-espace-pro/projets/projets.component';
import { DeveloppementsexclusifsComponent } from './Components/page-espace-pro/developpementsexclusifs/developpementsexclusifs.component';
import { ChaussuresDetailsComponent } from './Components/Filles/chaussures-details/chaussures-details.component';
import { LoginComponent } from './Components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BonnydetailsComponent} from './Components/Garcons/chaussures-garcon-details/bonnydetails/bonnydetails.component';
import {BrandidetailsComponent} from './Components/Garcons/chaussures-garcon-details/brandidetails/brandidetails.component';
import { CoeurdetailsComponent } from './Components/Filles/chaussures-details/coeurdetails/coeurdetails.component';
import { CosmosdetailsComponent } from './Components/Filles/chaussures-details/cosmosdetails/cosmosdetails.component';
import { CookiedetailsComponent } from './Components/Filles/chaussures-details/cookiedetails/cookiedetails.component';
import { EtoiledetailsComponent } from './Components/Filles/chaussures-details/etoiledetails/etoiledetails.component';
import { EvertondetailsComponent } from './Components/Filles/chaussures-details/evertondetails/evertondetails.component';
import { PageFilleJuniorComponent } from './Components/Filles/page-fille-junior/page-fille-junior.component';
import { PageFillePremierPasComponent } from './Components/Filles/page-fille-premierpas/page-fille-premier-pas.component';
import { ArticlesFillePremierPasComponent } from './Components/Filles/articles-fille-premier-pas/articles-fille-premier-pas.component';
import { ArticlesGarconPremierPasComponent } from './Components/Garcons/articles-garcon-premierpas/articles-garcon-premier-pas.component';
import {ArticlesGarcon4pattesComponent} from './Components/Garcons/articles-garcon-4pattes/articles-garcon4pattes.component';
import { ArticlesGarconJuniorComponent } from './Components/Garcons/articles-garcon-junior/articles-garcon-junior.component';
import { PageGarcon4pattesComponent } from './Components/Garcons/page-garcon4pattes/page-garcon4pattes.component';
import { PageGarconPremierPasComponent } from './Components/Garcons/page-garcon-premier-pas/page-garcon-premier-pas.component';
import { PageGarconJuniorComponent } from './Components/Garcons/page-garcon-junior/page-garcon-junior.component';
import { ChaussuresGarconDetailsComponent } from './Components/Garcons/chaussures-garcon-details/chaussures-garcon-details.component';
import { PageLamarqueComponent } from './Components/page-lamarque/page-lamarque.component';
import { MellowdetailsComponent } from './Components/Filles/chaussures-details/mellowdetails/mellowdetails.component';
import { SantadetailsComponent } from './Components/Filles/chaussures-details/santadetails/santadetails.component';
import { EmailComponent } from './Components/email/email.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MembersComponent } from './Components/members/members.component';
import {AuthService} from './Services/auth.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule } from '@angular/fire';
import {AuthGuard} from './core/auth.guard';
import { InspirationComponent } from './Components/page-espace-pro/inspiration/inspiration.component';
import { PagealmaplaneteComponent } from './Components/page-espace-pro/projets/pagealmaplanete/pagealmaplanete.component';
// tslint:disable-next-line:max-line-length
import { CommentaiderlaplaneteComponent } from './Components/page-espace-pro/projets/pagealmaplanete/commentaiderlaplanete/commentaiderlaplanete.component';
import { PagetannageComponent } from './Components/page-espace-pro/projets/pagetannage/pagetannage.component';
import {PageNoustrouverComponent} from './Components/page-noustrouver/page-noustrouver.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {Alert} from 'selenium-webdriver';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {from} from 'rxjs';
import { PageNouscontacterComponent } from './Components/page-nouscontacter/page-nouscontacter.component';
import {RouterModule, Routes} from '@angular/router';
import { HistoireimageComponent } from './histoireimage/histoireimage.component';

const routes: Routes = [
  {path: 'Accueil', component: AccueilContenuComponent , },
  {path: '' , redirectTo: 'Accueil' , pathMatch: 'full' },
];
// @ts-ignore
@NgModule({
    declarations: [
      AppComponent,
      SliderComponent,
      NavbarComponent,
      AccueilContenuComponent,
      ArticlesComponent,
      DropdownLaMarqueComponent,
      PageFilleComponent,
      PageGarconComponent,
      PageEspaceProComponent,
      NotreHistoireComponent,
      NotreSavoirFaireComponent,
      PageFille4pattesComponent,
      ArticlesFilles4PattesComponent,
      ArticlesFillesJuniorComponent,
      CoupsdecoeursComponent,
      InspirationsComponent,
      ProjetsComponent,
      DeveloppementsexclusifsComponent,
      ChaussuresDetailsComponent,
      LoginComponent,
      BrandidetailsComponent,
      BonnydetailsComponent,
      CoeurdetailsComponent,
      CosmosdetailsComponent,
      CookiedetailsComponent,
      EtoiledetailsComponent,
      EvertondetailsComponent,
      ArticlesGarcon4pattesComponent,
      PageFilleJuniorComponent,
      PageFillePremierPasComponent,
      ArticlesFillePremierPasComponent,
      ArticlesGarconPremierPasComponent,
      ArticlesGarconJuniorComponent,
      PageGarcon4pattesComponent,
      PageGarconPremierPasComponent,
      PageGarconJuniorComponent,
      ChaussuresGarconDetailsComponent,
      PageLamarqueComponent,
      MellowdetailsComponent,
      SantadetailsComponent,
      EmailComponent,
      SignupComponent,
      MembersComponent,
      InspirationComponent,
      PagealmaplaneteComponent,
      CommentaiderlaplaneteComponent,
      PagetannageComponent,
      PageNoustrouverComponent,
      PageNouscontacterComponent,
      HistoireimageComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    [BrowserAnimationsModule],
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {environment} from '../environments/environment';
import { FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
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
import { LoginComponent } from './Components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CoeurdetailsComponent } from './Components/Filles/chaussures-details/Details Premier Pas Filles/coeurdetails/coeurdetails.component';
import { CosmosdetailsComponent } from './Components/Filles/chaussures-details/Details Premier Pas Filles/cosmosdetails/cosmosdetails.component';
import { CookiedetailsComponent } from './Components/Filles/chaussures-details/Details Premier Pas Filles/cookiedetails/cookiedetails.component';
import { EtoiledetailsComponent } from './Components/Filles/chaussures-details/Details Premier Pas Filles/etoiledetails/etoiledetails.component';
import { PageFilleJuniorComponent } from './Components/Filles/page-fille-junior/page-fille-junior.component';
import { PageFillePremierPasComponent } from './Components/Filles/page-fille-premierpas/page-fille-premier-pas.component';
import { ArticlesFillePremierPasComponent } from './Components/Filles/articles-fille-premier-pas/articles-fille-premier-pas.component';
import { ArticlesGarconPremierPasComponent } from './Components/Garcons/articles-garcon-premierpas/articles-garcon-premier-pas.component';
import {ArticlesGarcon4pattesComponent} from './Components/Garcons/articles-garcon-4pattes/articles-garcon4pattes.component';
import { ArticlesGarconJuniorComponent } from './Components/Garcons/articles-garcon-junior/articles-garcon-junior.component';
import { PageGarcon4pattesComponent } from './Components/Garcons/page-garcon4pattes/page-garcon4pattes.component';
import { PageGarconPremierPasComponent } from './Components/Garcons/page-garcon-premier-pas/page-garcon-premier-pas.component';
import { PageGarconJuniorComponent } from './Components/Garcons/page-garcon-junior/page-garcon-junior.component';
import { PageLamarqueComponent } from './Components/page-lamarque/page-lamarque.component';
import { MellowdetailsComponent } from './Components/Filles/chaussures-details/Details Premier Pas Filles/mellowdetails/mellowdetails.component';
import { SantadetailsComponent } from './Components/Filles/chaussures-details/Details Premier Pas Filles/santadetails/santadetails.component';
import { EmailComponent } from './Components/email/email.component';
import { SignupComponent } from './Components/signup/signup.component';
import { MembersComponent } from './Components/members/members.component';
import {AuthService} from './Services/auth.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule } from '@angular/fire';
import {AuthGuard} from './core/auth.guard';
import {EclipsedetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/eclipsedetails/eclipsedetails.component';
import { InspirationComponent } from './Components/page-espace-pro/inspiration/inspiration.component';
import { PagealmaplaneteComponent } from './Components/page-espace-pro/projets/pagealmaplanete/pagealmaplanete.component';
import { CommentaiderlaplaneteComponent } from './Components/page-espace-pro/projets/pagealmaplanete/commentaiderlaplanete/commentaiderlaplanete.component';
import { PagetannageComponent } from './Components/page-espace-pro/projets/pagetannage/pagetannage.component';
import {PageNoustrouverComponent} from './Components/page-noustrouver/page-noustrouver.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { PageNouscontacterComponent } from './Components/page-nouscontacter/page-nouscontacter.component';
import {RouterModule, Routes} from '@angular/router';
import { HistoireimageComponent } from './histoireimage/histoireimage.component';
import { PagechromefreeComponent } from './Components/page-espace-pro/projets/pagechromefree/pagechromefree.component';
import { FloraldetailsComponent } from './Components/Filles/chaussures-details/Details Premier Pas Filles/floraldetails/floraldetails.component';
import { CattydetailsComponent } from './Components/Filles/chaussures-details/Details 4Pattes Filles/cattydetails/cattydetails.component';
import { VincidetailsComponent } from './Components/Filles/chaussures-details/Details 4Pattes Filles/vincidetails/vincidetails.component';
import { CoraldetailsComponent } from './Components/Filles/chaussures-details/Details Junior Filles/coraldetails/coraldetails.component';
import { AlsascadetailsComponent } from './Components/Filles/chaussures-details/Details Junior Filles/alsascadetails/alsascadetails.component';
import { AntoniadetailsComponent } from './Components/Filles/chaussures-details/Details Junior Filles/antoniadetails/antoniadetails.component';
import { CarlieradetailsComponent } from './Components/Filles/chaussures-details/Details Junior Filles/carlieradetails/carlieradetails.component';
import { CarlitadetailsComponent } from './Components/Filles/chaussures-details/Details Junior Filles/carlitadetails/carlitadetails.component';
import { CannesdetailsComponent } from './Components/Garcons/chaussures-garcon-details/details 4 pattes garçons/cannesdetails/cannesdetails.component';
import { VictordetailsComponent } from './Components/Garcons/chaussures-garcon-details/details 4 pattes garçons/victordetails/victordetails.component';
import { BonnydetailsComponent } from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/bonnydetails/bonnydetails.component';
import { BrandidetailsComponent } from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/brandidetails/brandidetails.component';
import { BrutusdetailsComponent } from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/brutusdetails/brutusdetails.component';
import { CaninodetailsComponent } from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/caninodetails/caninodetails.component';
import { CarmindetailsComponent } from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/carmindetails/carmindetails.component';
import {EvertondetailsComponent} from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/evertondetails/evertondetails.component';
import { CamarodetailsComponent } from './Components/Garcons/chaussures-garcon-details/details junior garçons/camarodetails/camarodetails.component';
import { CassiodetailsComponent } from './Components/Garcons/chaussures-garcon-details/details junior garçons/cassiodetails/cassiodetails.component';
import { LeondetailsComponent } from './Components/Garcons/chaussures-garcon-details/details junior garçons/leondetails/leondetails.component';
import { LuckydetailsComponent } from './Components/Garcons/chaussures-garcon-details/details junior garçons/luckydetails/luckydetails.component';
import {VousdevezvousconnecterComponent} from './Components/page-espace-pro/vousdevezvousconnecter/vousdevezvousconnecter.component';

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
      LoginComponent,
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
      PageLamarqueComponent,
      MellowdetailsComponent,
      EclipsedetailsComponent,
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
      PagechromefreeComponent,
      FloraldetailsComponent,
      CattydetailsComponent,
      VincidetailsComponent,
      CoraldetailsComponent,
      AlsascadetailsComponent,
      AntoniadetailsComponent,
      CarlieradetailsComponent,
      CarlitadetailsComponent,
      CannesdetailsComponent,
      VictordetailsComponent,
      BonnydetailsComponent,
      BrandidetailsComponent,
      BrutusdetailsComponent,
      CaninodetailsComponent,
      CarmindetailsComponent,
      CamarodetailsComponent,
      CassiodetailsComponent,
      LeondetailsComponent,
      LuckydetailsComponent,
      VousdevezvousconnecterComponent,

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


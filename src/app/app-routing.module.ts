import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import { AccueilContenuComponent } from './Components/accueil-contenu/accueil-contenu.component';
import {PageFille4pattesComponent} from './Components/Filles/Page-Fille-4pattes/page-fille4pattes.component';
import {NotreHistoireComponent} from './Components/page-lamarque/notre-histoire/notre-histoire.component';
import {PageEspaceProComponent} from './Components/page-espace-pro/page-espace-pro.component';
import { CoupsdecoeursComponent } from './Components/page-espace-pro/coupsdecoeurs/coupsdecoeurs.component';
import { InspirationsComponent } from './Components/page-lamarque/inspirations/inspirations.component';
import { ProjetsComponent } from './Components/page-espace-pro/projets/projets.component';
import { DeveloppementsexclusifsComponent } from './Components/page-espace-pro/developpementsexclusifs/developpementsexclusifs.component';
import {PageFilleComponent} from './Components/Filles/page-fille/page-fille.component';
import {MellowdetailsComponent} from './Components/Filles/chaussures-details/mellowdetails/mellowdetails.component';

import {CookiedetailsComponent} from './Components/Filles/chaussures-details/cookiedetails/cookiedetails.component';
import {EtoiledetailsComponent} from './Components/Filles/chaussures-details/etoiledetails/etoiledetails.component';
import {EvertondetailsComponent} from './Components/Filles/chaussures-details/evertondetails/evertondetails.component';
import {CosmosdetailsComponent} from './Components/Filles/chaussures-details/cosmosdetails/cosmosdetails.component';
import {CoeurdetailsComponent} from './Components/Filles/chaussures-details/coeurdetails/coeurdetails.component';
import {PageGarconComponent} from './Components/Garcons/page-garcon/page-garcon.component';
import {PageFilleJuniorComponent} from './Components/Filles/page-fille-junior/page-fille-junior.component';
import {PageFillePremierPasComponent} from './Components/Filles/page-fille-premierpas/page-fille-premier-pas.component';
import {PageGarcon4pattesComponent} from './Components/Garcons/page-garcon4pattes/page-garcon4pattes.component';
import {PageGarconJuniorComponent} from './Components/Garcons/page-garcon-junior/page-garcon-junior.component';
import {PageGarconPremierPasComponent} from './Components/Garcons/page-garcon-premier-pas/page-garcon-premier-pas.component';
import {SantadetailsComponent} from './Components/Filles/chaussures-details/santadetails/santadetails.component';
import {LoginComponent} from './Components/login/login.component';
import {AuthGuard} from './core/auth.guard';
import {PageNouscontacterComponent} from './Components/page-nouscontacter/page-nouscontacter.component';
import {SignupComponent} from './Components/signup/signup.component';
import {PageLamarqueComponent} from './Components/page-lamarque/page-lamarque.component';
import {InspirationComponent} from './Components/page-espace-pro/inspiration/inspiration.component';
import {PagealmaplaneteComponent} from './Components/page-espace-pro/projets/pagealmaplanete/pagealmaplanete.component';
// tslint:disable-next-line:max-line-length
import {CommentaiderlaplaneteComponent} from './Components/page-espace-pro/projets/pagealmaplanete/commentaiderlaplanete/commentaiderlaplanete.component';
import {PagetannageComponent} from './Components/page-espace-pro/projets/pagetannage/pagetannage.component';
import {PageNoustrouverComponent} from './Components/page-noustrouver/page-noustrouver.component';
import {canActivate} from '@angular/fire/auth-guard';


const routes: Routes = [

  {path: 'Accueil', component: AccueilContenuComponent , },
  {path: '4PattesFilles', component: PageFille4pattesComponent ,  },
  {path: 'JuniorFilles', component: PageFilleJuniorComponent},
  {path: 'PremierPasFilles', component: PageFillePremierPasComponent},
  {path: 'Inspiration', component: InspirationComponent},
  {path: '4PattesGarçons', component: PageGarcon4pattesComponent},
  {path: 'JuniorGarçons', component: PageGarconJuniorComponent},
  {path: 'PremierPasGarçons', component: PageGarconPremierPasComponent},
  {path: 'Notre-Histoire', component: NotreHistoireComponent },
  {path: 'Fille', component: PageFilleComponent},
  {path: 'Garçon', component: PageGarconComponent},
  {path: 'EspacePro' , component: PageEspaceProComponent,    },
  {path: 'Login', component: LoginComponent },
  {path: 'NousContacter', component: PageNouscontacterComponent},
  {path: 'coups-de-coeurs', component: CoupsdecoeursComponent},
  {path: 'Inspirations', component: InspirationsComponent},
  {path: 'Projets', component: ProjetsComponent},
  {path: 'Developpements-exclusifs', component: DeveloppementsexclusifsComponent},
  {path: 'Mellow', component: MellowdetailsComponent},
  {path: 'Santa', component: SantadetailsComponent},
  {path: 'Cookie', component: CookiedetailsComponent},
  {path: 'Cosmos', component: CosmosdetailsComponent},
  {path: 'Etoile', component: EtoiledetailsComponent},
  {path: 'La marque', component: PageLamarqueComponent},
  {path: 'Everton', component: EvertondetailsComponent},
  {path: 'Coeur', component: CoeurdetailsComponent},
  {path: 'Signup', component: SignupComponent},
  {path: 'Almaplanete', component: PagealmaplaneteComponent},
  {path: 'commentaiderlaplanete', component: CommentaiderlaplaneteComponent},
  {path: 'Tannage', component: PagetannageComponent},
  {path: 'Noustrouver', component: PageNoustrouverComponent},
  {path: 'Notre-savoir-faire', redirectTo: 'image/upload' , pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }

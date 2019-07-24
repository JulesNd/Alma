import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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
import {BonnydetailsComponent} from './Components/Filles/chaussures-details/bonnydetails/bonnydetails.component';
import {BrandidetailsComponent} from './Components/Filles/chaussures-details/brandidetails/brandidetails.component';
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
import {SignupComponent} from './Components/signup/signup.component';

const routes: Routes = [
  {path: 'Accueil', component: AccueilContenuComponent , },
  {path: '4PattesFilles', component: PageFille4pattesComponent ,  },
  {path: 'JuniorFilles', component: PageFilleJuniorComponent},
  {path: 'PremierPasFilles', component: PageFillePremierPasComponent},
  {path: '4PattesGarçons', component: PageGarcon4pattesComponent},
  {path: 'JuniorGarçons', component: PageGarconJuniorComponent},
  {path: 'PremierPasGarçons', component: PageGarconPremierPasComponent},
  {path: 'Notre-Histoire', component: NotreHistoireComponent },
  {path: 'Fille', component: PageFilleComponent},
  {path: 'Garcon', component: PageGarconComponent},
  {path: 'EspacePro' , component: PageEspaceProComponent},
  {path: 'test', component: SignupComponent},
  {path: 'coups-de-coeurs', component: CoupsdecoeursComponent},
  {path: 'Inspirations', component: InspirationsComponent},
  {path: 'Projets', component: ProjetsComponent},
  {path: 'Developpements-exclusifs', component: DeveloppementsexclusifsComponent},
  {path: 'Mellow', component: MellowdetailsComponent},
  {path: 'Santa', component: SantadetailsComponent},
  {path: 'Bonny' , component: BonnydetailsComponent},
  {path: 'Cookie', component: CookiedetailsComponent},
  {path: 'Cosmos', component: CosmosdetailsComponent},
  {path: 'Etoile', component: EtoiledetailsComponent},
  {path: 'Brandi', component: BrandidetailsComponent},
  {path: 'Everton', component: EvertondetailsComponent},
  {path: 'Coeur', component: CoeurdetailsComponent},

  {path: 'Notre-savoir-faire', redirectTo: 'image/upload' , pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

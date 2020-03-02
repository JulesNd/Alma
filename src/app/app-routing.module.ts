import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import { AccueilContenuComponent } from './Components/accueil-contenu/accueil-contenu.component';
import {PageFille4pattesComponent} from './Components/Filles/Page-Fille-4pattes/page-fille4pattes.component';
import {NotreHistoireComponent} from './Components/page-lamarque/notre-histoire/notre-histoire.component';
import {PageEspaceProComponent} from './Components/page-espace-pro/page-espace-pro.component';
import { CoupsdecoeursComponent } from './Components/page-espace-pro/coupsdecoeurs/coupsdecoeurs.component';
import { ProjetsComponent } from './Components/page-espace-pro/projets/projets.component';
import { DeveloppementsexclusifsComponent } from './Components/page-espace-pro/developpementsexclusifs/developpementsexclusifs.component';
import {PageFilleComponent} from './Components/Filles/page-fille/page-fille.component';
import {MellowdetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/mellowdetails/mellowdetails.component';
import {CookiedetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/cookiedetails/cookiedetails.component';
import {EtoiledetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/etoiledetails/etoiledetails.component';
import {EvertondetailsComponent} from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/evertondetails/evertondetails.component';
import {CosmosdetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/cosmosdetails/cosmosdetails.component';
import {AntoniadetailsComponent} from './Components/Filles/chaussures-details/Details Junior Filles/antoniadetails/antoniadetails.component';
import {CannesdetailsComponent} from './Components/Garcons/chaussures-garcon-details/details 4 pattes garçons/cannesdetails/cannesdetails.component';
import {VictordetailsComponent} from './Components/Garcons/chaussures-garcon-details/details 4 pattes garçons/victordetails/victordetails.component';
import {CoeurdetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/coeurdetails/coeurdetails.component';
import {PageGarconComponent} from './Components/Garcons/page-garcon/page-garcon.component';
import {PageFilleJuniorComponent} from './Components/Filles/page-fille-junior/page-fille-junior.component';
import {PageFillePremierPasComponent} from './Components/Filles/page-fille-premierpas/page-fille-premier-pas.component';
import {PageGarcon4pattesComponent} from './Components/Garcons/page-garcon4pattes/page-garcon4pattes.component';
import {PageGarconJuniorComponent} from './Components/Garcons/page-garcon-junior/page-garcon-junior.component';
import {PageGarconPremierPasComponent} from './Components/Garcons/page-garcon-premier-pas/page-garcon-premier-pas.component';
import {SantadetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/santadetails/santadetails.component';
import {LoginComponent} from './Components/login/login.component';
import {AuthGuard} from './core/auth.guard';
import {MentionlegalesComponent} from './mentionlegales/mentionlegales.component';
import {PageNouscontacterComponent} from './Components/page-nouscontacter/page-nouscontacter.component';
import {SignupComponent} from './Components/signup/signup.component';
import {PageLamarqueComponent} from './Components/page-lamarque/page-lamarque.component';
import {InspirationComponent} from './Components/page-espace-pro/inspiration/inspiration.component';
import {PagealmaplaneteComponent} from './Components/page-espace-pro/projets/pagealmaplanete/pagealmaplanete.component';
// tslint:disable-next-line:max-line-length
import {CommentaiderlaplaneteComponent} from './Components/page-espace-pro/projets/pagealmaplanete/commentaiderlaplanete/commentaiderlaplanete.component';
import {PagetannageComponent} from './Components/page-espace-pro/projets/pagetannage/pagetannage.component';
import {PageNoustrouverComponent} from './Components/page-noustrouver/page-noustrouver.component';
import {PagechromefreeComponent} from './Components/page-espace-pro/projets/pagechromefree/pagechromefree.component';
import {FloraldetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/floraldetails/floraldetails.component';
import {EclipsedetailsComponent} from './Components/Filles/chaussures-details/Details Premier Pas Filles/eclipsedetails/eclipsedetails.component';
import {CattydetailsComponent} from './Components/Filles/chaussures-details/Details 4Pattes Filles/cattydetails/cattydetails.component';
import {VincidetailsComponent} from './Components/Filles/chaussures-details/Details 4Pattes Filles/vincidetails/vincidetails.component';
import {AlsascadetailsComponent} from './Components/Filles/chaussures-details/Details Junior Filles/alsascadetails/alsascadetails.component';
import {CarlieradetailsComponent} from './Components/Filles/chaussures-details/Details Junior Filles/carlieradetails/carlieradetails.component';
import {CarlitadetailsComponent} from './Components/Filles/chaussures-details/Details Junior Filles/carlitadetails/carlitadetails.component';
import {CoraldetailsComponent} from './Components/Filles/chaussures-details/Details Junior Filles/coraldetails/coraldetails.component';
import {BonnydetailsComponent} from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/bonnydetails/bonnydetails.component';
import {BrandidetailsComponent} from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/brandidetails/brandidetails.component';
import {BrutusdetailsComponent} from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/brutusdetails/brutusdetails.component';
import {CaninodetailsComponent} from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/caninodetails/caninodetails.component';
import {CarmindetailsComponent} from './Components/Garcons/chaussures-garcon-details/details premier pas garçons/carmindetails/carmindetails.component';
import {CamarodetailsComponent} from './Components/Garcons/chaussures-garcon-details/details junior garçons/camarodetails/camarodetails.component';
import {CassiodetailsComponent} from './Components/Garcons/chaussures-garcon-details/details junior garçons/cassiodetails/cassiodetails.component';
import {LeondetailsComponent} from './Components/Garcons/chaussures-garcon-details/details junior garçons/leondetails/leondetails.component';
import {LuckydetailsComponent} from './Components/Garcons/chaussures-garcon-details/details junior garçons/luckydetails/luckydetails.component';
import {DemandedecompteComponent} from './demandedecompte/demandedecompte.component';
import {HommesComponent} from './Components/page-espace-pro/projets/hommes/hommes.component';
import {JfillesComponent} from './Posts/jfilles/jfilles.component';

const routes: Routes = [
   {path: 'Accueil', component: AccueilContenuComponent , },
  {path: '4PattesFilles', component: PageFille4pattesComponent ,  },
  {path: 'JuniorFilles', component: JfillesComponent},
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
 {path: 'Coupsdecoeur', component: CoupsdecoeursComponent},
  {path: 'Floral', component: FloraldetailsComponent },
  {path: 'Projets', component: ProjetsComponent},
  {path: 'MentionsLegales', component: MentionlegalesComponent},
  {path: 'Developpements-exclusifs', component: DeveloppementsexclusifsComponent},
  {path: 'Mellow', component: MellowdetailsComponent},
  {path: 'Eclipse', component: EclipsedetailsComponent},
  {path: 'Demandedecompte', component: DemandedecompteComponent},
  {path: 'Santa', component: SantadetailsComponent},
  {path: 'Cookie', component: CookiedetailsComponent},
  {path: 'Cosmos', component: CosmosdetailsComponent},
  {path: 'Catty', component: CattydetailsComponent},
  {path: 'Cannes', component: CannesdetailsComponent},
  {path: 'Victor', component: VictordetailsComponent},
  {path: 'Vinci', component: VincidetailsComponent},
  {path: 'Etoile', component: EtoiledetailsComponent},
  {path: 'Carliera', component: CarlieradetailsComponent},
  {path: 'La marque', component: PageLamarqueComponent},
  {path: 'Everton', component: EvertondetailsComponent},
  {path: 'Coeur', component: CoeurdetailsComponent},
  {path: 'Bonny', component: BonnydetailsComponent},
  {path: 'Brandi', component: BrandidetailsComponent},
  {path: 'Brutus', component: BrutusdetailsComponent},
  {path: 'Alsaca', component: AlsascadetailsComponent},
  {path: 'Camaro', component: CamarodetailsComponent},
  {path: 'Cassio', component: CassiodetailsComponent},
  {path: 'Leon', component: LeondetailsComponent},
  {path: 'Lucky', component: LuckydetailsComponent},
  {path: 'Carlita' , component: CarlitadetailsComponent},
  {path: 'Canino', component: CaninodetailsComponent},
  {path: 'Carmin', component: CarmindetailsComponent},
  {path: 'Coral' , component: CoraldetailsComponent },
  {path: 'Carliera', component: CarlieradetailsComponent},
  {path: 'Antonia', component: AntoniadetailsComponent },
  {path: 'Signup', component: SignupComponent},
  {path: 'Hommes', component: HommesComponent},
  {path: 'Almaplanete', component: PagealmaplaneteComponent},
  {path: 'commentaiderlaplanete', component: CommentaiderlaplaneteComponent},
  {path: 'Tannage', component: PagetannageComponent},
  {path: 'Noustrouver', component: PageNoustrouverComponent},
  {path: 'Chromefree', component: PagechromefreeComponent},
  // path for image upload//
  {
    path: '', redirectTo: '/Accueil' , pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { FournisseurDashboardComponent } from './fournisseur-dashboard/fournisseur-dashboard.component';
import { ArticleDashboardComponent } from './components/article-dashboard/article-dashboard.component';
import { ClientDashboardComponent } from './components/client-dashboard/client-dashboard.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'fournisseur',component:FournisseurDashboardComponent},
{path:'article',component:ArticleDashboardComponent},
{path:'manager',component:OverviewComponent},
{path:'client',component:ClientDashboardComponent},
{path:'overview',component:OverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

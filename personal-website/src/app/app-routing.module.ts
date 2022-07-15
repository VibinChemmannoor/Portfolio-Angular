import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FrontendComponent } from './services/frontend/frontend.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '' ,component:HomeComponent},
  {path: 'aboutme' ,component:AboutmeComponent},
  {path: 'skills' ,component:SkillsComponent},
  {path: 'services' ,component:ServicesComponent,
  children:[
    {path:':id', component:FrontendComponent},
    {path:':id/frontend', component:FrontendComponent},
  ]},
  {path: 'portfolio' ,component:PortfolioComponent},
  {path: 'contactme' ,component:ContactmeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/i18n';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', component: AboutComponent, data: { title: extract('Conteúdos') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }

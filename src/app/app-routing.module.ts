import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StaggeringPageComponent} from './staggering/components/staggering-page.component/staggering-page.component.component';

const routes: Routes = [
  {path: 'staggering', component: StaggeringPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TofSnapListComponent} from "./tof-snap-list/tof-snap-list.component";
import {LeandingPageComponent} from "./leanding-page/leanding-page.component";
import {SingleTofComponent} from "./single-tof/single-tof.component";


const routes = [
  {path: 'tofsnps', component: TofSnapListComponent},
  {path:'',component: LeandingPageComponent},
  {path: 'tofsnps/:id', component: SingleTofComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

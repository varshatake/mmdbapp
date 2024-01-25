import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviedetailsComponent } from './movie/moviedetails/moviedetails.component';
import { MdetailComponent } from './mdetail/mdetail.component';

const routes: Routes = [
  {path:'',redirectTo : 'movie',pathMatch:'full'},
  {path:'movie',component:MovieComponent},
 // children:[{path:'moviedetails/:title',component:MoviedetailsComponent},]},
  {path:'mdetail/:title',component:MdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log('mmdb app routing module is called....');
  }
  
}

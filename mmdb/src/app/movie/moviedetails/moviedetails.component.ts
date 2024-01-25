import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieserService } from 'src/services/movieser.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit{
  movieresult:any;
  constructor(private _service:MovieserService,private route: ActivatedRoute){

  }

  ngOnInit() {
    //this.getmoviedetails();
    this.ontitleclick();
  }

  getmoviedetails(movieName:any) {
    return this._service.getmovieDetails(movieName).subscribe((movieResponse) => {
      this.movieresult = movieResponse.results;
      console.log('Movie details response :', movieResponse);
    }); 
  }
  
  // ontitleclick(){
  //   if(this.movieresult == this.movieresult.title){
  //     this.router.navigate(['/moviedetails']);
  //   }
  //   else{
  //     this.router.navigate(['/movie']);
  //   }
  // }
  ontitleclick(){
    let title = this.route.snapshot.params[''];
    this._service.getmovieDetails(title).subscribe((res:any) => {
      console.log('post deatils', res);
    })
  }
  
}

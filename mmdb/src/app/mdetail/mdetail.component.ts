import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserService } from 'src/services/movieser.service';

@Component({
  selector: 'app-mdetail',
  templateUrl: './mdetail.component.html',
  styleUrls: ['./mdetail.component.css']
})
export class MdetailComponent implements OnInit{
  movieresult:any;
  constructor(private _service:MovieserService,private route: ActivatedRoute){

  }

  ngOnInit(): void {
    
  }

  getmoviedetails(movieName:any) {
    return this._service.getmovieDetails(movieName).subscribe((movieResponse) => {
      this.movieresult = movieResponse.results;
      console.log('Movie details response :', movieResponse);
    }); 
  }

  ontitleclick(){
    let title = this.route.snapshot.params[''];
    this._service.getmovieDetails(title).subscribe((res:any) => {
      console.log('post deatils', res);
    });
  
}
}

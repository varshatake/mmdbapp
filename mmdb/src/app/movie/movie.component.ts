import { Component } from '@angular/core';
import { MovieserService } from 'src/services/movieser.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  // responseResult:any;
  resmovie:any;
  constructor(private _service:MovieserService){}

  ngOninit(){

  }


  getmovie(){
    return this._service.getmovie().subscribe(res => {
      this.resmovie =res;
      console.log('Movies :',res);
    })
  }
}

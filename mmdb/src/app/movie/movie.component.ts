import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieserService } from 'src/services/movieser.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  // responseResult:any;
  resmovie: any;
  // searchquery :any = '';
  searchresult: any;

  public movieForm!: FormGroup;

  movieresult: any;
  constructor(
    private _service: MovieserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getmovie();
  }

  public buildForm() {
    this.movieForm = this.formBuilder.group({
      searchText: ['', [Validators.required]],
    });
  }

  getmovie() {
    return this._service.getmovie().subscribe((res) => {
      this.resmovie = res;
      console.log('Movies :', res);
    });
  }

  searchapi() {
    if (this.movieForm.value.searchText.length > 0) {
      return this._service
        .searchapi(this.movieForm.value.searchText)
        .subscribe((response) => {
          this.resmovie = response;
        });
    } else {
      this.getmovie();
    }
  }

  getMovieDetails(movieName:any) {
    return this._service.getmovieDetails(movieName).subscribe((movieResponse) => {
      this.movieresult = movieResponse;
      console.log('Movie details response :', movieResponse);
    });
  }

  onsearch() {}
}

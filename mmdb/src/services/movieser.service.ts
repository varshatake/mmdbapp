import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieserService {
  getpostByName(title: any) {
    throw new Error('Method not implemented.');
  }
  apiurl =
    'https://api.themoviedb.org/3/discover/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

  moviedetailsurl =
    'https://api.themoviedb.org/3/movie/$%7BgetMovieDetails%7D?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US';

  constructor(private _http: HttpClient) {}

  getmovie(): Observable<any> {
    return this._http.get(this.apiurl);
  }

  searchapi(textsearch: any): Observable<any> {
    return this._http.get(
      'https://api.themoviedb.org/3/search/movie?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US&query=$%7B' +
        textsearch +
        '%7D&page=1&include_adult=false'
    );
  }

  getmovieDetails(movieId:any): Observable<any> {
    return this._http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5c06fed2cdf4dfcdab132d9e67c1c2e7&language=en-US`);
  }
}

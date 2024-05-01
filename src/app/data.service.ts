import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public apikey = "830984f68dmshe0e611d9b5f817dp160f91jsn0e4b186781bc"
  public apiUrl = "https://the-weather-api.p.rapidapi.com/api/weather"

  constructor(private http: HttpClient) { }

  searchWeatherByCity(city: string): Observable<any> {
    console.log("city :", city);
    const headers = new HttpHeaders()
      .set("X-RapidAPI-key", this.apikey)
      .set("X-RapidAPI-host", "the-weather-api.p.rapidapi.com")

    const options = { headers };
    return this.http.get(`${this.apiUrl}/${city}`, options)
  }
}

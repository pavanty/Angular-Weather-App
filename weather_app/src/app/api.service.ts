import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getweatherdata(cityname: any): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/weather?q=` +
        cityname +
        `&appid=8a32c001b7cae10285ccd81cf0cd54bd&units=metric`
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss'],
})
export class WeatherSearchComponent implements OnInit {
  constructor(private router: Router, private service: ApiService) {}
  cityName: String;
  weatherjsondatas: any;
  errorresponse: any;
  weatherjsondata: any;

  weathererrormessage: string;
  ngOnInit(): void {}
  onclickweather() {
    this.service.getweatherdata(this.cityName).subscribe(
      (data) => {
        this.weatherjsondatas = data;
        this.weatherjsondata = JSON.stringify(this.weatherjsondatas);
        if (this.weatherjsondatas.cod != 404) {
          this.router.navigate(['/weatherDisplay', this.weatherjsondata], {
            skipLocationChange: true,
          });
        }
      },
      (error: HttpErrorResponse) => {
        this.errorresponse = error;
        this.weathererrormessage = 'Enter a Valid City Nmae';
      }
    );
  }
}

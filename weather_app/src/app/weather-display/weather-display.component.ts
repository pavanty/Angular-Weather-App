import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss'],
})
export class WeatherDisplayComponent implements OnInit {
  cityname: String;
  weatherjsondatasstring: any;
  weatherjsondata: any;
  weatherconditionimage: any;
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private service: ApiService
  ) {}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.weatherjsondatasstring = params.get('cityinfo');
      this.weatherjsondata = JSON.parse(this.weatherjsondatasstring);
    });
    this.weathercondition(this.weatherjsondata.weather[0].id);
  }
  weathercondition(condition: any) {
    if (condition < 300) {
      this.weatherconditionimage = '🌩';
    } else if (condition < 400) {
      this.weatherconditionimage = '🌧';
    } else if (condition < 600) {
      this.weatherconditionimage = '☔️';
    } else if (condition < 700) {
      this.weatherconditionimage = '☃️';
    } else if (condition < 800) {
      this.weatherconditionimage = '🌫';
    } else if (condition == 800) {
      this.weatherconditionimage = '☀️';
    } else if (condition <= 804) {
      this.weatherconditionimage = '☁️';
    } else {
      this.weatherconditionimage = '🤷‍';
    }
  }
  gotodisplaysearch() {
    this.router.navigate(['weatherSearch']);
  }
}

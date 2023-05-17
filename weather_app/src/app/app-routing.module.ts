import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/weatherSearch', pathMatch: 'full' },
  { path: 'weatherSearch', component: WeatherSearchComponent },
  { path: 'weatherDisplay/:cityinfo', component: WeatherDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponenet = [
  WeatherSearchComponent,
  WeatherDisplayComponent,
];

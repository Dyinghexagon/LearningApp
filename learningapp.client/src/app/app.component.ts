import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [ "./app.component.scss" ]
})
export class AppComponent implements OnInit {

    public forecasts: WeatherForecast[] = [];
    public title = "learningapp.client";

    constructor(private http: HttpClient) {}

    public ngOnInit(): void {
        this.getForecasts();
    }

    public getForecasts(): void {
        this.http.get<WeatherForecast[]>("/weatherforecast").subscribe(
            result => {
                this.forecasts = result;
            },
            error => {
                console.error(error);
            }
        );
    }

}

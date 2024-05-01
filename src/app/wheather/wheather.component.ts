import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-wheather',
  templateUrl: './wheather.component.html',
  styleUrls: ['./wheather.component.css']
})
export class WheatherComponent {
  public stdData: any;
  public weatherData: any;

  constructor(private fb: FormBuilder, private servive: DataService) {

  }
  ngOnInit() {
    this.stdData = this.fb.group({
      city: [null, Validators.required]
    })
  }

  onSubmitData() {
    console.log(this.stdData.value);


    this.servive.searchWeatherByCity(this.stdData.get('city').value).subscribe((res: any) => {
      // console.log(res.data);
      this.weatherData = res.data;
      console.log(this.weatherData);

    })

  }
}

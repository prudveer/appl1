import { Component, OnInit } from '@angular/core';
import * as data from './data/continents.json';
import { Pipe, PipeTransform } from '@angular/core';
const continentsData= data;
console.log(continentsData);
@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
      return Object.keys(value);
  }
}
// export class Country {
//   constructor(public flag: string,
//     public name: string) {
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Flag Picker';
  subtitle = 'This app will help you to learn flags around the worlds in  3 steps';
  continentOptions: any;
  name:string;
  selectedContinent:string;
  allContinentsData:any= continentsData;
  continent:string;
  //countries:any[];
  countries: Country[] = [{flag:null,name:null}];
  constructor() { 
    
  }
  ngOnInit() {
  }
  onSelect(selectedContinent) {
    this.allContinentsData.forEach(function(res){
      if(res.continent===selectedContinent) {
        res.countries.forEach(function(result){
          
          console.log("result->"+result.name);
          this.countries.push({'flag':result.flag,'name':result.name});
          //this.countries.push(new Country(result.flag,result.name));
          console.log("this.countries->"+this.countries)
        })              
      }
      
    })
  }
  
}

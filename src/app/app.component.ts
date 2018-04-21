import { Component, OnInit } from '@angular/core';
import * as data from './data/continents.json';
import { Pipe, PipeTransform } from '@angular/core';
const continentsData= data;
console.log(continentsData);
// @Pipe({
//   name: 'keys',
//   pure: false
// })
// export class KeysPipe implements PipeTransform {
//   transform(value, args: string[]): any {
//       return Object.keys(value);
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
  flag:string;
  allContinentsData:any= continentsData;
  //continent:string;
  country:any=[];
  checkedList:any=[];
  
  //countries: Country[] = [{flag:null,name:null}];
  constructor() { 
    this.country=[]; 
    this.checkedList=[];   
  }
  ngOnInit() {    
  }
  onSelect(selectedContinent) {
    var that = this;
    that.country = [];
    this.allContinentsData.forEach(function(res){
      if(res.continent===selectedContinent) {
        res.countries.forEach(function(result){
          that.country.push(result);
        })              
      }      
    })
  }
  onSelectCountry(selectedCountry,event) {
    var the = this;
    if(event.target.checked) {
      the.checkedList.push(selectedCountry);
    } else {
      for(var i=0 ; i < the.country.length; i++) {
        if(the.checkedList[i] == selectedCountry){
          the.checkedList.splice(i,1);
        }
      }
    }
    console.log(the.checkedList);
  //   console.log("selectedCountry->"+selectedCountry);
  //   console.log("the.country.name->"+the.country)
  //  for(let co of the.country) {
  //    console.log("co->"+co.name)
  //  if(co.name == selectedCountry) {
  //   the.flag = co.flag;
  //  }  
  //  }   
  }
  
}

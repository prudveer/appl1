import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// const CONTINENT_DATA: IContinent[] = require('./data/continents.json');

// console.log(CONTINENT_DATA);

// @Injectable()
// export class ContinentService {
//     private _url: string = './data/continents.json';
//     constructor(private _htttp: Http) {}
//     getAllContinentNames(): string[] {
//         return CONTINENT_DATA.map((contObj: IContinent) => { return contObj.continent; });

//         return this._htttp.get(this._url)
//                 .map((response: Response) => response.map((contObj: any) => { return contObj.continent; });
//     }

//     getContinentByName(cont: string): IContinent[] {
//         //
//     }
// }

// @Injectable()
// export class ContinentService {
//     constructor( private http: Http) {
// var obj;
// this.GetPosts.subscribe(data=> obj=data,error=>console.log(error));
//     }
//     public GetPosts():Observable<any> {
//         return this.http.get("./data/continents.json")
//         .map((res.any) => res.json())
//         .catch((error:any)=>console.log(error));
//     }
// }

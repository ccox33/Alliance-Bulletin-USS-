import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Bulletin } from '../bulletin.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public url : string = "https://bulletinsapi.united-systems.com/api/"
  public url : string = "https://localhost:5001/api/";

  public selectedBulletinDataSource = new BehaviorSubject<any>(null);
  public selectedBulletin = this.selectedBulletinDataSource.asObservable();

  constructor(public http: HttpClient) 
  { 

  }

  public updateSelectedBulletin(bulletin: Bulletin){
    console.log("A Page has updated the bulletin source to:" + bulletin);
    this.selectedBulletinDataSource.next(bulletin);
  }

  public GetAuthorized(email: String) : Observable<boolean>
  {
  return this.http.get<boolean>(`${this.url}TechnicalBulletin/GetAuthorized`)
      .pipe(
        map((res: boolean) => {
          return res;
        })
      );
  }

  public getBulletins() : Observable<any>
  {
    return this.http.get<Array<Bulletin>>(`${this.url}TechnicalBulletin/GetBulletins`)
      .pipe(
        map((res: Array<Bulletin>) => {
          return res;
        })
      );
  }

  
  public getBulletin(modelID: number) : Observable<Bulletin>
  {
    return this.http.get<Bulletin>(`${this.url}TechnicalBulletin/GetBulletinByID?modelID=${modelID.toString()}`)
        .pipe(
          map((res: Bulletin) => {
            return res;
          })
        );
  }

  // This method can be used for both updating and Creating new Bulletins
  // Needs a local Bulletin model using forms to translate to the API
  // New Bulletins are entered into the system with an ID of 0.
  public updateBulletin(values: any) : Observable<any>
  {
    console.log(values);
    console.log("to dataservice in update");
    return this.http.post<string>(`${this.url}TechnicalBulletin/SaveModel`, values)
      .pipe(
        map((res: string) => {
          console.log("inside map");
          return res;
        })
      );
    console.log("got to end")
  }

  // Takes an ID and deletes a bulletin
  public deleteBulletin(modelID: number) : Observable<any>
  {
    return this.http.delete<string>(`${this.url}TechnicalBulletin/DeleteBulletin?modelID=${modelID.toString()}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public url : string = "https://bulletinsapi.united-systems.com/api/"
  constructor(public http: HttpClient) 
  { 

  }

  public getAllSoftware() : Observable<any>
  {
    return this.http.get<string>(`${this.url}TechnicalBulletin/GetAllSoftwareTypes`)
      .pipe(
        map((res: string) => {
          return res;
        })
      );
  }

  // This method can be used for both updating and Creating new Bulletins
  // Needs a local Bulletin model using forms to translate to the API
  // New Bulletins are entered into the system with an ID of 0.
  public updateBulletin(val: any) : Observable<any>
  {
    return this.http.post<string>(`${this.url}TechnicalBulletin/Post`, val)
      .pipe(
        map((res: string) => {
          return res;
        })
      );
  }

  // Takes an ID and deletes a bulletin
  public deleteBulletin(val: any) : Observable<any>
  {
    return this.http.delete<string>(`${this.url}TechnicalBulletin/Delete`, val);
  }
}

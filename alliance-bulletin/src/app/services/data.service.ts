import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Bulletin } from '../bulletin.interface';

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

// Legacy Get method in case things go worng in the universal get method.
public getBulletin(modelID: number) : Observable<Bulletin>
{

  const params = new HttpParams()
  .set('modelID', modelID.toString());;

  // can be changed to
  return this.http.get<Bulletin>(`${this.url}TechnicalBulletin/GetBulletin/`, { params: params })
      .pipe(
        map((res: Bulletin) => {
          return res;
        })
      );
}

/**
   * @param {number} id
   * @param {string} modelName
   * @returns {Observable<any>}
   */
 public getByID(id: number, modelName: string): Observable<any> {
  const params = new HttpParams()
  .set('id', id.toString());
  return this.http.get<any>(`${this.url}TechnicalBulletin/Get${modelName}?token=${localStorage.getItem('AllianceServiceToken')}`, { params: params })
    .pipe(
      map((res: any) => {
        return res;
      }),
    );
  }

  // This method can be used for both updating and Creating new Bulletins
  // Needs a local Bulletin model using forms to translate to the API
  // New Bulletins are entered into the system with an ID of 0.
  public updateBulletin(values: any) : Observable<any>
  {
    return this.http.post<string>(`${this.url}TechnicalBulletin/Post`, values)
      .pipe(
        map((res: string) => {
          return res;
        })
      );
  }

  // Takes an ID and deletes a bulletin
  public deleteBulletin(modelID: number) : Observable<any>
  {
    return this.http.delete<string>(`${this.url}TechnicalBulletin/Delete/` + modelID);
  }
}

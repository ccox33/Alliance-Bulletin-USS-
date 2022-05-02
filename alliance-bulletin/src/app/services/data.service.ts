import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
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
    this.selectedBulletinDataSource.next(bulletin);
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

  public GetAuthorized(email: String) : Observable<boolean>
{
  return this.http.get<boolean>(`${this.url}TechnicalBulletin/GetAuthorized`)
      .pipe(
        map((res: boolean) => {
          return res;
        })
      );
}

public createDefault() : Observable<Bulletin>
{
  return this.http.get<Bulletin>(`${this.url}TechnicalBulletin/CreateDefault`)
      .pipe(
        map((res: Bulletin) => {
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

// Legacy Get method in case things go worng in the universal get method.
public getBulletin(modelID: number) : Observable<Bulletin>
{
  return this.http.get<Bulletin>(`${this.url}TechnicalBulletin/GetBulletinByID?modelID=${modelID.toString()}`)
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
  .set('modelID', id.toString());
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
    const params = new HttpParams()
    .set('modelID', modelID.toString());;

    return this.http.delete<string>(`${this.url}TechnicalBulletin/Delete/`, { params: params });
  }
}

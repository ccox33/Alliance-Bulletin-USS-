import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalGuardConfiguration, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import * as wijmo from '@grapecity/wijmo';
import { filter, Subject, takeUntil } from 'rxjs';

//Zachary Orr from the United SYstems team helped with the login functionality.

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'alliance-bulletin';
  private readonly _destroying$ = new Subject<void>();


  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private broadcastService: MsalBroadcastService,
    private http: HttpClient
    ) 
  {

  }

  ngOnInit(): void {

    this.getProfile();
    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      
    })
    wijmo.setLicenseKey("bulletins.united-systems.com,212186778432867#B0MVYdiwSZzxWYmpjIyNHZisnOiwmbBJye0ICRiwiI34zZpZUUl5kS9IjYiVmRxcTduFnVIJDdZFUbvJnZC9kW0RkNxd5M4dHbtFkTapnb4dmbXhlZvVDcndXOVZVU6A5QLR6Vat6K7UEaTNzbRpmSN3WV4A7NBR4Y4BXax9GMz2iUY3COPNHRhBzYQl4TsdXUTdUcDZ4bkdUWIB5br3iMyEkbjBFMvplc5omcoBndRp4dxB7KW94VzETRRNEZ5YGawUkd5cUThFlUJljZoNWYJpHWTJ7K7h4TVFlcxhlWpFXR6QUR5N5UTlDbydUSRVTZWJ4Z7dnc8BzTy94SXNFTH5WUYlETx44dSlEdWhjbRZnYrdmdyl6LZdVTw3kRhVDdHdzSFJlViVVUrF7YnF5TNR6dRZjSp36d7NXWL3ETytiYKR4YSRFNUBXMxh7NhRjZp9WbUdmS4kjcwo7KSd4N8JzayUWYBF7KVhXawMHOZVjWYBnQjtkI0IyUiwiIEdTQENkQ5EjI0ICSiwyM7cDO6kjM7ETM0IicfJye35XX3JSSwIjUiojIDJCLi86bpNnblRHeFBCI4VWZoNFelxmRg2Wbql6ViojIOJyes4nI5kkTRJiOiMkIsIibvl6cuVGd8VEIgIXZ7VWaWRncvBXZSBybtpWaXJiOi8kI1xSfis4N8gkI0IyQiwiIu3Waz9WZ4hXRgAydvJVa4xWdNBybtpWaXJiOi8kI1xSfiQjR6QkI0IyQiwiIu3Waz9WZ4hXRgACUBx4TgAybtpWaXJiOi8kI1xSfiMzQwIkI0IyQiwiIlJ7bDBybtpWaXJiOi8kI1xSfiUFO7EkI0IyQiwiIu3Waz9WZ4hXRgACdyFGaDxWYpNmbh9WaGBybtpWaXJiOi8kI1tlOiQmcQJCLigTNyQjNwAyNyQDMyIDMyIiOiQncDJCLi46bj9yctVGdzl7ctQWZ4lmb59yculGdlxGb5JmI0IyctRkIsISZyF6d4Z6bTBiJgMXblR7c9NFIkVGdp9WViojIh94QiwiI7YDOyMDN8czN6gTMyEjMiojIklkIs4XXbpjInxmZiwiIxYnMyAjMJoII");
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        console.log(profile);
        //this.loggedInEmail = profile.email;
        //this.dataService.isAuthorizedUser(profile.email).subscribe((res) => {
        //  this.isAuthorizedUser = res;
        //})
      });
  }
}

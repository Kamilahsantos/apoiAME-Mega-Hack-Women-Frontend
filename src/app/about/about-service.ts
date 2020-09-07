import { Routes, Route } from '@angular/router';
import { AuthenticationGuard } from '@app/auth';
import { HttpClient } from '@angular/common/http';
import { AboutComponent } from './about.component';
import { Observable } from 'rxjs';


export class AboutService{

    private baseUrl = 'https://apoiame-api.herokuapp.com/api/v1/content';

    constructor(private http: HttpClient) { }


    getContentList(): Observable<any> {
        console.log ('chegou aqui na busca')

        return this.http.get(`${this.baseUrl}`);
      }

    static childRoutes(routes: Routes): Route {
        return {
          path: '',
          component: AboutComponent,
          children: routes,
          canActivate: [AuthenticationGuard],
          data: { reuse: true }
        };
      }
}

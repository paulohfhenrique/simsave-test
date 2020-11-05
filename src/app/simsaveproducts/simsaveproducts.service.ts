import { Injectable } from '@angular/core';
import { Product } from './simsaveproducts.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
@Injectable()
export class SimSaveProductsService {

  constructor(private http: HttpClient) { }

  products(): Observable<any> {
    return this.http.get('https://teste-simsave.getsandbox.com/home')
  }

}
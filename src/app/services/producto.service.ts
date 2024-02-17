import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
 API_URL: string = 'https://mpeba5009063a03eea94.free.beeceptor.com/data';
  constructor(private httpClient: HttpClient) { }
getProducto(): Observable<any>{
  return this.httpClient.get(this.API_URL).pipe(res=> res);
}

}

import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Atendimento } from 'src/app/service-atendimento';


@Injectable({
  providedIn: 'root'
})
export class ServiceAtendimentoService {
    private resource = 'atendimento';
    api = environment.urlBase + '/'  + this.resource;

    constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

      // tslint:disable-next-line:typedef
      saveAtendimento(atendimento: Atendimento): Observable<Atendimento> {
        console.log( JSON.stringify(atendimento));
        return this.httpClient.post<Atendimento>(this.api, JSON.stringify(atendimento), this.httpOptions)
          .pipe(
            retry(2),
            catchError(this.handleError)
          );
      }
      getAtendimento(): Observable<Atendimento[]> {
        return this.httpClient.get<Atendimento[]>(this.api)
          .pipe(
            retry(2),
            catchError(this.handleError));
      }
      updateAtendimento(atendimento: Atendimento): Observable<Atendimento> {
        return this.httpClient.put<Atendimento>(this.api + '/' + atendimento.id, JSON.stringify(atendimento), this.httpOptions)
          .pipe(
            retry(1),
            catchError(this.handleError)
          );
      }
      // tslint:disable-next-line:typedef
      deleteAtendimento(atendimento: Atendimento) {
        return this.httpClient.delete<Atendimento>(this.api + '/' + atendimento.id, this.httpOptions)
          .pipe(
            retry(1),
            catchError(this.handleError)
          );
      }

      // tslint:disable-next-line:typedef
      handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Erro ocorreu no lado do client
          errorMessage = error.error.message;
          console.log(errorMessage, 'Client Error');
        } else {
          // Erro ocorreu no lado do servidor
          errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
          console.log(errorMessage, 'Server Error');
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      }

    }



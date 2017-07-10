import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Pregunta} from './pregunta';


@Injectable()
export class PreguntaService {

  constructor(private http: Http) { }

  getPreguntas():Observable<Response> {
   return this.http.get('https://campitos.herokuapp.com/tema/B3')
     .map((respuesta:Response)=>respuesta.json())
  }
}

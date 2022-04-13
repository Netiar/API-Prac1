import { HttpClient } from '@angular/common/http'; 
import { MapType } from '@angular/compiler'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cofee } from './ping';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private dataFetcher: HttpClient) { 

  }
  getData(){
    return this.dataFetcher.get<cofee>('https://coffee.alexflipnote.dev/random.json')
  }
  
  getGif(){
    return this.dataFetcher.get<any>('api.giphy.com/v1/gifs/search?api_key=6khsOXZPUD2vx5W285DLz1I3Q1vJdKN1&q=football&limit=10')
  }








}

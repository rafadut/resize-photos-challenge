import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  images: string[];

   constructor(private http: HttpClient) {}
  
   ngOnInit(): void {
    this.http.get('https://cors.io/?http://54.152.221.29/images.json').subscribe(data => {
      this.images = data['images'];
      console.log(this.images);
    });
   }
}
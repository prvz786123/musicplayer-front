import { Component,OnInit } from '@angular/core';
import { DataService } from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  albums:any=[{}];


  constructor(private dataService:DataService){
  }

  ngOnInit(){
      //Fetch Album From Backend
    this.dataService.getAlbum().subscribe((data:any)=>{
        if(data.success){
            this.albums=data.songs;
        }
    },(err)=>{
        console.log(err)
    })
  }

  }

import { Component, OnInit } from '@angular/core';
import { EmsapiserService } from '../emsapiser.service';
import { Locations } from '../locations';

@Component({
  selector: 'app-emsapicall',
  templateUrl: './emsapicall.component.html',
  styleUrls: ['./emsapicall.component.css']
})

export class EmsapicallComponent implements OnInit {
  constructor(private apiEms: EmsapiserService) { }

  myLocations!: Locations[] ;

  ngOnInit(): void {
    this.apiEms.getEMSFeed().subscribe(res => {
      this.myLocations = res;
      console.log(res);    
  });
}

}
import { Component, OnInit } from '@angular/core';
import { EmsapiserService } from '../emsapiser.service';
import { Locations } from '../locations';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emsapicall',
  templateUrl: './emsapicall.component.html',
  styleUrls: ['./emsapicall.component.css']
})

export class EmsapicallComponent implements OnInit {

  contactForm = new FormGroup({})
  procId = new FormControl('');

  constructor(private apiEms: EmsapiserService) { }

  myLocations!: Locations[] ;

  ngOnInit(): void {

 
  
}

onSubmit() {
  this.apiEms.getEMSFeed(this.procId.value).subscribe(res => {
    this.myLocations = res;
    console.log(res);    
});
  console.log(this.contactForm.value);
}

}
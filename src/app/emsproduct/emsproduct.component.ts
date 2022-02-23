import { Component, OnInit } from '@angular/core';
import { EmsapiserService } from '../emsapiser.service';
import { Product } from '../product';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-emsproduct',
  templateUrl: './emsproduct.component.html',
  styleUrls: ['./emsproduct.component.css']
})
export class EmsproductComponent implements OnInit {

  productsForm = new FormGroup({})
  username = new FormControl('');

  constructor(private apiEms: EmsapiserService) { }

  userProducts!: Product[] ;

  ngOnInit(): void {
  }
  onSubmit() {

    this.apiEms.getDowloadFiles(this.username.value).subscribe(res => {
      this.userProducts = res;
      console.log(res);    
  });
   
    console.log(this.productsForm.value);
  }

  filedownload(objectId: string)
  {
    var targetURL;
    this.apiEms.downloadFile(objectId).subscribe(res => {
      targetURL = res;
      console.log(res);            
 //window.open(JSON.parse(res));

    }); 

    //window.location.href = targetURL;  

  }

  downloadDocFile(objectId:string) {  
    var DocFile = objectId;  
    this.apiEms.downloadFile(objectId).subscribe((data) => {  
      window.open(JSON.parse(data))
    });  
}  

  
}

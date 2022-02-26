import { Component, OnInit } from '@angular/core';
import { EmsapiserService } from '../emsapiser.service';
import { Product } from '../product';
import { FormControl, FormGroup } from '@angular/forms';
import { FileService } from '../file.service';
import { saveAs } from 'file-saver';
import {htmlToText} from 'html-to-text'


@Component({
  selector: 'app-emsproduct',
  templateUrl: './emsproduct.component.html',
  styleUrls: ['./emsproduct.component.css']
})
export class EmsproductComponent implements OnInit {

  
  productsForm = new FormGroup({})
  username = new FormControl('');
  frmLanguage = new FormControl('');
  frmPortfolio = new FormControl('');
  searchPartNumber  = new FormControl('');
  searchTitle = new FormControl('');
    searchterm = new FormControl('');
    term : string ='';
     

  peopleFilter: any;
    
  constructor(private apiEms: EmsapiserService,private fileService: FileService) { 
    //this.peopleFilter = {language: 'English'};
  }

  userProducts!: Product[] ;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [3, 6, 9, 12];
  isProducts :boolean = false;
  languages : any = ["English","German","Spanish","French (France)","French (Quebec)","Italian","Turkish","Polish","Portuguese (Brazil)","Portuguese (Portugal)","Simplified Chinese","Traditional Chinese","Indonesian"];
  portfolios : any = ["CS 5500","CS 5550","CS 7700","CS 7750","CS 7780","CS 7790","CS 6040","DN Series 100D","DN Series 200A","DN Series 200C","DN Series 200H","DN Series 200V","DN Series 250A","DN Series 250C","DN Series 250H","DN Series 250V","DN Series 400C","DN Series 400H","DN Series 400V","DN Series 450A","DN Series 450C","DN Series 450H","DN Series 450V","DN Series 470C","DN Series 470V","DN Series 490C","DN Series 490V","DN Series EASY Cash Rack","DN Series EASY Express","DN Series EASY Express Max","DN Series EASY Pro Card","DN Series EASY Pro Cash"];
  ngOnInit(): void {
    this.fetchProducts();
  }
  onSubmit() {


    this.fetchProducts();
    console.log(this.productsForm.value);
  }

  fetchProducts(): void {
    //this.applymultplefilters(); 
    //this.peopleFilter = this.createfilter();
    
    this.apiEms.getDowloadFiles(this.username.value).subscribe(
      (response) => {
        this.userProducts = response;
        console.log(response);
        if(this.userProducts.length > 0)
                this.isProducts = true;

                // if(this.searchTitle.value!='' || this.searchPartNumber.value !='' || this.frmLanguage.value !='' || this.frmPortfolio.value !=''  )
                // {
                //   this.userProducts = this.filterProductsData();  
                // }      

                //this.applymultplefilters(); 

      },
      (error) => {
        this.isProducts = false;
        console.log(error);
      }
    );
  }

   filterProductsData() {
    return this.userProducts.filter(object => {
      return  object['title'].includes(this.searchPartNumber.value) 
      || object['description'] == this.searchTitle.value
      || object['language'] == this.frmLanguage.value
      || object['products'] == this.frmPortfolio.value;
    });
  }

  applymultplefilters()
  {
  
    if(this.frmLanguage.value !='')
        this.peopleFilter.language = this.frmLanguage.value;
  if(this.searchPartNumber.value !='')
    this.peopleFilter.title = this.frmLanguage.value;
  
  if(this.searchTitle.value!='')
       this.peopleFilter.description = this.frmLanguage.value;

  if(this.frmPortfolio.value!='')     
      this.peopleFilter.products = this.frmPortfolio.value;


  }

  createfilter()
  {
    const myObject:any={};

    if(this.frmPortfolio.value!='')   
    {
      myObject['products'] = this.frmLanguage.value;
    }  
    if(this.frmLanguage.value!='')   
    {
      myObject['language'] = this.frmLanguage.value;
    }  

    if(this.searchPartNumber.value!='')   
    {
      myObject['title'] = this.searchPartNumber.value;
    }  
    if(this.searchTitle.value!='')   
    {
      myObject['description'] = this.searchTitle.value;
    }  

    return myObject;

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchProducts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchProducts();
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

download(objectId: string, filename: string) {
  this.fileService.downloadFile(objectId).subscribe((response: any) => {
    let blob:any = new Blob([response], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    window.open(blob);
    //window.location.href = url;
    saveAs(blob,filename);
    }), (error: any) => console.log('Error downloading the file'),
    () => console.info('File downloaded successfully');
  }    

  download2(objectId: string, filename: string) {
    this.fileService.downloadFile(objectId).subscribe((response: any) => {
     // let blob:Blob = new Blob([response], { type: 'text/json; charset=utf-8' });
      
      var json = JSON.stringify(response),
      blob = new Blob([json], {type: "application/pdf"}),
      url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");      
  a.href = url;
  a.download = filename;
  a.click();
  window.URL.revokeObjectURL(url);
      

       });
    }    

    downloadPdf(pdfUrl: string, pdfName: string ) {
      //const pdfUrl = './assets/sample.pdf';
      //const pdfName = 'your_pdf_file';
      saveAs.saveAs(pdfUrl, pdfName);
    }
  
    openDoc(pdfUrl: string, startPage: number ) {
      window.open(pdfUrl + '#page=' + startPage, '_blank', '');
    }

    decodehtml(mystr: string){
     var outstr: string = htmlToText(mystr);
     outstr = this.replaceStr(outstr,' ','_');
     outstr = this.replaceStr(outstr,'-','_');
      return outstr;

    }
  replaceStr(str:string, find:string, replace:string) {
      for (var i = 0; i < find.length; i++) {
          str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
      }
      return str;
  }
}

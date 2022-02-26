// basic.component.ts
import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

declare var require: any

@Component({
  selector: 'app-basic',
  templateUrl: './filedownload.component.html',
  styleUrls: ['./filedownload.component.css']
})
export class FiledownloadComponent implements OnInit {

  pdfFiles = [
    {
      name:'PDF File One',
      startPage: 2,
      path: './assets/sample1.pdf'
    },
    {
      name:'PDF File Two',
      startPage: 4,
      path: './assets/sample2.pdf'
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    saveAs.saveAs(pdfUrl, pdfName);
  }

  openDoc(pdfUrl: string, startPage: number ) {
    window.open(pdfUrl + '#page=' + startPage, '_blank', '');
  }

}

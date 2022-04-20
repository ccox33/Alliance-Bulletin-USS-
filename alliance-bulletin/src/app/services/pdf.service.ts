import { ElementRef, Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
  })
  export class PDFService {
      
    public dataService : DataService;

    constructor(public dataServiceInput : DataService) 
    {
      this.dataService = dataServiceInput;
    }
  
    ngOnInit(): void {
    }
  
    downloadPDF(pdfInput: ElementRef){
      console.log('downloading pdf ...');
      const doc = new jsPDF();

      const nativeInputElement = pdfInput.nativeElement;

      var html = htmlToPdfmake(nativeInputElement.innerHTML);

      const documentDef = {content: html};
      pdfMake.createPdf(documentDef).open();
    }
  }
import {Component, Renderer2} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import { Universite } from 'src/app/model/Universite';
import { UniversiteService } from 'src/app/service/universiteService/universite.service';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";
import {Document} from "../../../model/Documents";


@Component({
  selector: 'app-universite-detail',
  templateUrl: './universite-detail.component.html',
  styleUrls: ['./universite-detail.component.css']
})
export class UniversiteDetailComponent {
  universite !: Universite ;
  sanitizedDocumentContent!: SafeUrl;
  otherUniversities: Universite[] = [];


  constructor(private serviceUniversite: UniversiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer,
              private renderer: Renderer2){
                this.sanitizeDocumentContent();
              }


  ngOnInit(): void {
    console.log("universite details");

    this.serviceUniversite.getUniversiteByNomU(this.activatedRoute.snapshot.params['universite']).subscribe((data) => {
      this.universite = data;
     // this.getDoc();
    });
  }

  downloadURL(doc:Document){
    const byteArray = new Uint8Array(
      atob(doc.documentContent)
      .split('')
      .map((char) => char.charCodeAt(0)));
      const file = new Blob([byteArray] , {type:'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      let fileName = 'downloaded pdf';
      let link = document.createElement('a');
      link.download = fileName ;
      link.target = '_blank' ;
      link.href = fileURL ;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  private sanitizeDocumentContent(): void {
    /*if (this.document.documentContent instanceof Blob) {
      // Create a URL for the Blob and sanitize it
      this.sanitizedDocumentContent = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(this.document.documentContent)
      );
    }*/
  }
  getDoc(document:Document){
   /*
    if (document.documentContent instanceof Blob) {
      console.log("universite details");
      this.sanitizedDocumentContent = this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL(document.documentContent)
      );
      console.log(this.sanitizeDocumentContent);

    }
    /*
    const pdfData = URL.createObjectURL(documentContent);
    return this.sanitizer.bypassSecurityTrustResourceUrl(pdfData);
    /*this.serviceUniversite.getDocuments(this.universite.idUniversite).subscribe(
      (data: any)=>{
        this.universite.documents = data;
        console.log(data);
      }
    )*/
  }

  redirectToUpdateChamber() {
    const universite = this.activatedRoute.snapshot.params['universite'];
    this.router.navigate([this.activatedRoute.snapshot.params['universite']]);
  }

  /*downloadDocument(document: Document): void {
    const blob = new Blob([document.documentContent], { type: document.documentType });
    const url = URL.createObjectURL(blob);

    const link = this.renderer.createElement('a');
    this.renderer.setAttribute(link, 'href', url);
    this.renderer.setAttribute(link, 'download', "");


    link.download = document.documentContent.name;
    link.click();

    // Clean up the URL.createObjectURL
    URL.revokeObjectURL(url);
  }*/

  getSafeUrl(documentContent: Blob): SafeResourceUrl {
    const pdfData = URL.createObjectURL(documentContent);
    return this.sanitizer.bypassSecurityTrustResourceUrl(pdfData);
  }
  dataURItoBlob(dataURI: string): SafeUrl {
    const matches = dataURI.match(/^data:(.*?);base64,/);
    const type = matches ? matches[1] : '';

    const byteString = atob(dataURI.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([uint8Array], { type });
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
  }


  protected readonly Document = Document;
}

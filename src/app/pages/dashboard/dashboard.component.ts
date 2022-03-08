import { MainService } from './../../main.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  studentData: ArrayBuffer;
  @ViewChild('content',{static:true}) el!:ElementRef;  

  constructor(public mainService:MainService) { }

  ngOnInit(): void {
    this.mainService.getApi('',0).subscribe(res=>{
      console.log(res);
      this.studentData = res
    })
  }
  SavePDF(){
    // let content=this.content.nativeElement;  
    let doc = new jsPDF();  
  doc.html(this.el.nativeElement,{
    callback:(pdf)=>{
      doc.save('test.pdf');  
    }
  })
    
  }
}

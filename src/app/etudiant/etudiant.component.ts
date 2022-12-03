import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  dataSource:any
  datatable:any
  displayedColumns:any
  constructor(private service:DataService) {
    this.displayedColumns = ['position', 'name', 'subjectName', 'degree'];
   }

  
  ngOnInit(): void {
    this.getStudents()
  }


  getStudents() {
    this.service.getUsers('students').subscribe((res:any) => {
      this.dataSource = res?.map((student:any) => {
        if(student?.subjects) {
          return student?.subjects?.map((sub:any) => {
            return {
              name:student.username,
              subjectName:sub.name,
              degree:sub.degree
            }
          })
        }else {
          return [{
            name:student.username,
            subjectName:"-",
            degree:"-"
          }]
        }
       
      })
      console.log(this.dataSource)
      this.datatable = [];

      this.dataSource.forEach((item:any) => {
        item.forEach((subItem:any) => {
          this.datatable.push({
            name:subItem.name,
            subjectName:subItem.subjectName,
            degree:subItem.degree
          })
        })
      })
    })
    
  }
}

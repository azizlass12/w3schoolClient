import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.scss']
})
export class MatieresComponent implements OnInit {
dataArray:any
  subjects: any;
  user: any;
  constructor(private dc:DoctorService, private toast:ToastrService,private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.getSubjeccts()
    this.getUserInfo()
  }
getSubjeccts()
{
  // this.dc.getAllSubjects().subscribe((res:any)=>{
  //   this.dataArray=res
  //   console.log(this.dataArray)
  // })
}
delete(id:number,i:any) {
  this.dc.deleteSubject(id).subscribe(res => {
    this.dataArray.splice(i , 1)

    this.toast.success("تم حذف المادة بنجاح")
  })
}
getUserInfo() {
  this.ds.getRole().subscribe(res=> {
    this.user = res
  })
}
affiche(id:any,i:any)
{
  this.router.navigate(['myexam/'+id]);

}
}

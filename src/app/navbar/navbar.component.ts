import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private ds:DataService) { }
  user :any = null   // inisialisation value  (1)
  ngOnInit(): void {
    this.ds.user.subscribe((res :any) =>{
      if(res.role) {
        this.user = res
      }
      console.log(this.user)

    })
  }
  logout() {
    const model = {}
    this.ds.login(model).subscribe(res => {
      this.user = null
      this.ds.user.next(res)
    })
  }
 
}

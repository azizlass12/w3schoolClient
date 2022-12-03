import { Component ,OnInit} from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private ds:DataService){

  }  /// make constructor (2)
  ngOnInit(): void {
    this.getUserData() // (4)
  }
  title = 'quiz';





  getUserData()
  {
    this.ds.getRole().subscribe(res =>{ // get data if page refreshed (4)
    this.ds.user.next(res) 
    // (6)
    })  
  }
}

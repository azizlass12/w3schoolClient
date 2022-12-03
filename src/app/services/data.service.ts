import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }  
  user = new Subject()  // put data here (5)

  getUsers(type:string){
    return this.http.get(environment.baseApi+type)
  }
  createUser(model:any) {
    return this.http.post(environment.baseApi+'students' , model)
  }
  login(model:any) {
    return this.http.put(environment.baseApi+'login/1' , model)
  }
  getRole() {
    return this.http.get(environment.baseApi+'login/1')
  }// go to login , id num 1 and give me his data (3) => (2)
 
  updateStudent(id:number , model:any) {
    return this.http.put(environment.baseApi+"students/"+id , model)
  }
  getStudent(id:number) {
    return this.http.get(environment.baseApi+"students/"+id)
  }
}

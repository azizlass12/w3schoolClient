import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  //  createSubject(model:any) {
  //   return this.http.post(environment.baseApi + 'subjects/'  ,model)
  // }

  createSubject(body:any) {
    return this.http.post('http://localhost:4002/exam/addExam',body);

  }
  createQuestion(idExam:any,body:any) {
    return this.http.post('http://localhost:4002/question/addQuestion/'+idExam,body);

  }
  getAll() {
    return this.http.get('http://localhost:4002/exam/getAll')
  }
  getAll1() {
    return this.http.get('http://localhost:4002/exam/getAll')
  }
  createAnswer(idQuestion:any,body:any){
    return this.http.post('http://localhost:4002/answer/addAnswer/'+idQuestion,body);

  }

  



  updateSubject(model:any , id:number) {
    return this.http.put(environment.baseApi + 'subjects/'+id  ,model)
  }
  

  // getAllSubjects() {
  //   return this.http.get(environment.baseApi + 'subjects/')
  // }
  getSubject(id:number) {
    return this.http.get(environment.baseApi + 'subjects/'+id)
  }

  deleteSubject(id:number) {
    return this.http.delete(environment.baseApi + 'subjects/'+id)
  }

}

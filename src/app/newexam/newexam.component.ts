import { HttpErrorResponse } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs';
import { DataService } from '../services/data.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-newexam',
  templateUrl: './newexam.component.html',
  styleUrls: ['./newexam.component.scss'],
})
export class NewexamComponent implements OnInit {
  name = new FormControl('');
  Questions= new FormControl('');
  questionForm!: FormGroup;
  questions: any[] = [];
  correctNum: any;
  subjectName: any;
  stepperIndex = 0;
  startAdd: boolean |undefined
  preview: boolean = false;
  id: any;
  _id: any;

  dataArray: any;
  data: any;
  idExam: any;
  f1: any;
  f: any;
  f2: any;

  dataArray1: any;
  idQuestion: any;
  steppe: boolean = false;
  ss: any;
  dataTest: any;
  answerQuestion: any;
  preview2: boolean=false;
  dataArrays: any;
  dataArray2: any;
  Question: any;
  subject: any;
  quest: any;
  stepper: any;
  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private ds: DoctorService
  ) {
    //   this.ds.getAll().subscribe((data:any)=>{
    //     this.dataArray=data.data.at(-1)
    //     this.id=this.dataArray._id
    //  })
  }
  ngOnInit(): void {
    this.getAll();
    // this.getidQ;
    
    
    // this.createAnswer;
  }

  getAll() {
    this.ds.getAll().subscribe((data: any) => {
      this.dataArray = data.data.at(-1);
      this.dataArray1 = this.dataArray?.Question.at(-1);
      // console.log(this.dataArray)
      this.idExam = this.dataArray?._id;
      this.idQuestion = this.dataArray1?._id;
   
      console.log(this.idExam);
      console.log(this.dataArray1);
      // this.idAnswer=
      // console.log(this.id)
      //  console.log(this.dataArray1)
    });
  }

  // getidQ() {
  //   this.ds.getAll().subscribe((data: any) => {
  //     this.dataArray = data.data.at(-1);
  //     this.dataArray1 = this.dataArray;
  //     // console.log(this.dataArray)
  //     // this.id=this.dataArray._id
  //     // this.idAnswer=
  //     // this.idQuestion=this.dataArray1._id

  //     console.log(this.dataArray1.Question1);
  //   });
  // }

  createSubject(f: any) {
    let data = f.value;

    this.ds.createSubject(data).subscribe((data: any) => {
      //   this.route.navigate(['/client/contact']
      //  )


      // this.dataTest = data;
      // if (this.dataTest.HttpErrorResponse) {
      console.log(this.startAdd,this.stepperIndex)
      //   
     this.stepperIndex = 1;
      // }
      // else  {
   

      // }
    },(err:HttpErrorResponse)=>{
      this.startAdd = false;
   
      this.toaster.error('يرجي ادخال اسم المادة');
      this.name.defaultValue
      console.log(this.startAdd,this.stepperIndex)
    }
    );    

    // console.log(this.dataArray)
  }

  // start() {
  //   if(th{is.ss == "") {
  //     this.toaster.error("يرجي ادخال اسم المادة")

  //   }

  // }

  createQuestion() {
    const data = {
      Question : this.Questions.value
    };
    // console.log(data)

    this.ds.createQuestion(this.idExam, data).subscribe((data) => {
      //   this.route.navigate(['/client/contact']
      //  )
      // console.log(this.id);
      this.ds.getAll1().subscribe((data: any) => {

        this.dataArray = data.data.at(-1);

        this.dataArray1 = this.dataArray;

        this.idQuestion = this.dataArray1.Question.at(-1);

             console.log(this.dataArray,'yujuy' );

                    console.log(this.dataArray1);

                            console.log(this.idQuestion);


        this.preview  = true;
        this.stepperIndex = 2;
      });
    }
    ,(err:HttpErrorResponse)=>{
      this.preview  = false;
   
      this.toaster.error('يرجي ادخال اسم المادة');
      this.name.defaultValue
      console.log(this.preview ,this.stepperIndex)
    }
    ) 
  }
  createAnswer(f2: any) {
    let data = f2.value;

    // console.log(data)
    this.ds.createAnswer(this.idQuestion, data).subscribe((data: any) => {
      //   this.route.navigate(['/client/contact']
      //  )

      this.preview2  = true;
      this.stepperIndex = 3;
      


      this.ds.getAll1().subscribe((data: any) => {
        this.dataArray = data.data.at(-1);
        this.dataArray1 = this.dataArray;
        // console.log(this.dataArray)
        // this.id=this.dataArray._id
        // this.idAnswer=
        this.idQuestion = this.dataArray1.Question.at(-1);
        
        this.Question=this.dataArray1
        this.subject=this.Question.subjectName
        this.quest=this.Question.Question

        console.log(this.quest,"this");
      });
    }
    );
  }



  createQuestion1() {
    // if(this.correctNum) {
    //   const model = {
    //     question: this.questionForm.value.question,
    //     answer1: this.questionForm.value.answer1,
    //     answer2: this.questionForm.value.answer2,
    //     answer3: this.questionForm.value.answer3,
    //     answer4: this.questionForm.value.answer4,
    //     correctAnswer:this.questionForm.value[this.correctNum]
    //   }
    //   this.questions.push(model)
    //   this.questionForm.reset()
    // }else {
    //   this.toaster.error("يرجي اختبار الاجابة الصحيحه")
    // }
    // console.log(this.questions)
  }



  cancel() {
    // this.questionForm.reset()
    // this.questions = [];
    // this.subjectName = "";
    // this.name.reset();
    // this.stepperIndex = 0;
    // this.startAdd = false
  }
  previews()
  {
    this.startAdd=false
this.stepperIndex=1

  }
  clearForm() {

  }


  delete(index: number) {
    this.questions.splice(index, 1);
    const model = {
      name: this.subjectName,
      questions: this.questions,
    };

    this.ds.updateSubject(model, this.id).subscribe((res) => {
      this.toaster.success('تم حذف السؤال بنجاح');
    });
  }
  submit(startAdd:boolean) {
    const data = {
      subjectName : this.name.value
    };
    
 
     
      if(this.subjectName){
        console.log(this.startAdd)
        this.ds.createSubject(data).subscribe((res:any) => {}) 
        console.log(this.startAdd)
        this.startAdd=true
this.stepperIndex=1
      

      }else {
        this.startAdd = true
        this.subjectName = this.name.value
      }
  
      if(this.startAdd) {
        this.stepperIndex = 1
      }
    }
    start()  {
     
      if(this.name.value == "") {
        this.toaster.error("يرجي ادخال اسم المادة")
        console.log(this.startAdd)
      }else {
       this.startAdd = true  
       
               console.log(this.startAdd)

         const data = {
          subjectName : this.name.value
        };
        this.ds.createSubject(data).subscribe((res:any) => {
          this.stepperIndex =  1

        }) 

      }}
    
      
  
      
}









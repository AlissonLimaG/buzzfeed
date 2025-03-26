import { Component, OnInit } from '@angular/core';
import { QuestionType } from 'src/app/types/QuestionType';
import data from 'src/assets/data/quizzQuestions.json';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  title: string = '';

  questions!: QuestionType[];
  questionSelected!: QuestionType;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;

  result:string = '';

  ngOnInit(): void {
    if(data){
      this.finished=false;
      this.title = data.title;
      this.questions = data.questions;
      this.questionSelected = this.questions[this.questionIndex];
      this.questionIndex=0;
      this.questionMaxIndex = this.questions.length;

    }
  }

  playerChoice(value: string):void {
    this.answers.push(value);
    this.nextStep();
  }

    nextStep(){
      this.questionIndex += 1;
      if(this.questionMaxIndex > this.questionIndex){
        this.questionSelected = this.questions[this.questionIndex];
      }else{
        this.finished = true;
        this.setResult(this.answers);
      }
    }

    setResult(answers:string[]){
      let a:number = 0;
      let b:number = 0;
      for(let answer of answers){
        if(answer === 'A') a++;
        else b++;
      }
      this.result = a>b ?'Você muito provavelmente seria um super vilão!'
                        :'Você muito provavelmente seria um super Herói!'
    }

}

import { Component, OnInit, Input, Output, EventEmitter, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  @Input()
  num1:Number = 0;

  @Output()
	addNumEvent = new EventEmitter<number>();
  

  constructor() { }

  ngOnInit(): void {
    // console.log('num1',this.num1);
  }

  ngOnChanges(changes:any) {
    console.log(changes,"changes");
  }

  showResult(val:Number) {
   
  
}
}

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
  }

  ngOnChanges(changes:any) {
    if((changes.num1.currentValue !== changes.num1.previousValue)) {
      this.showResult(changes.num1.currentValue);
    }
  }

  showResult(val:Number) {
    let result = 0;  //Modify the Value

    if(val > 0) {
      result = Number(val)*100;
    } else {
      result = Number(val)/100;
    }
    this.addNumEvent.emit(result);
  
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  
  num1:Number = 0;
  result = 0;

  
  ngOnInit(): void{ }

  //printResult function called
  printResult(res: any) {
		this.result = res;
	}

}

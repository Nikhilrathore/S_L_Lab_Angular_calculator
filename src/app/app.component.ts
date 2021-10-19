import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  public num1:number;
  public num2:number;
  public num3:number;
  public num4:number;



  add(){
    this.num3=this.num1+this.num2; 
  }

  sub(){
    this.num3=this.num1-this.num2; 
  }

  mul(){
    this.num3=this.num1*this.num2; 
  }

  div(){
    this.num3=this.num1/this.num2; 
  }

  fac(){
    this.num3=this.num1%this.num2; 
  }

  fac2(){
    var i, no, num3;
    num3=1;
    for(i=1; i<=this.num1; i++){
      num3= num3*i;
    }
    
  }

  

  prime(){
    let n = 0;
    let  i, flag = true;
    if(this.num1 === 1){
      this.num4 = 0;
      return;
    }
    for (i = 2; i < this.num1; i++) {
        if (this.num1 % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag === true) {
        this.num4 = 1;
    } else {
      this.num4 = 0;
    }
  }



}

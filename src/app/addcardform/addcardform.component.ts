import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-addcardform',
  templateUrl: './addcardform.component.html',
  styleUrls: ['./addcardform.component.scss']
})
export class AddcardformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//array that is store card data 
dataArray :any = new Array();

//form data 
formData : any={
  "question":"",
  "answer":""
};

//form submit function
onSubmit(data:NgForm){
  this.dataArray.push(data.value);
  this.clearData(data);
}
// clear form data
clearData(data:NgForm){
  data.resetForm();

}
//variables for animation
panelOpenState = false;
update = true;
index :number = -1;




rightCheck(event,click){
  event._element.nativeElement.style.backgroundColor="green";
  click._elementRef.nativeElement.attributes.color.value="red";
  

}

wrongCheck(event,click){
  event._element.nativeElement.style.backgroundColor="red";
}

removeData(event){
  let data = event;
  this.dataArray.forEach( (item, index) => {
    if(item === data) this.dataArray.splice(index,1);
  });
}


updateData(event){
  this.formData.question=event.question;
  this.formData.answer=event.answer;
  this.index = this.dataArray.indexOf(event);
  this.update=false;

}

onUpdate(form:NgForm){
   this.dataArray[this.index] = form.value;
   this.update=true;
   this.clearData(form);
}

}


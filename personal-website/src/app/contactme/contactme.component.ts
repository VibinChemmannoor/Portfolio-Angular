import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
  formSubmitted=false;
  userName='';
  constructor() {} 

  ngOnInit(): void {
  }
  onSubmit(from:NgForm){
    this.formSubmitted = true;
    this.userName = from.value.name;
    console.log(from);
    from.reset();
    }
 
  }
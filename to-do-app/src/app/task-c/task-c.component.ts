import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-c',
  templateUrl: './task-c.component.html',
  styleUrls: ['./task-c.component.css']
})

export class TaskCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}

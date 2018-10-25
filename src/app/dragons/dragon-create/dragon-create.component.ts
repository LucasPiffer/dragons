import { Component, OnInit } from '@angular/core';
import { Dragon } from '../dragon';
import { NgForm } from '@angular/forms';
import { DragonService } from '../dragon.service';

@Component({
  templateUrl: './dragon-create.component.html',
  styleUrls: ['./dragon-create.component.css']
})

export class DragonCreateComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Dragon } from '../dragon';
import { NgForm } from '@angular/forms';
import { DragonService } from '../dragon.service';
import {Location} from '@angular/common';

@Component({
  selector: 'dragon-form',
  templateUrl: './dragon-form.component.html',
  styleUrls: ['./dragon-form.component.css']
})

export class DragonForm implements OnInit {
  feedback: any = null;
  @Input() dragon: Dragon = { histories: [], name: "", type: "", slug: "", created_at: '' }
  @Input() action: string;

  errorMessage: string;
  feedbackClass: string = null;
  histories: string[] = [];
  historyInput: string;

  constructor(private dragonService: DragonService, private _location: Location) { }

  ngOnInit() {
    this.histories = this.dragon.histories
  }

  addHistory() {
    this.histories.push(this.historyInput);
    this.historyInput = '';
  } 

  backClicked(event) {
      event.preventDefault();
      console.log('aqui');
      this._location.back();
  }

  onSubmit(frm) {
    const request = { name: this.dragon.name, 
      type: this.dragon.type, histories: this.histories }
    
    if(this.action == 'update') {
      this.dragonService.updateDragon(request, this.dragon.slug).subscribe(
        response =>  {
          this.feedback = { msg: "Dragon was saved! "}
          this.feedbackClass = 'alert alert-success';
          //this.dragon = response.item 
        },
        error => this.errorMessage = <any>error
      )
    } else {
      this.dragonService.postDragon(request).subscribe(
        response =>  {
          this.feedback = { msg: "Dragon was saved! "}
          this.feedbackClass = 'alert alert-success';
          frm.reset();
          this.histories = [];
        },
        error => this.errorMessage = <any>error
      )
    }
  }

}

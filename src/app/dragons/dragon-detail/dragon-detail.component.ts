import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Dragon} from '../dragon'
import { DragonService } from '../dragon.service';

@Component({
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.css']
})

export class DragonDetailComponent implements OnInit {
  pageTitle: string = 'Dragon Details';
  dragon: Dragon;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private dragonService: DragonService) { }

  ngOnInit() {
    let dragonSlug = this.route.snapshot.paramMap.get('slug');

    this.dragonService.getDragon(dragonSlug).subscribe((response) => {
      this.dragon = response;
    }, 
    error => this.errorMessage = <any>error)
  }

  onBack(): void {
    this.router.navigate(['/dragons'])
  }

}

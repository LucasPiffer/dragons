import {Component, OnInit} from '@angular/core'
import {Dragon} from '../dragon';
import { DragonService } from '../dragon.service';

@Component({
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.css']
})

export class DragonListComponent implements OnInit {
  _listFilter: string;
  filteredDragons: Dragon[];
  pageTitle: string = 'Dragons List';
  dragons: Dragon[];
  errorMessage: string;
  metadata: any;
  pages: number[];
  page: number = 0;

  constructor(private dragonService: DragonService) {}

  sort(array): Dragon[] {
    return array.sort(function(a, b){
      var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
      if (nameA < nameB) //sort string ascending
       return -1;
      if (nameA > nameB)
       return 1;
      return 0; //default return value (no sorting)
     });
  }

  ngOnInit() {
    this.dragonService.getDragons(null).subscribe((response) => {
      this.dragons = this.sort(response.items);
      this.metadata = response._metadata;
      this.pages = Array.from({length: Math.ceil(this.metadata.total_count / this.metadata.per_page)}, (v, k) => k); 
      this.filteredDragons = this.dragons;
    }, 
    error => this.errorMessage = <any>error)
  }

  get listFilter(): string {
    return this._listFilter;
  };

  set listFilter(param: string) {
    this._listFilter = param;
    this.filteredDragons = this.listFilter ? this.performFilter(this.listFilter) : this.dragons;
  };
  
  performFilter(value: string): Dragon[] {
    value = value.toLocaleLowerCase();
    
    return this.dragons.filter((dragon: Dragon) => {
      return dragon.name.toLocaleLowerCase().indexOf(value) !== -1 
    });
  }

  goNext(event) {
    event.preventDefault();
    if(this.pages.length > 0 && this.page + 1 <= this.pages.length ) {
      this.page += 1;
      this.changePage(this.page, null);
    }
  }

  goPrevious(event) {
    event.preventDefault();  
    if(this.page - 1 >= 0 && this.pages.length > 0 ) {
      this.page -= 1;
      this.changePage(this.page, null);
    }
  }

  navigationClass(pageNumber: number) {
    let active = '';
    
    if(pageNumber == this.page) {
      active = 'active';
    }

    return 'page-item ' + active;
  }

  changePage(page: number, event: Event) {
    this.page = page;
    if(event) event.preventDefault();

    this.dragonService.getDragons(page).subscribe((response) => {
      if(response._metadata.page_count < 1 && this.page > 0) { 
        this.page -= 1;
        this.changePage(this.page, null)
        return;
      }

      this.dragons = this.sort(response.items);
      this.metadata = response._metadata;
      this.pages = Array.from({length: Math.ceil(this.metadata.total_count / this.metadata.per_page)}, (v, k) => k); 
      this.filteredDragons = this.dragons;
    }, 
    error => this.errorMessage = <any>error)
  }

  deleteDragon(slug: string) {
    if(confirm('Are you sure you want to remove it?')) {
      this.dragonService.deleteDragon(slug).subscribe((response) => {
        alert('Dragon was removed with success');
       
        this.changePage(this.page, null);
      }, 
      error => this.errorMessage = <any>error)
    }
  }
}
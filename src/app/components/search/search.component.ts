import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

 
  ngOnInit(){
    this.search.valueChanges
    .pipe(debounceTime(300))
      .subscribe(valor => this.searchEmitter.emit(valor || '') )
    /* nos suscribismo a ese cambio y cuando lo haya, searchEmiter emite el valor */
  }

  search = new FormControl('')


  @Output('buscar')searchEmitter = new EventEmitter<string>()
 
    
}

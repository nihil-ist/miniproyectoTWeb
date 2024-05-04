import { Component,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  search:string="";
  @Output() spread = new EventEmitter<string>();
  onSpread(){
    this.spread.emit(this.search);
  }
}

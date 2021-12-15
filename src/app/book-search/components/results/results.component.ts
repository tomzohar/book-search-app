import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './../../../state/interface/book.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() set value(val: Book[] | null) { this.books = val ? val : []; }
  @Output() load: EventEmitter<number> = new EventEmitter();
  books: Book[] = [];
  loadMore(): void { this.load.emit(this.books.length -1); }
}

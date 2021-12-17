import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { BookSearchService } from './../../book-search/services/book-search.service';
import { loadMore, moreLoaded, response, search } from './books.actions';

@Injectable()
export class BooksEffects {
  booksSearch$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    mergeMap((action) => {
      return this.api.searchBooks(action.payload)
      .pipe(
        map(res => response({ payload: { books: res.items, totalItems: res.totalItems } }) )
      )
    })
  ));
  loadMore$ = createEffect(() => this.actions$.pipe(
    ofType(loadMore),
    mergeMap((action) =>
      this.api.searchBooks(this.booksSearchService.buildQuery(action.payload.lastQuery, action.payload.index))
        .pipe(
          map(res => res.items),
          map((books) => (moreLoaded({ payload: books }))),
          catchError(() => EMPTY)
        ))
  ));

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private booksSearchService: BookSearchService
  ) { }
}



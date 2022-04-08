import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, filter, map, mergeMap, startWith, switchMap, tap } from 'rxjs/operators';
import { ITheme } from '../../../core/interfaces';
import { ThemeService } from '../../../core/theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit, AfterViewInit {
  l10n = {
    'en': {
      'no-themes-message': 'No themes!'
    },
    'bg': {
      'no-themes-message': 'Няма теми!'
    }
  }

  localize(key: string, l10n: Map<string, Map<string, string>>) {
    const local = 'bg';

    return l10n[local][key];
  }

  private pageChange$ = new BehaviorSubject(undefined);

  themeList: ITheme[];

  readonly pageSize = 4;
  currentPage: number = 0;
  totalResults: number = 0;

  searchControl = new FormControl('');

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    combineLatest([
      this.searchControl.valueChanges.pipe(
        debounceTime(300),
        // filter(searchTerm => searchTerm.length > 3),
        startWith(''),
        tap(searchTerm => (console.log('searchTerm', searchTerm))
        )),
      this.pageChange$
    ])
      .pipe(
        switchMap(([searchTerm]) => this.themeService.loadThemePaginatedList(searchTerm, this.currentPage * this.pageSize, this.pageSize))
      )
      .subscribe(themeList => {
        this.totalResults = themeList.totalResults;
        this.themeList = themeList.results;
      });
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

  goOnePageBack(): void {
    this.currentPage--;
    this.pageChange$.next(undefined);
  }

  goOnePageForward(): void {
    this.currentPage++;
    this.pageChange$.next(undefined);
  }

}

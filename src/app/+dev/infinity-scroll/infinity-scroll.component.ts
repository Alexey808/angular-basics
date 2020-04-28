import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { InfinityScrollService, ITestItem } from './infinity-scroll.service';


@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.component.html',
  styleUrls: ['./infinity-scroll.component.scss']
})
export class InfinityScrollComponent {
  dataSource: ItemsDataSource;

  constructor(private service: InfinityScrollService) {
    this.dataSource = new ItemsDataSource(service);
  }
}

export class ItemsDataSource extends DataSource<ITestItem | undefined> {
  private cachedTestItems = Array.from<ITestItem>({length: 0});
  private dataStream = new BehaviorSubject<(ITestItem | undefined)[]>(this.cachedTestItems);
  private subscription = new Subscription();

  private pageSize = 10;
  private lastPage = 0;

  constructor(
    private service: InfinityScrollService,
  ) {
    super();
    this.fetchItemsPage();
  }

  connect(collectionViewer: CollectionViewer): Observable<(ITestItem | undefined)[] | ReadonlyArray<ITestItem | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {

      const currentPage = this.getPageForIndex(range.end);

      if (currentPage && range) {
        console.log(currentPage, this.lastPage);
      }

      if (currentPage > this.lastPage) {
        this.lastPage = currentPage;
        this.fetchItemsPage();
      }
    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  /* additional methods */
  private fetchItemsPage(): void {
    for (let i = 0; i < this.pageSize; ++i) {
      this.service.getTestItems().subscribe(res => {
        console.log(res);
        this.cachedTestItems = this.cachedTestItems.concat(res);
        this.dataStream.next(this.cachedTestItems);
      });
    }
  }

  private getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }

}

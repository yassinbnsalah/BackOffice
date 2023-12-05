import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginat',
  templateUrl: './paginat.component.html',
  styleUrls: ['./paginat.component.css']
})
export class PaginatComponent implements OnInit {

  totalItems: number = 100;
  pageSize: number = 10;
  paginatedData: any[] = [];

  allData: any[] = Array.from({ length: this.totalItems }, (_, i) => `Item ${i + 1}`);

  ngOnInit() {
    this.paginateData(0); // Initial pagination, displaying the first page
  }

  getPageData(event: any) {
    const pageIndex = event.pageIndex;
    this.paginateData(pageIndex);
  }

  paginateData(pageIndex: number) {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.allData.slice(startIndex, endIndex);
  }
}

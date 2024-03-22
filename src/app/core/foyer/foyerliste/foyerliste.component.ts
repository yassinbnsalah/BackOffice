import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-foyerliste',
  templateUrl: './foyerliste.component.html',
  styleUrls: ['./foyerliste.component.css']
})
export class FoyerlisteComponent implements OnInit {
  foyers: Foyer[] = []; 
  idFoyer: number | undefined; 
  search = '';
  showAddFoyer = false;
  role: string | null = null;
  CurrentUser: any | null = null;
  newEtat = true; 
  paginatedData: Foyer[] = [];
  totalItems = 0;
  pageSize = 2;
  currentPage = 1;
  pageSizeOptions: number[] = [2, 5, 20]; // Page size options

  constructor(
    private foyerService: FoyerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.setInitialPageSize();
  }
  
  loadData() {
    this.foyerService.getAllFoyer().subscribe((data: Foyer[]) => {
      this.foyers = data || []; // Ensure foyers is initialized
      this.totalItems = this.foyers.length;
      this.filterData();
    });
  }

  onFoyerAdded(newFoyer: Foyer) {
    this.paginatedData.push(newFoyer); 
    this.showAddFoyer = false;
  }

  GoToAddFoyer() {
    this.showAddFoyer = true;    
  }

  GoToFoyerDetail(id: any) {

      this.router.navigate(['admin/foyer/'+ id]);
    
  }
  
  getListeFoyer() {
    console.log(this.router.url);
  }

  filterData() {
    if (!this.foyers) return; // Ensure foyers is available
    const filtered = this.foyers.filter(item =>
      item.nomFoyer.toLowerCase().includes(this.search.toLowerCase())
    );
    this.totalItems = filtered.length;
  
    // Update pagination based on page size and current page
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalItems);
    this.paginatedData = filtered.slice(startIndex, endIndex);
  }

  onSearch() {
    this.currentPage = 1; // Reset to the first page when a new search is performed
    this.filterData();
  }

  getPageData(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.filterData();
  }

  setInitialPageSize() {
    if (this.pageSizeOptions && this.pageSizeOptions.length > 0) {
      this.pageSize = this.pageSizeOptions[0];
      this.filterData();
    }
  }
}

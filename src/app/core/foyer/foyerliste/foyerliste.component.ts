import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { PageEvent } from '@angular/material/paginator';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';


@Component({
  selector: 'app-foyerliste',
  templateUrl: './foyerliste.component.html',
  styleUrls: ['./foyerliste.component.css']
})
export class FoyerlisteComponent implements OnInit {
  foyers !: Foyer[] ; 
  idFoyer!: number; 
  search='';
  showAddFoyer:Boolean=false;
  role!:string;
  CurrentUser!:any;
  newEtat!: true; 
  paginatedData!: Foyer[] ;
  totalItems: number = 0;
  pageSize!: number;
  currentPage: number = 1;
  pageSizeOptions: number[] = [2, 5, 20]; // Page size options

  constructor(private foyerService : FoyerService,
    private storageService: StorageService,
    private activatedRoute : ActivatedRoute  ,
  
    private router:Router){}
  ngOnInit(): void {
    this.foyers = this.activatedRoute.snapshot.data["data"].foyerListe ;
    this.CurrentUser = this.storageService.getUser()!;
    console.log('Current user:', this.CurrentUser); // Vérifiez si les données utilisateur sont récupérées correctement

    this.role = this.CurrentUser.role[0];
    console.log('Role:', this.role);
    this.loadData();
    this.setInitialPageSize();
   
   
  }
  
  loadData() {
    if(this.router.url== "/admin/foyer"){
      this.foyerService.getAllFoyer().subscribe((data: Foyer[]) => {
        this.foyers = data;
        this.totalItems = this.foyers.length;
        this.filterData();
      })
  }else{
    this.foyerService.getFoyerByUniversiteName(this.activatedRoute.snapshot.params["universite"]).subscribe((data)=>{
      this.foyers = data;
      this.totalItems = this.foyers.length;
      this.filterData();
      
      })
  }
   
  }
  onFoyerAdded(newFoyer: Foyer) {
   this.paginatedData.push(newFoyer); 
    this.showAddFoyer=false;
  }

  GoToAddFoyer(){
    this.showAddFoyer=true;    
    //this.router.navigate([this.activatedRoute.snapshot.params["universite"]+'/foyer/addFoyer'])
  }

  GoToFoyerDetail(id:any){
    if(this.role == "ADMIN"){
      this.router.navigate(['/admin/foyer/'+id])
    }
    else{
      this.router.navigate([this.activatedRoute.snapshot.params["universite"]+'/foyer/'+id])
    }
  }
  
  getListeFoyer(){
   
    console.log(this.router.url);
    
   
   
      
  }
  filterData() {
    const filtered = this.foyers.filter(item =>
      item.nomFoyer.toLowerCase().includes(this.search.toLowerCase())
    );
    this.totalItems = filtered.length;
  
    // Mettre à jour la pagination en fonction de la taille de la page et de la page actuelle
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
  updateFoyerEtat(idFoyer: number): void {
    this.foyerService.updateFoyerEtat(idFoyer)
      .subscribe(
        () => {
          console.log('Foyer Etat updated successfully');
     
        }
      );
      }
}

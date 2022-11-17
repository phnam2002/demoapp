import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cndv } from '../cndv';
import { CndvService } from '../cndv.service';

@Component({
  selector: 'app-cndv-list',
  templateUrl: './cndv-list.component.html',
  styleUrls: ['./cndv-list.component.css']
})
export class CndvListComponent implements OnInit {
  indexPagination: number = 0;
  totalPagination: number;
  cndvs: Cndv[];
  listCndvsNotPagination:  Cndv[] = [];


  constructor(private cndvService: CndvService,
    private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.getCndvs();
    
    this.cndvService.getCndvsListNoPaging().subscribe((data: Cndv[]) => {
      this.listCndvsNotPagination = data;
      console.log("Length: " + this.listCndvsNotPagination.length);
      if ((this.listCndvsNotPagination.length % 5) != 0) {
        this.totalPagination = (Math.round(this.listCndvsNotPagination.length / 5)) + 1;
      }else
      {
        this.totalPagination = this.listCndvsNotPagination.length / 5 ; 
      }
      console.log("total: " + this.totalPagination);
    })
  }

  private getCndvs(){
    this.cndvService.getCndvsList(0,{}).subscribe(data => {
      this.cndvs = data;
    });
  }

  firstPage() {
    this.indexPagination = 0;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.cndvService.getCndvsList(this.indexPagination,{}).subscribe((data: Cndv[]) => {
      this.cndvs = data;
    })
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination == 0) {
      this.ngOnInit();
    } else {
      this.cndvService.getCndvsList(this.indexPagination,{}).subscribe((data: Cndv[]) => {
        this.cndvs = data;
      })
    }
  }

  updateCndv(id :number){
    this.router.navigate(['update-cndvs',id]);
  }

  deleteCndv(id :number){
    this.cndvService.deleteCndv(id).subscribe(data =>{
      console.log(data);
      this.getCndvs();
    })
  }

  public searchCndvs(ma : String , tenNgan : String , diaChiCn : String, tenDayDu : String): void {
    let result = {"ma" :  ma,"tenNgan" : tenNgan , "diaChiCn" : diaChiCn , "tenDayDu" : tenDayDu };
    console.log(result);
    this.cndvService.getCndvsList(0,result).subscribe(data => {
      this.cndvs = data;
    });
  }

}

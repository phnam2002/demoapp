import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cndv } from '../cndv';
import { CndvService } from '../cndv.service';

@Component({
  selector: 'app-create-cndv',
  templateUrl: './create-cndv.component.html',
  styleUrls: ['./create-cndv.component.css']
})
export class CreateCndvComponent implements OnInit {

  cndv: Cndv = new Cndv();
  constructor(private cndvService: CndvService, private router:Router) { }
  

  ngOnInit(): void {
  }

  saveCndv(){
    this.cndvService.createCndv(this.cndv).subscribe( data =>{
      console.log(data);
      this.goToCndvList();
    });
  }

  goToCndvList(){
    this.router.navigate(['/cndvs']);
  }

  onSubmit(){
    console.log(this.cndv);
    this.saveCndv();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cndv } from '../cndv';
import { CndvService } from '../cndv.service';


@Component({
  selector: 'app-update-cndv',
  templateUrl: './update-cndv.component.html',
  styleUrls: ['./update-cndv.component.css']
})
export class UpdateCndvComponent implements OnInit {

  id:number;
  cndv: Cndv = new Cndv();
  constructor(private cndvService: CndvService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params[`id`];
    this.cndvService.getCndvById(this.id).subscribe(data =>{
      this.cndv = data;
    });
  }

  updateCndv(){
    this.cndvService.updateCndv(this.id, this.cndv).subscribe(data =>
      {
      console.log(data);
      this.cndv = new Cndv();
      //this.gotoList();
    });
    
  }
  onSubmit(){
    this.cndvService.updateCndv(this.id,this.cndv).subscribe(data => {
      this.goToCndvList();
    });
  }

  goToCndvList(){
    this.router.navigate(['/cndvs']);
  }
}


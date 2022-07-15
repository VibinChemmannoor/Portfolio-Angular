import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  currentPage(){
    this.router.navigate(['/services'], {relativeTo:this.route});
  }
}

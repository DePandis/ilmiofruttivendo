import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private commonservice: CommonService) { }

  ngOnInit() {
    this.commonservice.getAllproducts().subscribe({
      complete: () => {
        console.log("completed");
      }
    })
  }
}

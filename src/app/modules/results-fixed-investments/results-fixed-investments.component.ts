import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';

@Component({
  selector: 'app-results-fixed-investments',
  templateUrl: './results-fixed-investments.component.html',
  styleUrls: ['./results-fixed-investments.component.scss']
})
export class ResultsFixedInvestmentsComponent {

  constructor(public router: Router, public fixedService: FixedInvestimentsServiceService) {
    fixedService.calcFixedInvestment()
  }

  backToSimulate() {
    this.router.navigate(['']);
  }

}

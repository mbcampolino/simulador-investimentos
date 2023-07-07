import { InvestmentModel } from './../../models/InvestmentModel';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';

@Component({
  selector: 'app-simulate-fixed-investments',
  templateUrl: './simulate-fixed-investments.component.html',
  styleUrls: ['./simulate-fixed-investments.component.scss']
})
export class SimulateFixedInvestmentsComponent {

  constructor(public router: Router, public fixedService: FixedInvestimentsServiceService) {}

  simulateInvestment() {
    this.router.navigate(['resultado']);
  }

}

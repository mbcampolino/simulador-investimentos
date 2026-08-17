import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FixedInvestimentsServiceService } from 'src/app/services/fixed-investiments-service.service';
import { InputModel } from 'src/app/models/historicData';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { CacheModel } from 'src/app/models/CacheModel';

@Component({
  selector: 'app-simulate-fixed-investments',
  templateUrl: './simulate-fixed-investments.component.html',
  styleUrls: ['./simulate-fixed-investments.component.scss']
})
export class SimulateFixedInvestmentsComponent {

  savedSimulations: CacheModel[] = []
  showSavedList = false

  constructor(public router: Router, public fixedService: FixedInvestimentsServiceService, public activeRoute: ActivatedRoute, public localStorageService: LocalstorageService) {

    this.savedSimulations = this.localStorageService.getItem()

    if (this.activeRoute.snapshot.queryParamMap.get('initialValue')) {
      this.simulateInvestment(this.getModel())
    }

  }

  getModel() : InputModel {

    var input = new InputModel()

    input.initialValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('initialValue')!!),
    input.dueDate = Number.parseInt(this.activeRoute.snapshot.queryParamMap.get('dueDate')!!),
    input.dueDateType = this.activeRoute.snapshot.queryParamMap.get('dueDateType')!!,
    input.taxType =  this.activeRoute.snapshot.queryParamMap.get('taxType')!!,
    input.taxValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('taxValue')!!),
    input.monthlyValue = Number.parseFloat(this.activeRoute.snapshot.queryParamMap.get('monthlyValue')!!)

    return input
  }

  setShowLastSearch() {
    this.localStorageService.showLastSearch =! this.localStorageService.showLastSearch
  }

  toggleSavedList() {
    this.savedSimulations = this.localStorageService.getItem()
    this.showSavedList = !this.showSavedList
  }

  openSavedSimulation(simulation: CacheModel) {
    this.router.navigateByUrl(simulation.url)
  }

  removeSavedSimulation(id: string) {
    this.localStorageService.remove(id)
    this.savedSimulations = this.localStorageService.getItem()
    this.showSavedList = this.savedSimulations.length > 0
  }

  simulateInvestment(model: InputModel) {

    this.fixedService.model = model

    const simulation = this.localStorageService.saveSimulation(model, [])

    var url = this.localStorageService.buildUrl(model, simulation.id)

    this.savedSimulations = this.localStorageService.getItem()
    this.showSavedList = false
    this.router.navigateByUrl(url);
  }

  updateTax(taxPerMonth : boolean) {
    this.fixedService.model.taxType = taxPerMonth ? "mês" : "ano"
  }

  updateInvestmentTime(dueDateType:boolean) {
    this.fixedService.model.dueDateType = dueDateType ? "mês" : "ano"
  }

  getToday() : string {
    return new Date().toISOString().slice(0, 10)
  }

}

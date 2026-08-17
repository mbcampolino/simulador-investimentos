import { Injectable } from '@angular/core';
import { CacheModel } from '../models/CacheModel';
import { HistoricData, InputModel } from '../models/historicData';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  cache : CacheModel[] = []
  showLastSearch = false

  readonly storageKey = 'simulacoes_investimentos'

  constructor() {
    this.cache = this.getItem()
  }

  add(cache: CacheModel) {
    this.cache = [...this.cache.filter(item => item.id !== cache.id), cache]
    this.save()
  }

  update(id: string, model: InputModel, historic: HistoricData[], name?: string) {
    const index = this.cache.findIndex(item => item.id === id)

    if (index >= 0) {
      this.cache[index] = {
        ...this.cache[index],
        model,
        historic,
        updatedAt: new Date().toISOString(),
        name: name ?? this.cache[index].name,
      }
      this.save()
      return this.cache[index]
    }

    return undefined
  }

  saveSimulation(model: InputModel, historic: HistoricData[] = [], name?: string): CacheModel {
    const now = new Date()
    const id = `${now.getTime()}-${Math.random().toString(16).slice(2)}`
    const item: CacheModel = {
      id,
      name: name ?? `Simulação ${now.toLocaleDateString('pt-BR')} ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`,
      url: this.buildUrl(model, id),
      model,
      historic,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString()
    }

    this.add(item)
    return item
  }

  buildUrl(model: InputModel, id: string): string {
    return 'resultado?initialValue=' + model.initialValue +
      '&monthlyValue=' + model.monthlyValue +
      '&dueDateType=' + model.dueDateType +
      '&taxType=' + model.taxType +
      '&taxValue=' + model.taxValue +
      '&dueDate=' + model.dueDate +
      '&startDate=' + model.initialDate +
      '&savedId=' + id
  }

  remove(id: string) {
    this.cache = this.cache.filter(item => item.id !== id)
    this.save()
  }

  private save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cache));
  }

  getItem(): CacheModel[] {
    var listSaved = localStorage.getItem(this.storageKey)
    if (listSaved) {
      return JSON.parse(listSaved);
    }
    return []
  }

  getById(id: string): CacheModel | undefined {
    return this.getItem().find(item => item.id === id)
  }
}

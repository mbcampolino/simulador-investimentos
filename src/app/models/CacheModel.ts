import { HistoricData, InputModel } from './historicData';

export interface CacheModel {
  'id' : string
  'name' : string
  'url' : string
  'model'?: InputModel
  'historic'?: HistoricData[]
  'createdAt'?: string
  'updatedAt'?: string
}

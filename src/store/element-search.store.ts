import { makeAutoObservable } from 'mobx';
import { CountryInfo } from '../api/apiService';

type ElementList = {
  сountryInfo: CountryInfo[];
  elementSearchKey: number;
};
class FirstElementSearchStore {
  elementsList: CountryInfo[][] = [];

  constructor() {
    makeAutoObservable(this);
  }
  changeElementList(payload: ElementList) {
    this.elementsList[payload.elementSearchKey] = payload.сountryInfo;
  }
}

export default new FirstElementSearchStore();

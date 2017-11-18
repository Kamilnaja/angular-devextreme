import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {Service, Dictionaries, DictionariesList} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  name: String;
  dataSource: Dictionaries[];
  dataSourceList: DictionariesList[];
  gridValue: number;
  currentGrid: any;
  constructor(service: Service) {
    this.dataSourceList = service.getDictionariesList();
    this.dataSource = service.getDictionaries();
  }

  onValueChanged($event) {
    // pobiera index tablicy wybranego elementu słownika
    this.gridValue = this.dataSourceList.indexOf($event.value);
    this.currentGrid = this.dataSource[this.gridValue].entries;
  }
}
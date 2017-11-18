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

  constructor(service: Service) {
    this.dataSourceList = service.getDictionariesList();
    this.dataSource = service.getDictionaries();
  }

  onValueChanged($event) {
    console.log(this.dataSourceList.indexOf($event.value));
    console.log(this.dataSourceList);
  }
}
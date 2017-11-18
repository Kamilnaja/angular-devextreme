import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import {Service, Dictionaries, CompanyList } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  name: String;
  dataSource: Dictionaries[];
  dataSourceList: CompanyList[];
  dataSourceDictionaryEntry: Dictionaries[];
  constructor(service: Service) {
    this.dataSourceList = service.getCompaniesList();
    this.dataSource = service.getDictionaries();
  }


  sayHello(params) {
    if (params.validationGroup.validate().isValid) {
      notify('hello ' + this.name + '!', 'info', 2000);
    }
  }

  logSelectValue() {
    console.log('value');
  }
}

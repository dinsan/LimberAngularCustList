/*
  By: DINSAN
  This is a demo of my work for Limber
  Date: Wednesday, June 26, 2019
 */

// this Component using for only list the customer

import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../shared/customer-service.service';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private cutomerService : CustomerServiceService) { }

  ngOnInit() {
    console.log(this.cutomerService.getCustomersList())
    this.cutomerService.getCustomersList();
  }

}

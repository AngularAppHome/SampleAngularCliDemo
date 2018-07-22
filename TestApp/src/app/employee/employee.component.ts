import { Component } from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'my-app',
  providers: [EmployeeService],
  template: `
  <table>
  <tr *ngFor="let item of sdata.result;">
    <td>{{item.mobile}}</td>
    <td>{{item.name}}</td>
    
  </tr>
  </table>

  `,
})
export class EmployeeComponent  { 
  
  private sdata:Array<stu>;
  constructor(private qs:EmployeeService){
    this.getEmployee();
  }
  public getEmployee(){
        this.qs.getEmployee().subscribe(data => this.sdata = data);
      }
  
 }

 interface stu{
  mobile:string;
  name:string;
 
}

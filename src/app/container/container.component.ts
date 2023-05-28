import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements AfterContentInit {
  @ContentChild(EmployeeComponent) emp!: EmployeeComponent;

  ngAfterContentInit(): void {
    this.emp.empName = 'John';
  }
}

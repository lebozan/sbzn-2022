import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AllDataService} from "../../service/all-data.service";

@Component({
  selector: 'app-second-entry',
  templateUrl: './second-entry.component.html',
  styleUrls: ['./second-entry.component.scss']
})
export class SecondEntryComponent implements OnInit {
  selectedEquipment: Array<string>;
  isSelected: boolean;
  displayedColumns = ['name'];
  tableData: any;

  constructor(
    private dataService: AllDataService
  ) {
    this.selectedEquipment = [];
    this.isSelected = false;
    this.tableData = new MatTableDataSource(this.selectedEquipment);
  }

  ngOnInit(): void {
  }


  selected(slot: string): void {

    this.isSelected = !this.isSelected;
    if (!this.selectedEquipment.includes(slot)) {
      this.selectedEquipment.push(slot);
    } else {
      this.selectedEquipment.splice(this.selectedEquipment.indexOf(slot), 1);
    }

    console.log(this.selectedEquipment);
  }

  sendSelection(): void {
    const secondEntryData = {
      buildId: sessionStorage.getItem('buildId'),
      selectedEquipment: this.selectedEquipment
    }
    this.dataService.sendSecondEntry(secondEntryData).subscribe(
      result => {
        console.log(result);
      }, error => {
        console.log(error);
      }
    )
  }

}

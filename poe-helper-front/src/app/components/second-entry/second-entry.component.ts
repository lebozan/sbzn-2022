import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {AllDataService} from "../../service/all-data.service";
import {Recommendations} from "../../model/recommendations";
import {Item} from "../../model/item";

@Component({
  selector: 'app-second-entry',
  templateUrl: './second-entry.component.html',
  styleUrls: ['./second-entry.component.scss']
})
export class SecondEntryComponent implements OnInit {
  selectedEquipment: Array<string>;
  isSelected: Array<boolean>;
  displayedColumns = ['name'];
  tableData: any;
  recommendationsReady: boolean;
  recommendations: Recommendations;
  itemInit: Item;

  constructor(
    private dataService: AllDataService
  ) {
    this.recommendationsReady = false;
    this.itemInit = {baseItem: "", implicit: "", prefixes: [], suffixes: []};
    this.recommendations = {
      amuletMods: this.itemInit,
      amuletSelected: false,
      beltMods: this.itemInit,
      beltSelected: false,
      bodyArmourMods: this.itemInit,
      bodyArmourSelected: false,
      bootsMods: this.itemInit,
      bootsSelected: false,
      glovesMods: this.itemInit,
      glovesSelected: false,
      helmetMods: this.itemInit,
      helmetSelected: false,
      mainHandMods: this.itemInit,
      mainHandSelected: false,
      offHandMods: this.itemInit,
      offHandSelected: false,
      ring1Mods: this.itemInit,
      ring1Selected: false,
      ring2Mods: this.itemInit,
      ring2Selected: false
    };
    this.selectedEquipment = [];
    this.isSelected = [false, false, false, false, false, false, false, false, false, false];
    this.tableData = new MatTableDataSource(this.selectedEquipment);
  }

  ngOnInit(): void {
  }


  selected(slot: string): void {

    if (slot === 'main hand') {
      this.isSelected[0] = !this.isSelected[0];
    } else if (slot === 'offhand') {
      this.isSelected[1] = !this.isSelected[1];
    } else if (slot === 'helmet') {
      this.isSelected[2] = !this.isSelected[2];
    } else if (slot === 'body armour') {
      this.isSelected[3] = !this.isSelected[3];
    } else if (slot === 'amulet') {
      this.isSelected[4] = !this.isSelected[4];
    } else if (slot === 'ring1') {
      this.isSelected[5] = !this.isSelected[5];
    } else if (slot === 'ring2') {
      this.isSelected[6] = !this.isSelected[6];
    } else if (slot === 'gloves') {
      this.isSelected[7] = !this.isSelected[7];
    } else if (slot === 'boots') {
      this.isSelected[8] = !this.isSelected[8];
    } else if (slot === 'belt') {
      this.isSelected[9] = !this.isSelected[9];
    }
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
        this.recommendationsReady = true;
        // console.log(this.recommendationsReady)
        this.recommendations = result
      }, error => {
        console.log(error);
      }
    )
  }

}

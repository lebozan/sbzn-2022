import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SkillGem} from "../../model/skill-gem";
import {AllDataService} from "../../service/all-data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Keystone} from "../../model/keystone";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-first-entry',
  templateUrl: './first-entry.component.html',
  styleUrls: ['./first-entry.component.scss']
})
export class FirstEntryComponent implements OnInit {
  @Input() activeGemsList: Array<SkillGem> | undefined;
  @Input() supportGemsList: Array<SkillGem> | undefined;
  @Input() keystonesList: Array<Keystone> | undefined;
  @Output() changeTab = new EventEmitter<boolean>();
  form: FormGroup;

  constructor(
    private dataService: AllDataService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      selectedActiveGems : ['', Validators.required],
      selectedSupportGems : [[], Validators.required],
      selectedKeystones : [[]],
      selectedWeapon : [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form.value.selectedActiveGems);
    console.log(this.form.value.selectedSupportGems);
    console.log(this.form.value.selectedKeystones);
    const firstEntryData = {
      skillSetup: [],
      keystones: this.form.value.selectedKeystones,
      weaponType: this.form.value.selectedWeapon
    }
    // @ts-ignore
    firstEntryData.skillSetup.push(this.form.value.selectedActiveGems);
    firstEntryData.skillSetup.push.apply(firstEntryData.skillSetup, this.form.value.selectedSupportGems);

    // console.log(firstEntryData);
    this.dataService.sendFirstEntry(firstEntryData).subscribe(
      result => {
        console.log(result);
        sessionStorage.setItem('buildId', result.id);
        this.changeTab.emit(true);
      }, error => {
        console.log(error);
      }
   );
  }

  weaponSelected(): void {
    console.log(this.form.value.selectedWeapon);
  }

}

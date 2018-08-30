import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})

export class RobotComponent implements OnInit {
  // robotType = ["Select..", "Flying Robot", "Wheeled Robot", "Walking Robot"];
  // robotColor = ["Gold", "Silver", "Bronze"];
  robotInfo = [
    { type: "Flying Robot", color: "Gold" },
    { type: "Wheeled Robot", color: "Silver" },
    { type: "Walking Robot", color: "Bronze" }
  ];
  selectedType = "Select..";
  selectedColor = "Select..";
  roborContent: any[] =[];
  isDisabled = true;
  constructor() { }

  ngOnInit() {}
  // addRobot(type, color): void {
  //   let selectedRobot = {type: type.value, color: color.value };
  //   this.roborContent.push(selectedRobot);
  // }
    
  /*display Selected Robot Type and color*/
   addRobot(): void {
    let selectedRobot = {type: this.selectedType, color: this.selectedColor};
    this.isDisabled = false;
    this.roborContent.push(selectedRobot);
     
    this.selectedType = "Select..";
    this.selectedColor = "Select..";
    this.isDisabled = true;
  }
  /*Remove Selected Robot Type and color*/
  removeRobot(index): void {
    let deletedRobot = this.roborContent[index];
    this.roborContent = this.roborContent.filter(v => v != deletedRobot);
  }
}
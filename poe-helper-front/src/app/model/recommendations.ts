import {Item} from "./item";

export interface Recommendations {
  helmetSelected: boolean;
  bodyArmourSelected: boolean;
  glovesSelected: boolean;
  bootsSelected: boolean;
  ring1Selected: boolean;
  ring2Selected: boolean;
  amuletSelected: boolean;
  beltSelected: boolean;
  mainHandSelected: boolean;
  offHandSelected: boolean;

  helmetMods: Item;
  bodyArmourMods: Item;
  glovesMods: Item;
  bootsMods: Item;
  ring1Mods: Item;
  ring2Mods: Item;
  amuletMods: Item;
  beltMods: Item;
  mainHandMods: Item;
  offHandMods: Item;

}

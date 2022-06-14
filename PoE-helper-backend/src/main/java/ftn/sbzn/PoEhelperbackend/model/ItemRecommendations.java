package ftn.sbzn.PoEhelperbackend.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Data
public class ItemRecommendations {
    private boolean helmetSelected;
    private boolean bodyArmourSelected;
    private boolean glovesSelected;
    private boolean bootsSelected;
    private boolean ring1Selected;
    private boolean ring2Selected;
    private boolean amuletSelected;
    private boolean beltSelected;
    private boolean mainHandSelected;
    private boolean offHandSelected;

    private Item helmetMods;
    private Item bodyArmourMods;
    private Item glovesMods;
    private Item bootsMods;
    private Item ring1Mods;
    private Item ring2Mods;
    private Item amuletMods;
    private Item beltMods;
    private Item mainHandMods;
    private Item offHandMods;

    public ItemRecommendations() {
        this.helmetSelected = false;
        this.bodyArmourSelected = false;
        this.glovesSelected = false;
        this.bootsSelected = false;
        this.ring1Selected = false;
        this.ring2Selected = false;
        this.amuletSelected = false;
        this.beltSelected = false;
        this.mainHandSelected = false;
        this.offHandSelected = false;
        this.helmetMods = new Item();
        this.bodyArmourMods = new Item();;
        this.glovesMods = new Item();;
        this.bootsMods = new Item();;
        this.ring1Mods = new Item();;
        this.ring2Mods = new Item();;
        this.amuletMods = new Item();;
        this.beltMods = new Item();;
        this.mainHandMods = new Item();;
        this.offHandMods = new Item();;

    }
}

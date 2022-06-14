package ftn.sbzn.PoEhelperbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Data
public class Item {

    private String baseItem;
    private String implicit;
    private List<String> prefixes;
    private List<String> suffixes;

    public Item() {
        this.prefixes = new ArrayList<>();
        this.suffixes = new ArrayList<>();
    }



}

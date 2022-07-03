package com.example.demo.Positions;

import com.example.demo.Drink.DrinkModel;

public class PositionModel
{
    private int ID;
    private DrinkModel Drink;
    private String State;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public DrinkModel getDrink() {
        return Drink;
    }

    public void setDrink(DrinkModel drink) {
        Drink = drink;
    }

    public String getState() {
        return State;
    }

    public void setState(String state) {
        State = state;
    }
}

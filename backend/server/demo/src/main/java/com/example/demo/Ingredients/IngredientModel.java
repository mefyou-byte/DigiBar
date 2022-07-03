package com.example.demo.Ingredients;

public class IngredientModel
{
    private int ID;
    private String Name;
    private String Description;
    private int PortionSize;
    private double PricePerPortion;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getPortionSize() {
        return PortionSize;
    }

    public void setPortionSize(int portionSize) {
        PortionSize = portionSize;
    }

    public double getPricePerPortion() {
        return PricePerPortion;
    }

    public void setPricePerPortion(double pricePerPortion) {
        PricePerPortion = pricePerPortion;
    }
}

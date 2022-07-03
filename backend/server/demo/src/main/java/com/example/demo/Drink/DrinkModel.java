package com.example.demo.Drink;

import com.example.demo.IngredientAmounts.IngredientAmount;
import com.example.demo.Ingredients.IngredientModel;

import java.util.List;

public class DrinkModel
{
    private int ID;
    private String Name;
    private String Description;
    private String Size;
    private double Price;
    private List<IngredientAmount> Ingredients;

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

    public String getSize() {
        return Size;
    }

    public void setSize(String size) {
        Size = size;
    }

    public double getPrice() {
        return Price;
    }

    public void setPrice(double price) {
        Price = price;
    }

    public List<IngredientAmount> getIngredients() {
        return Ingredients;
    }

    public void setIngredients(List<IngredientAmount> ingredients) {
        Ingredients = ingredients;
    }
}

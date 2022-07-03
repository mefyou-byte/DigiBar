package com.example.demo.IngredientAmounts;

import com.example.demo.Ingredients.IngredientModel;

public class IngredientAmount
{
    private IngredientModel Ingredient;
    private int Amount;

    public IngredientModel getIngredient()
    {
        return Ingredient;
    }

    public void setIngredient(IngredientModel ingredient)
    {
        Ingredient = ingredient;
    }

    public int getAmount()
    {
        return Amount;
    }

    public void setAmount(int amount)
    {
        Amount = amount;
    }



}

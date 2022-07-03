package com.example.demo.Ingredients;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/Ingredient")
public class IngredientController
{
    @GetMapping
    public List<IngredientModel> GetIngredient()
    {
        return List.of(new IngredientModel());
    }
}

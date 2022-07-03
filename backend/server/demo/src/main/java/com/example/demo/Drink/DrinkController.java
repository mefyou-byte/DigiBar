package com.example.demo.Drink;

import com.example.demo.DBConnector;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/Drink")
public class DrinkController
{
    @GetMapping
    public List<DrinkModel> GetDrink()
    {
        return List.of(DBConnector.getDrinks(0,null).toArray(new DrinkModel[0]));
    }
}

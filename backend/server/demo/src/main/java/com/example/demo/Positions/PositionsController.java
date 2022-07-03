package com.example.demo.Positions;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path= "/Position")
public class PositionsController
{
    @GetMapping
    public List<PositionModel> GetPosition()
    {
        return List.of(new PositionModel());
    }
}

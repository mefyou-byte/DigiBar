package com.example.demo.Orders;

import com.example.demo.DBConnector;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/Order")
public class OrderController
{
    @GetMapping
    public List<OrderModel> GetOrder()
    {
        return List.of(DBConnector.getOrders(0,null).toArray(new OrderModel[0]));
    }
}

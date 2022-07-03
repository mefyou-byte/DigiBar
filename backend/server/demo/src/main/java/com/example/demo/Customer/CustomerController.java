package com.example.demo.Customer;

import com.example.demo.DBConnector;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/Customer")
public class CustomerController
{
    @GetMapping
    public List<CustomerModel> GetCustomer()
    {
        return List.of(DBConnector.getCustomers(0,null).toArray(new CustomerModel[0]));
    }

    @PostMapping()
    public void InsertCustomer(String s)
    {
        
    }
}

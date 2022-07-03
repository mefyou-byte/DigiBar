package com.example.demo.Orders;

import com.example.demo.Customer.CustomerModel;
import com.example.demo.Positions.PositionModel;

import java.sql.Timestamp;
import java.util.List;

public class OrderModel
{
    private int ID;
    private int TableNr;
    private CustomerModel Customer;
    private String Name;
    private double Price;
    private Timestamp DateOfPurchase;
    private String PaymentMethod;
    private List<PositionModel> Positions;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public int getTableNr() {
        return TableNr;
    }

    public void setTableNr(int tableNr) {
        TableNr = tableNr;
    }

    public CustomerModel getCustomer() {
        return Customer;
    }

    public void setCustomer(CustomerModel customer) {
        Customer = customer;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public double getPrice() {
        return Price;
    }

    public void setPrice(double price) {
        Price = price;
    }

    public Timestamp getDateOfPurchase() {
        return DateOfPurchase;
    }

    public void setDateOfPurchase(Timestamp dateOfPurchase) {
        DateOfPurchase = dateOfPurchase;
    }

    public String getPaymentMethod() {
        return PaymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        PaymentMethod = paymentMethod;
    }

    public List<PositionModel> getPositions() {
        return Positions;
    }

    public void setPositions(List<PositionModel> positions) {
        Positions = positions;
    }
}

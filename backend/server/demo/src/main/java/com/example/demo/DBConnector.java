package com.example.demo;

import com.example.demo.Customer.CustomerModel;
import com.example.demo.Drink.DrinkModel;
import com.example.demo.Orders.OrderModel;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DBConnector
{
    static String conString = "jdbc:sqlserver://localhost:1433;Database=DigiBar;trustServerCertificate=true";
    static String DBUser = "max";
    static String PW="max";
    static Connection connection;

    public DBConnector()
    {
        try
        {
            connection = DriverManager.getConnection(conString,DBUser,PW);
            System.out.println("Connection established");
        }
        catch (SQLException e)
        {
            System.out.println("Could not connect");
            e.printStackTrace();
        }
    }

    static public List<CustomerModel> getCustomers(int id,String name)
    {
        List<CustomerModel> list= new ArrayList<CustomerModel>();
        try
        {
            String select = "select * from Customers";
            Statement statement = connection.createStatement();
            boolean needsWhere = true;

            if(id != 0)
            {
                select = select + "Where ID ="+id;
                needsWhere = false;
            }

            if(name != null)
            {
                if(needsWhere)
                {
                    select = select + "Where Firstname like " + name + "$";
                }
                else
                {
                    select = select + "AND Firstname like " + name + "$";
                }

                select = select + "OR Lastname like " + name + "%";
            }

            ResultSet result = statement.executeQuery(select);
            while(result.next())
            {
                CustomerModel tempCustomer = new CustomerModel();

                tempCustomer.setID(result.getInt("ID"));
                tempCustomer.setFirstName(result.getString("FirstName"));
                tempCustomer.setLastName(result.getString("LastName"));
                tempCustomer.setEmail(result.getString("Mail"));
                tempCustomer.setPW(result.getString("PW"));
                list.add(tempCustomer);
            }
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return list;
    }

    static public List<DrinkModel> getDrinks(int id,String name)
    {
        List<DrinkModel> list= new ArrayList<DrinkModel>();
        try
        {
            String select = "select * from Drinks";
            Statement statement = connection.createStatement();
            boolean needsWhere = true;

            if(id != 0)
            {
                select = select + "Where ID ="+id;
                needsWhere = false;
            }

            if(name != null)
            {
                if(needsWhere)
                {
                    select = select + "Where Name like " + name + "$";
                }
                else
                {
                    select = select + "AND Name like " + name + "$";
                }
            }

            ResultSet result = statement.executeQuery(select);
            while(result.next())
            {
                DrinkModel tempDrink = new DrinkModel();

                tempDrink.setID(result.getInt("ID"));
                tempDrink.setName(result.getString("Name"));
                tempDrink.setPrice(result.getDouble("Price"));
                tempDrink.setDescription(result.getString("Description"));
                tempDrink.setSize(result.getString("Size"));
                list.add(tempDrink);
            }
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return list;
    }

    static public List<OrderModel> getOrders(int id,String name)
    {
        List<OrderModel> list= new ArrayList<OrderModel>();
        try
        {
            String select = "select * from Orders";
            Statement statement = connection.createStatement();
            boolean needsWhere = true;

            if(id != 0)
            {
                select = select + "Where ID ="+id;
                needsWhere = false;
            }

            if(name != null)
            {
                if(needsWhere)
                {
                    select = select + "Where Name like " + name + "$";
                }
                else
                {
                    select = select + "AND Name like " + name + "$";
                }
            }

            ResultSet result = statement.executeQuery(select);
            while(result.next())
            {
                OrderModel tempOrder = new OrderModel();

                tempOrder.setID(result.getInt("ID"));
                tempOrder.setName(result.getString("Name"));
                tempOrder.setPrice(result.getDouble("Price"));
                tempOrder.setDateOfPurchase(result.getTimestamp("DateOfPurchase"));
                tempOrder.setPaymentMethod(result.getString("PaymentMethod"));
                tempOrder.setTableNr(result.getInt("TableNr"));
                list.add(tempOrder);
            }
        }
        catch (SQLException e)
        {
            e.printStackTrace();
        }
        return list;
    }


}

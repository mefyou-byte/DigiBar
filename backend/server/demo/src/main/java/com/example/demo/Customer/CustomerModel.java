package com.example.demo.Customer;

public class CustomerModel
{
    private int ID;
    private String FirstName;
    private String LastName;
    private String Email;
    private String PW;

    public int getID()
    {
        return ID;
    }

    public void setID(int ID)
    {
        this.ID = ID;
    }

    public String getFirstName()
    {
        return FirstName;
    }

    public void setFirstName(String firstName)
    {

        FirstName = firstName;
    }

    public String getLastName()
    {
        return LastName;
    }

    public void setLastName(String lastName)
    {
        LastName = lastName;
    }

    public String getEmail()
    {
        return Email;
    }

    public void setEmail(String email)
    {
        Email = email;
    }

    public String getPW()
    {
        return PW;
    }

    public void setPW(String PW)
    {
        this.PW = PW;
    }
}

package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class CreateaccountTest {
    @And("^I Enter email \"([^\"]*)\"$")
    public void iEnterEmail(String eid)
    {
        new CreateAccountPage().EnterEmailId(eid);
    }

    @And("^I click on create an account button$")
    public void iClickOnCreateAnAccountButton() {
        new CreateAccountPage().ClickOnCreateAcc();

    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String Fname)
    {
        new CreateAccountPage().EnterFirstName(Fname);

    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String Lname)
    {
        new CreateAccountPage().EnterLastName(Lname);

    }

    @And("^I enter register password \"([^\"]*)\"$")
    public void iEnterRegisterPassword(String Fpass)
    {
        new CreateAccountPage().Enterpassword(Fpass);

    }

    @And("^I enter address \"([^\"]*)\"$")
    public void iEnterAddress(String Fadd)
    {
        new CreateAccountPage().EnterAddress(Fadd);

    }

    @And("^I enter city \"([^\"]*)\"$")
    public void iEnterCity(String Fcity)
    {
        new CreateAccountPage().EnterCity(Fcity);

    }

    /*@And("^I select state \"([^\"]*)\"$")
    public void iSelectState(String state)
    {

        new CreateAccountPage().SelectState();

    }*/

    @And("^I enter postsl code \"([^\"]*)\"$")
    public void iEnterPostslCode(String Pcode)
    {
        new CreateAccountPage().EnterpostalCode(Pcode);

    }

   /* @And("^I select country \"([^\"]*)\"$")
    public void iSelectCountry()
    {
        new CreateAccountPage().SelectCountry();

    }*/

    @And("^I enter phone number \"([^\"]*)\"$")
    public void iEnterPhoneNumber(String Pnumber)
    {
        new CreateAccountPage().EnterMoblieNumber(Pnumber);

    }

    @Then("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().ClickOnregister();

    }

    @And("^I select state \"([^\"]*)\"$")
    public void iSelectState(String state)  {

        new CreateAccountPage().SelectState(state);
    }

    @And("^I select country \"([^\"]*)\"$")
    public void iSelectCountry(String country)
    {
       new CreateAccountPage().SelectCountry(country);
    }
}

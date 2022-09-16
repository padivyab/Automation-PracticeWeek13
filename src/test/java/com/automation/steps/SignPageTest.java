package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class SignPageTest {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on sign in link$")
    public void iClickOnSignInLink() {

        new HomePage().SignInClick();

    }

    @Then("^verify that \"([^\"]*)\" message is displayed$")
    public void verifyThatMessageIsDisplayed(String sign) throws InterruptedException {

        //String autheticationText = new SignInPage().verifySigninLink();
        //Assert.assertEquals(autheticationText,"AUTHENTICATION");
        Thread.sleep(1000);
        Assert.assertEquals(sign,new SignInPage().VerifysignIn());

    }


    @And("^I Enter username \"([^\"]*)\"$")
    public void iEnterUsername(String Username)
    {
        new SignInPage().EnterEmail(Username);
    }

    @And("^I Enter password \"([^\"]*)\"$")
    public void iEnterPassword(String Password)
    {
        new SignInPage().EnterPassword(Password);

    }

    @And("^I click On Sign in Button$")
    public void iClickOnSignInButton() {

        new SignInPage().ClickOnSignBtn();

    }

    @Then("^Verify the error message \"([^\"]*)\"$")
    public void verifyTheErrorMessage(String message)
    {
        Assert.assertEquals(message,new SignInPage().verifyText());

    }


    @Then("^Verify that sign out link is displayed$")
    public void verifyThatSignOutLinkIsDisplayed() {

        String actualresult = new SignInPage().VerifySignOutLink();
        String expectedresult = "Sign out";
        Assert.assertEquals(actualresult,expectedresult);
    }

    @And("^I sign out button$")
    public void iSignOutButton() {

        new SignInPage().clickSignOut();

    }

    @Then("^Verify that sign in link displayed$")
    public void verifyThatSignInLinkDisplayed() {

        String actualresultMsg = new SignInPage().VeriSignInLink();
        String expectedresultMsg = "Sign in";
        Assert.assertEquals(actualresultMsg,expectedresultMsg);
    }
}

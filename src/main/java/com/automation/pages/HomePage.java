package com.automation.pages;

import com.automation.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    @CacheLookup
    @FindBy(xpath = "//a[@class='login']")
    WebElement signin;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womantab;

    public void SignInClick()
    {
        clickOnElement(signin);

    }
    public void ClickWomanTab()
    {
        clickOnElement(womantab);

    }
}

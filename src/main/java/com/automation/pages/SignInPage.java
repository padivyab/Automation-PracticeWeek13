package com.automation.pages;

import com.automation.utility.Utility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class SignInPage extends Utility {

        @CacheLookup
        @FindBy(xpath = "//div[@id='center_column']/h1[1]")
        WebElement authentication;

        @CacheLookup
        @FindBy(xpath = "//input[@id='email']")
        WebElement email;

        @CacheLookup
        @FindBy(xpath = "//input[@id='passwd']")
        WebElement password;

        @CacheLookup
        @FindBy(xpath = "//button[@id='SubmitLogin']")
        WebElement signBtn;

        @CacheLookup
        @FindBy(xpath = "//a[@class='logout']")
        WebElement signout;

        @CacheLookup
        @FindBy(xpath = "//a[@class='login']")
        WebElement Signlink;
        public String VerifysignIn()
        {
                return getTextFromElement(authentication);

        }
        public void EnterEmail(String username)
        {
                sendTextToElement(email,username);

        }
        public void EnterPassword(String passwordId)
        {
                sendTextToElement(password,passwordId);

        }
        public void ClickOnSignBtn()
        {
                clickOnElement(signBtn);

        }
        public String verifyText(){
                WebElement result = driver.findElement(By.xpath("//div[@class='alert alert-danger']/ol/li"));
                return getTextFromElement(result);
        }
        public String VerifySignOutLink()
        {
                return getTextFromElement(signout);
        }
        public void clickSignOut()
        {
                clickOnElement(signout);

        }
        public String VeriSignInLink()
        {
                return getTextFromElement(Signlink);

        }



}

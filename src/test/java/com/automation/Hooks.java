package com.automation;

import com.automation.propertyreader.PropertyReader;
import com.automation.utility.Utility;
import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


import java.io.IOException;


/**
 * Created by bhavesh patel
 */
public class Hooks extends Utility {

    @Before
    public void setUp() throws InterruptedException {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        //new Utility().acceptCookiesAndSwitchToIframe();
    }


    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        //closeBrowser();
    }
}

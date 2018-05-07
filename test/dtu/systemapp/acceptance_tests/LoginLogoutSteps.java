package dtu.systemapp.acceptance_tests;

import static org.junit.Assert.assertThat;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertEquals;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import system.app.OperationNotAllowedException;
import system.app.Developer;
import system.app.SystemApp;
import java.util.List;

public class LoginLogoutSteps {
	
	private SystemApp systemApp;
	private Developer dev;
	private ErrorMessageHolder errorMessageHolder; 
	private DeveloperHelper devhelper;
	
	public LoginLogoutSteps(SystemApp systemApp, ErrorMessageHolder errorMessageHolder, 
			DeveloperHelper devhelper) {
		this.systemApp = systemApp;	
		this.errorMessageHolder = errorMessageHolder;
		this.devhelper = devhelper;
	}
	
	@Given("^developer with initials \"([^\"]*)\" is in the system$")
	public void developerWithInitialsIsInTheSystem(String id) throws Exception {
		dev = new Developer(id);
		systemApp.addDeveloper(dev);
		assertThat(dev.getId(),is(equalTo(id)));
	}
	
	@Given("^developer is not logged in$")
	public void developerIsNotLoggedIn() throws Exception {
		systemApp.userLogout();
	}
	
	@When("^developer enter initials \"([^\"]*)\"$")
	public void developerEnterInitials(String id) throws Exception {
		try {
			systemApp.userLogin(id);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
	
	@Then("^developer with initials \"([^\"]*)\" is logged in$")
	public void developerWithInitialsIsLoggedIn(String id) throws Exception {
		assertEquals(id,systemApp.getActiveUser());
	}

	@Given("^developer with initials \"([^\"]*)\" is not in the system$")
	public void developerWithInitialsIsNotInTheSystem(String wrongId) throws Exception {
		Developer wrongDev = new Developer(wrongId);
		assertThat(systemApp.getDevelopers(),not(hasItem(wrongDev))); 
	}

	@Then("^user gets the error message \"([^\"]*)\"$")
	public void userGetsTheErrorMessage(String errorMessage) throws Exception {
		assertEquals(errorMessage, errorMessageHolder.getErrorMessage());
	}
	
	@Given("^developer is logged in$")
	public void developerIsLoggedIn() throws Exception {
		systemApp.userLogin(devhelper.getDeveloper().getId()); 
	}
	
	@When("^developer logs out$")
	public void developerLogsOut() throws Exception {
	    systemApp.userLogout();
	}

	@Then("^developer is logged out$")
	public void developerIsLoggedOut() throws Exception {
		assertEquals("", systemApp.getActiveUser());
	}
	
}

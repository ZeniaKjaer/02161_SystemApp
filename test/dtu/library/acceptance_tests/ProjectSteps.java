package dtu.library.acceptance_tests;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.List;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertEquals;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import system.app.OperationNotAllowedException;
import system.app.Project;
import system.app.Developer;
import system.app.SystemApp;

public class ProjectSteps {

	private SystemApp systemApp;
	private Project project;
	private ErrorMessageHolder errorMessageHolder;
	private DeveloperHelper devHelper;
	private ProjectHelper projectHelper;
	
	public ProjectSteps(SystemApp systemApp, ErrorMessageHolder errorMessageHolder, 
			DeveloperHelper devHelper, ProjectHelper projectHelper) {
		this.systemApp = systemApp;	
		this.errorMessageHolder = errorMessageHolder;
		this.devHelper = devHelper;
	}
	
	@Given("^there is a developer$")
	public void thereIsADeveloper() throws Exception {
	    systemApp.addDeveloper(devHelper.getDeveloper());
	}

	@When("^developer creates project with projectname \"([^\"]*)\"$")
	public void developerCreatesProject(String projectName) throws Exception {
	    project = new Project(devHelper.getDeveloper().getId(),"",projectName);
		systemApp.addProject(project);
	}

	@Then("^project with projectname \"([^\"]*)\" is created$")
	public void projectIsCreated(String projectName) throws Exception {
	    assertThat(systemApp.getProjects(), hasItem(project));
	}

	@Then("^the developer is now the project leader$")
	public void theDeveloperIsNowTheProjectLeader() throws Exception {
		assertThat(project.getProjectLeader(), is(equalTo(devHelper.getDeveloper().getId())));
	}
	
	@Given("^there is a project$")
	public void thereIsAProject() throws Exception {
	    systemApp.addProject(project);
	}
	
	@Given("^user is the project leader$")
	public void userIsTheProjectLeader() throws Exception {
		projectHelper.getProject().setProjectLeader(systemApp.getActiveUser());
	}

	@When("^user adds developer to project$")
	public void userAddsDeveloperToProject() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^developer is part of the project$")
	public void developerIsPartOfTheProject() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}

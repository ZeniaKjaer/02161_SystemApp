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
import system.app.Activity;
import system.app.Developer;
import system.app.SystemApp;

public class ProjectSteps {

	private SystemApp systemApp;
	private Project project;
	private Activity activity;
	private ErrorMessageHolder errorMessageHolder;
	private DeveloperHelper devHelper;
	private ProjectHelper projectHelper;
	private ActivityHelper activityHelper;
	
	public ProjectSteps(SystemApp systemApp, ErrorMessageHolder errorMessageHolder, 
			DeveloperHelper devHelper, ProjectHelper projectHelper, ActivityHelper activityHelper) {
		this.systemApp = systemApp;	
		this.errorMessageHolder = errorMessageHolder;
		this.devHelper = devHelper;
		this.projectHelper = projectHelper;
		this.activityHelper = activityHelper;
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
	    systemApp.addProject(projectHelper.getProject());
	}
	
	@Given("^user is the project leader$")
	public void userIsTheProjectLeader() throws Exception {
		projectHelper.getProject().setProjectLeader(systemApp.getActiveUser());
	}

	@When("^user adds developer to project$")
	public void userAddsDeveloperToProject() throws Exception {
		try {
			 systemApp.addProjectDev(projectHelper.getProject(), devHelper.getDeveloper());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}

	@Then("^developer is part of the project$")
	public void developerIsPartOfTheProject() throws Exception {
		assertThat(projectHelper.getProject().getProjectDevelopers(),hasItem(devHelper.getDeveloper()));
	}
	
	@Given("^user is not the project leader$")
	public void userIsNotTheProjectLeader() throws Exception {
		projectHelper.getProject().setProjectLeader(null);
	}
	
	@When("^project with name \"([^\"]*)\" already exist$")
		public void projectWithNameAlreadyExist(String arg1) throws Exception {
		try {
			systemApp.addProject(projectHelper.getProject());
			systemApp.addProject(projectHelper.getProject());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
	
	@Given("^developer is already part of the project$")
	public void developerIsAlreadyPartOfTheProject() throws Exception {
		projectHelper.getProject().addProjectDev(devHelper.getDeveloper());
	}
	
	@Given("^there is an activity$")
	public void thereIsAnActivity() throws Exception {
	    activity = new Activity("Aktivitet");
	}
	
	@When("^user adds activity to project$")
	public void userAddsActivityToProject() throws Exception {
	    systemApp.addActivity(projectHelper.getProject(), activityHelper.getActivity());
	}

	@Then("^activity is part of project$")
	public void activityIsPartOfProject() throws Exception {
	    assertThat(projectHelper.getProject().getProjectActivities(), hasItem(activityHelper.getActivity()));
	}
	
}

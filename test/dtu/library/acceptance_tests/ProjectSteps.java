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

	@Given("^there is a project developer$")
	public void thereIsAProjectDeveloper() throws Exception {
		//systemApp.addProjectDev(projectHelper.getProject(),devHelper.getDeveloper());
		projectHelper.getProject().addProjectDev(devHelper.getDeveloper());
	}

	@When("^user change project leader$")
	public void userChangeProjectLeader() throws Exception {
		try {
			systemApp.setProjectLeader(projectHelper.getProject(), devHelper.getDeveloper());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}

	@When("^developer creates project with projectname \"([^\"]*)\"$")
	public void developerCreatesProject(String projectName) throws Exception {
		project = new Project(devHelper.getDeveloper().getId(),"",projectName);
		try {
			systemApp.addProject(project);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}

	@Then("^project with projectname \"([^\"]*)\" is created$")
	public void projectIsCreated(String projectName) throws Exception {
		assertThat(systemApp.getProjects(), hasItem(project));
	}

	@Then("^the developer is now the project leader$") // Denne er fra "Create a project"
	public void theDeveloperIsNowTheProjectLeader() throws Exception {
		assertThat(project.getProjectLeader(), is(equalTo(devHelper.getDeveloper().getId())));
	} 
	// HEEEEEEEEEEEEEEEEEEY!!! disse to ligner hinanden, men burde vi aendre den oeverste???? eller beholder vi dem som de er? -MT

	@Then("^developer is the new project leader$") // Denne er fra "Change project leader"
	public void developerIsTheNewProjectLeader() throws Exception {
		assertThat(projectHelper.getProject().getProjectLeader(), is(equalTo(devHelper.getDeveloper().getId())));
	}

	@Then("^user is not the project leader anymore$")
	public void userIsNotTheProjectLeaderAnymore() throws Exception {
		assertThat(projectHelper.getProject().getProjectLeader(), not(equalTo(systemApp.getActiveUser())));
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

	@Given("^project with name \"([^\"]*)\" already exist$")
	public void projectWithNameAlreadyExist(String projectName) throws Exception {
		Project project2 = new Project(devHelper.getDeveloper().getId(),"",projectName);
		systemApp.addProject(project2);
	}
	
	@When("^user removes developer from project$")
	public void userRemovesDeveloperFromProject() throws Exception {
		try {
			systemApp.removeProjectDev(projectHelper.getProject(),devHelper.getDeveloper());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}

	@Then("^developer is no longer a part of the project$")
	public void developerIsNoLongerAPartOfTheProject() throws Exception {
		assertThat(projectHelper.getProject().getProjectDevelopers(),not(hasItem(devHelper.getDeveloper())));
	}
	
	@Given("^developer is not part of the project$")
	public void developerIsNotPartOfTheProject() throws Exception {
		projectHelper.getProject().getProjectDevelopers().remove(devHelper.getDeveloper());
	}
}
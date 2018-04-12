package dtu.library.acceptance_tests;

import system.app.Activity;
import system.app.Project;
import system.app.SystemApp;

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

public class ActivitySteps {

	private SystemApp systemApp;
	private Project project;
	private Activity activity;
	private ErrorMessageHolder errorMessageHolder;
	private DeveloperHelper devHelper;
	private ProjectHelper projectHelper;
	private ActivityHelper activityHelper;
	
	public ActivitySteps(SystemApp systemApp, ErrorMessageHolder errorMessageHolder,
			DeveloperHelper devHelper, ProjectHelper projectHelper, ActivityHelper activityHelper) {
		this.systemApp = systemApp;	
		this.errorMessageHolder = errorMessageHolder;
		this.devHelper = devHelper;
		this.projectHelper = projectHelper;
		this.activityHelper = activityHelper;
	}
	
	@Given("^there is an activity$")
	public void thereIsAnActivity() throws Exception {
	    activity = new Activity("Aktivitet");
	}
	
	@When("^user adds activity to project$")
	public void userAddsActivityToProject() throws Exception {
		try {
	    systemApp.addActivity(projectHelper.getProject(), activityHelper.getActivity());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}

	@Then("^activity is part of project$")
	public void activityIsPartOfProject() throws Exception {
	    assertThat(projectHelper.getProject().getProjectActivities(), hasItem(activityHelper.getActivity()));
	}
	@When("^user adds developer to activity$")
	public void userAddsDeveloperToActivity() throws Exception {
		try {
			systemApp.addActivityDev(projectHelper.getProject(), activityHelper.getActivity(), devHelper.getDeveloper());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}
	
	@Then("^developer is working on activity$")
	public void developerIsWorkingOnActivity() throws Exception {
		assertThat(activityHelper.getActivity().getActivityDevelopers(), hasItem(devHelper.getDeveloper()));
	}
	
	@Given("^developer is already working on activity$")
	public void userIsAlreadyWorkingOnActivity() throws Exception {
		activityHelper.getActivity().addActivityDev(devHelper.getDeveloper());
	}
	
	@Given("^user is working on activity$")
	public void userIsWorkingOnActivity() throws Exception {
		activityHelper.getActivity().addActivityDev(new Developer(systemApp.getActiveUser()));
		
	}
	
	@Given("^user is not working on activity$")
	public void userIsNotWorkingOnActivity() throws Exception {
		activityHelper.getActivity().addActivityDev(new Developer("not active user"));
	}
	
	@Given("^activity has been added to project$")
	public void activityHasBeenAddedToProject() throws Exception {
	    systemApp.addActivity(projectHelper.getProject(), activityHelper.getActivity());
	}

	@When("^user removes activity$")
	public void userRemovesActivity() throws Exception {
		try {
	   systemApp.removeActivity(projectHelper.getProject(), activityHelper.getActivity());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}

	@Then("^activity is not part of project$")
	public void activityIsNotPartOfProject() throws Exception {
		assertFalse(projectHelper.getProject().getProjectActivities().contains(activityHelper.getActivity()));
	}
	
	@Given("^there is an activity that is not part of the project$")
	public void thereIsAnActivityThatIsNotPartOfTheProject() throws Exception {
	    Activity a = new Activity("aDummy");
	    
	}
	
	@Given("^user is not a project leader$")
	public void userIsNotAProjectLeader() throws Exception {
		systemApp.userLogin("ABCD");
	}



}

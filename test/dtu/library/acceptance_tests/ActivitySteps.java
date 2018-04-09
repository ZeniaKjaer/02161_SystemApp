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
	    systemApp.addActivity(projectHelper.getProject(), activityHelper.getActivity());
	}

	@Then("^activity is part of project$")
	public void activityIsPartOfProject() throws Exception {
	    assertThat(projectHelper.getProject().getProjectActivities(), hasItem(activityHelper.getActivity()));
	}
	
}

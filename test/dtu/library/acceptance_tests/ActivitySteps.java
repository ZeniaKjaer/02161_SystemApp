package dtu.library.acceptance_tests;

import system.app.SystemApp;

import static org.hamcrest.CoreMatchers.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertThat;
import java.util.ArrayList;
import system.app.OperationNotAllowedException;
import system.app.*;

public class ActivitySteps {

	private SystemApp systemApp;
	private ArrayList<Week> activityDuration;
	private DevCalendar devCalendar;
	private Developer user;
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
		activityHelper.getActivity();
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
		assertThat(devHelper.getDeveloper().getMyActivities(), hasItem(activityHelper.getActivity()));
	}

	@Given("^developer is already working on activity$")
	public void userIsAlreadyWorkingOnActivity() throws Exception {
		activityHelper.getActivity().addActivityDev(devHelper.getDeveloper());
	}

	@Given("^user is working on activity$")
	public void userIsWorkingOnActivity() throws Exception {
		user = new Developer(systemApp.getActiveUser());
		activityHelper.getActivity().addActivityDev(user);
	}

	@Given("^there is an activity developer$")
	public void thereIsAnActivityDeveloper() throws Exception {
		activityHelper.getActivity().addActivityDev(devHelper.getDeveloper());
		devHelper.getDeveloper().addActivityToCalendar(activityHelper.getActivity());
		devHelper.getDeveloper().getMyActivities().add(activityHelper.getActivity());
	}

	@Given("^user is not working on activity$")
	public void userIsNotWorkingOnActivity() throws Exception {
		activityHelper.getActivity().removeActivityDev(user);
	}

	@When("^user removes activity$")
	public void userRemovesActivity() throws Exception {
		try {
			systemApp.removeActivity(projectHelper.getProject(), activityHelper.getActivity());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}

	@Then("^activity is no longer part of project$")
	public void activityIsNoLongerPartOfProject() throws Exception {
		assertFalse(projectHelper.getProject().getProjectActivities().contains(activityHelper.getActivity()));
	}

	@Given("^activity is not part of the project$")
	public void activityIsNotPartOfTheProject() throws Exception {
		projectHelper.getProject().getProjectActivities().remove(activityHelper.getActivity());
	}

	@Given("^there is a project with an activity$")
	public void thereIsAProjectWithAnActivity() throws Exception {
		systemApp.addProject(projectHelper.getProject());

		activityHelper.getActivity().setStart(projectHelper.getProject().getStart());
		activityHelper.getActivity().setDeadline(projectHelper.getProject().getDeadline());
		activityHelper.getActivity().updateDuration();
		projectHelper.getProject().addActivity(activityHelper.getActivity());   
	}

	@Given("^user is not a project leader$")
	public void userIsNotAProjectLeader() throws Exception {
		systemApp.userLogin("ABCD");
	}

	@When("^project leader removes developer from activity$")
	public void projectLeaderRemovesDeveloperFromActivity() throws Exception {
		try {
			systemApp.removeActivityDev(projectHelper.getProject(),activityHelper.getActivity(),devHelper.getDeveloper());
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		} 
	}

	@Then("^developer is not working on activity$")
	public void developerIsNotWorkingOnActivity() throws Exception {
		assertThat(activityHelper.getActivity().getActivityDevelopers(),not(hasItem(devHelper.getDeveloper())));
		assertThat(devHelper.getDeveloper().getMyActivities(), not(hasItem(activityHelper.getActivity())));
	}

	@Given("^developer is available$")
	public void developerIsAvailable() throws Exception {
		activityDuration = activityHelper.getActivity().getDuration();
		for (Week week : activityDuration) {
			devHelper.getDeveloper().getDevCalendar().setCalendar(week, 5);
		}
	}

	@Given("^developer is not available$")
	public void developerIsNotAvailable() throws Exception {
		activityDuration = activityHelper.getActivity().getDuration();
		for (Week week : activityDuration) {
			devHelper.getDeveloper().getDevCalendar().setCalendar(week, 20);
		}
	}

	@Then("^developer has activity marked in her calendar$")
	public void developerHasActivityMarkedInHerCalendar() throws Exception {
		devCalendar = devHelper.getDeveloper().getDevCalendar();
		activityDuration = activityHelper.getActivity().getDuration();
		for (Week week : activityDuration) {
			assertEquals(6, devCalendar.getActivityLevel(week));
		}
	}
	
	@Then("^activity is removed from developer calendar$")
	public void activityIsRemovedFromDeveloperCalendar() throws Exception {
		devCalendar = devHelper.getDeveloper().getDevCalendar();
		activityDuration = activityHelper.getActivity().getDuration();
		for (Week week : activityDuration) {
			assertEquals(0, devCalendar.getActivityLevel(week));
		}
	}

	@Then("^activity timebudget is set to project timebudget$")
	public void activityTimebudgetIsSetToProjectTimebudget() throws Exception {
		assertEquals(projectHelper.getProject().getStart(),activityHelper.getActivity().getStart());
		assertEquals(projectHelper.getProject().getDeadline(),activityHelper.getActivity().getDeadline());
	}
	
}

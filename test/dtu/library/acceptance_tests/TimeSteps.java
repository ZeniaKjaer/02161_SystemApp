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

public class TimeSteps {

	private SystemApp systemApp;
	private Project project;
	private Activity activity;
	private int startWeek = 50;
	private int startYear = 2018;
	private int deadlineWeek = 2;
	private int deadlineYear = 2019;
	private ErrorMessageHolder errorMessageHolder;
	private DeveloperHelper devHelper;
	private ProjectHelper projectHelper;
	private ActivityHelper activityHelper;
	MockDateHolder dateHolder;

	public TimeSteps(SystemApp systemApp, ErrorMessageHolder errorMessageHolder, 
			DeveloperHelper devHelper, ProjectHelper projectHelper, ActivityHelper activityHelper,
			MockDateHolder dateHolder) {
		this.systemApp = systemApp;	
		this.errorMessageHolder = errorMessageHolder;
		this.devHelper = devHelper;
		this.projectHelper = projectHelper;
		this.activityHelper = activityHelper;
		this.dateHolder = dateHolder;
	}

	@When("^user sets time budget for project$")
	public void userSetsTimeBudgetForProject() throws Exception {
		//deadlineWeek = startWeek + 5;
		//startWeek = getWeek();
		try {
			systemApp.setProjectStart(projectHelper.getProject(), startWeek, startYear);
			systemApp.setProjectDeadline(projectHelper.getProject(), deadlineWeek, deadlineYear);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("^time budget is set for project$")
	public void timeBudgetIsSetForProject() throws Exception {
		assertEquals(startWeek,projectHelper.getProject().getStartWeek());
		assertEquals(startYear,projectHelper.getProject().getStartYear());
		assertEquals(deadlineWeek,projectHelper.getProject().getDeadlineWeek());
		assertEquals(deadlineYear,projectHelper.getProject().getDeadlineYear());
	}

	@When("^user sets start after the deadline for project$")
	public void userSetsStartAfterTheDeadlineForProject() throws Exception {
		try {
			systemApp.setProjectDeadline(projectHelper.getProject(), deadlineWeek, deadlineYear);
			systemApp.setProjectStart(projectHelper.getProject(), deadlineWeek, deadlineYear+1);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
	
	@When("^user sets deadline before the start for project$")
	public void userSetsDeadlineBeforeTheStartForProject() throws Exception {
		try {
			systemApp.setProjectStart(projectHelper.getProject(), startWeek,startYear);
			systemApp.setProjectDeadline(projectHelper.getProject(), startWeek,startYear-1);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets time budget for activity$")
	public void userSetsTimeBudgetForActivity() throws Exception {
		startWeek = 50;
		startYear = 2018;
		deadlineWeek = 2;
		deadlineYear = 2019;
		//deadlineWeek = startWeek + 5;
		//startWeek = getWeek();

		try {
			systemApp.setActivityStart(projectHelper.getProject(),activityHelper.getActivity(), startWeek, startYear);
			systemApp.setActivityDeadline(projectHelper.getProject(),activityHelper.getActivity(), deadlineWeek, deadlineYear);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("^time budget is set for activity$")
	public void timeBudgetIsSetForActivity() throws Exception {
		assertEquals(startWeek,activityHelper.getActivity().getStartWeek());
		assertEquals(startYear,activityHelper.getActivity().getStartYear());
		assertEquals(deadlineWeek,activityHelper.getActivity().getDeadlineWeek());
		assertEquals(deadlineYear,activityHelper.getActivity().getDeadlineYear());
	}

	@When("^user sets start after the deadline activity$")
	public void userSetsStartAfterTheDeadlineActivity() throws Exception {
		try {
			systemApp.setActivityDeadline(projectHelper.getProject(), activityHelper.getActivity(), deadlineWeek, deadlineYear );
			systemApp.setActivityStart(projectHelper.getProject(), activityHelper.getActivity(), deadlineWeek, deadlineYear+1 );
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
	
	@When("^user sets deadline before start activity$")
	public void userSetsDeadlineBeforeStartActivity() throws Exception {
		try {
			systemApp.setActivityStart(projectHelper.getProject(), activityHelper.getActivity(), startWeek,startYear);
			systemApp.setActivityDeadline(projectHelper.getProject(), activityHelper.getActivity(), startWeek,startYear-1);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}


}

package dtu.library.acceptance_tests;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.Calendar;
import java.util.GregorianCalendar;
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
import system.app.DateServer;
import system.app.Developer;
import system.app.SystemApp;

public class TimeSteps {

	private SystemApp systemApp;
	private Project project;
	private Activity activity;
	private Calendar currentDate = new GregorianCalendar();
	//	private int startWeek = 50;
	//	private int startYear = 2018;
	//	private int deadlineWeek = 2;
	//	private int deadlineYear = 2019;
	//	
	private Calendar start, middle, deadline;
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

	@Given("^there is a start date$")
	public void thereIsAStartDate() throws Exception {
		start = new GregorianCalendar(); 
	}

	@Given("^there is a deadline$")
	public void thereIsADeadline() throws Exception {
		deadline = new GregorianCalendar(); 
		deadline.add(Calendar.WEEK_OF_YEAR, 3);
	}

	@Given("^there is a date between start and deadline$")
	public void thereIsADateBetweenStartAndDeadline() throws Exception {
		middle = new GregorianCalendar(); 
		middle.add(Calendar.WEEK_OF_YEAR, 1);
	}
	
	@When("^user sets time budget for project$")
	public void userSetsTimeBudgetForProject() throws Exception {
		try {
			systemApp.setProjectStart(projectHelper.getProject(), start);
			systemApp.setProjectDeadline(projectHelper.getProject(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("^time budget is set for project$")
	public void timeBudgetIsSetForProject() throws Exception {
		assertEquals(start,projectHelper.getProject().getStart());
		assertEquals(deadline,projectHelper.getProject().getDeadline());
	}

	@When("^user sets start after the deadline for project$")
	public void userSetsStartAfterTheDeadlineForProject() throws Exception {
		try {
			systemApp.setProjectDeadline(projectHelper.getProject(), start);
			systemApp.setProjectStart(projectHelper.getProject(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets deadline before the start for project$")
	public void userSetsDeadlineBeforeTheStartForProject() throws Exception {
		try {
			systemApp.setProjectStart(projectHelper.getProject(), deadline);
			systemApp.setProjectDeadline(projectHelper.getProject(), start);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets time budget for activity$")
	public void userSetsTimeBudgetForActivity() throws Exception {
		try {
			systemApp.setProjectStart(projectHelper.getProject(), start);
			systemApp.setProjectDeadline(projectHelper.getProject(), deadline);

			systemApp.setActivityStart(projectHelper.getProject(),activityHelper.getActivity(), start);
			systemApp.setActivityDeadline(projectHelper.getProject(),activityHelper.getActivity(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("^time budget is set for activity$")
	public void timeBudgetIsSetForActivity() throws Exception {
		assertEquals(start, activityHelper.getActivity().getStart());
		assertEquals(deadline, activityHelper.getActivity().getDeadline());
	}

	@When("^user sets start after the deadline activity$")
	public void userSetsStartAfterTheDeadlineActivity() throws Exception {
		try {
			systemApp.setActivityDeadline(projectHelper.getProject(), activityHelper.getActivity(), start);
			systemApp.setActivityStart(projectHelper.getProject(), activityHelper.getActivity(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets activity deadline before activity start$")
	public void userSetsActivityDeadlineBeforeActivityStart() throws Exception {
		try {
			systemApp.setActivityStart(projectHelper.getProject(), activityHelper.getActivity(), middle);
			systemApp.setActivityDeadline(projectHelper.getProject(), activityHelper.getActivity(),start);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets activity start after activity deadline$")
	public void userSetsActivityStartAfterActivityDeadline() throws Exception {
		try {
			systemApp.setActivityDeadline(projectHelper.getProject(), activityHelper.getActivity(),middle);
			systemApp.setActivityStart(projectHelper.getProject(), activityHelper.getActivity(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets activity start before project start$")
	public void userSetsActivityStartBeforeProjectStart() throws Exception {
		try {
			systemApp.setProjectStart(projectHelper.getProject(), middle);
			systemApp.setActivityStart(projectHelper.getProject(), activityHelper.getActivity(), start);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets activity start after project deadline$")
	public void userSetsActivityStartAfterProjectDeadline() throws Exception {
		try {
			systemApp.setProjectDeadline(projectHelper.getProject(), start);
			systemApp.setActivityStart(projectHelper.getProject(), activityHelper.getActivity(), middle);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
//////////////////////////////////////////////////////////////////////////////////////////
// OBS MAN KAN GODT �NDRE PROJEKT TIDEN, S� DEN IKKE D�KKER DENS AKTIVITETER, TILLADT?  //
//////////////////////////////////////////////////////////////////////////////////////////
	@When("^user sets activity deadline before project start$")
	public void userSetsActivityDeadlineBeforeProjectStart() throws Exception {
		try {
			systemApp.setActivityStart(projectHelper.getProject(), activityHelper.getActivity(), start);
			systemApp.setProjectStart(projectHelper.getProject(), middle );
			systemApp.setActivityDeadline(projectHelper.getProject(), activityHelper.getActivity(), start);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

		@When("^user sets activity deadline after project deadline$")
		public void userSetsActivityDeadlineAfterProjectDeadline() throws Exception {
			try {
				systemApp.setProjectDeadline(projectHelper.getProject(), middle  );
				systemApp.setActivityDeadline(projectHelper.getProject(), activityHelper.getActivity(), deadline);
			} catch (OperationNotAllowedException e) {
				errorMessageHolder.setErrorMessage(e.getMessage());
			}
		}

}

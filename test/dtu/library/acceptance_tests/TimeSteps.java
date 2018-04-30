package dtu.library.acceptance_tests;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertEquals;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Random;
import javafx.util.Pair;
import system.app.OperationNotAllowedException;
import system.app.Developer;
import system.app.SystemApp;
import system.app.Week;

public class TimeSteps {

	private SystemApp systemApp;
	private Week week;
	private ArrayList<Pair<String,Integer>> availableDev;
	private Calendar start, middle, deadline;
	private ErrorMessageHolder errorMessageHolder;
	private ProjectHelper projectHelper;
	private ActivityHelper activityHelper;

	public TimeSteps(SystemApp systemApp, ErrorMessageHolder errorMessageHolder, 
			DeveloperHelper devHelper, ProjectHelper projectHelper, ActivityHelper activityHelper) {
		this.systemApp = systemApp;	
		this.errorMessageHolder = errorMessageHolder;
		this.projectHelper = projectHelper;
		this.activityHelper = activityHelper;
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
	
	@Then("^project start is set$")
	public void projectStartIsSet() throws Exception {
		assertEquals(start.get(Calendar.DAY_OF_YEAR),projectHelper.getProject().getStart().get(Calendar.DAY_OF_YEAR));
		assertEquals(start.get(Calendar.YEAR),projectHelper.getProject().getStart().get(Calendar.YEAR));
	}
	
	@Then("^project deadline is set$")
	public void projectDeadlineIsSet() throws Exception {
		assertEquals(deadline.get(Calendar.DAY_OF_YEAR),projectHelper.getProject().getDeadline().get(Calendar.DAY_OF_YEAR));
		assertEquals(deadline.get(Calendar.YEAR),projectHelper.getProject().getDeadline().get(Calendar.YEAR));
	}

	@When("^user sets project start after project deadline$")
	public void userSetsProjectStartAfterProjectDeadline() throws Exception {
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
			systemApp.setActivityStart(projectHelper.getProject(),activityHelper.getActivity(), start);
			systemApp.setActivityDeadline(projectHelper.getProject(),activityHelper.getActivity(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("^time budget is set for activity$")
	public void timeBudgetIsSetForActivity() throws Exception {
		assertEquals(start.get(Calendar.DAY_OF_YEAR), activityHelper.getActivity().getStart().get(Calendar.DAY_OF_YEAR));
		assertEquals(start.get(Calendar.YEAR), activityHelper.getActivity().getStart().get(Calendar.YEAR));
		assertEquals(deadline.get(Calendar.DAY_OF_YEAR), activityHelper.getActivity().getDeadline().get(Calendar.DAY_OF_YEAR));
		assertEquals(deadline.get(Calendar.YEAR), activityHelper.getActivity().getDeadline().get(Calendar.YEAR));
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
			projectHelper.getProject().getProjectActivities().clear();
			systemApp.setProjectStart(projectHelper.getProject(), middle);
			projectHelper.getProject().addActivity(activityHelper.getActivity());
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

	@When("^user sets activity deadline before project start$")
	public void userSetsActivityDeadlineBeforeProjectStart() throws Exception {
		try {
			projectHelper.getProject().getProjectActivities().clear();
			systemApp.setProjectStart(projectHelper.getProject(), middle );
			systemApp.addActivity(projectHelper.getProject(), activityHelper.getActivity());
			activityHelper.getActivity().setStart(start);
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

	@Given("^developers in SystemApp has different activitylevel that week$")
	public void developersInSystemAppHasDifferentActivitylevelThatWeek() throws Exception {
		Week week = new Week (start.get(Calendar.WEEK_OF_YEAR),start.get(Calendar.YEAR));
		Random rn = new Random();
		for (Developer dev : systemApp.getDevelopers()) {
			int activityLevel = rn.nextInt(20)+1;
			dev.getDevCalendar().setCalendar(week, activityLevel);	
		}
	}

	@When("^user ask for all available developers$")
	public void userAskForAllAvailableDevelopers() throws Exception {
		week = new Week(start.get(Calendar.WEEK_OF_YEAR),start.get(Calendar.YEAR));
		availableDev = systemApp.getAvailableDevelopers(week);
	}

	@Then("^user gets a sorted list of all available developers$")
	public void userGetsASortedListOfAllAvailableDevelopers() throws Exception {
		assertTrue(systemApp.isSorted(availableDev));
	}

	@When("^user sets project start$")
	public void userSetsProjectStart() throws Exception {
		try {
			systemApp.setProjectStart(projectHelper.getProject(), start);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Given("^there is a project with no activities$")
	public void thereIsAProjectWithNoActivities() throws Exception {
		systemApp.addProject(projectHelper.getProject());
		projectHelper.getProject().getProjectActivities().clear();
	}

	@When("^user sets project deadline$")
	public void userSetsProjectDeadline() throws Exception {
		try {
			systemApp.setProjectDeadline(projectHelper.getProject(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

}

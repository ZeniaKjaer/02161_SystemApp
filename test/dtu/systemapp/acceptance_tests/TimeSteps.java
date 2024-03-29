package dtu.systemapp.acceptance_tests;

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
	private Calendar start, middle, deadline, postPonedDeadline;
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
		deadline.add(Calendar.WEEK_OF_YEAR, 2);
	}

	@Given("^there is a date between start and deadline$")
	public void thereIsADateBetweenStartAndDeadline() throws Exception {
		middle = new GregorianCalendar(); 
		middle.add(Calendar.WEEK_OF_YEAR, 1);
	}

	@Then("^project start is set$")
	public void projectStartIsSet() throws Exception {
		assertEquals(start.get(Calendar.DAY_OF_YEAR),
				projectHelper.getProject().getStart().get(Calendar.DAY_OF_YEAR));
		assertEquals(start.get(Calendar.YEAR),
				projectHelper.getProject().getStart().get(Calendar.YEAR));
	}

	@When("^user sets project start after project deadline$")
	public void userSetsProjectStartAfterProjectDeadline() throws Exception {
		try {
			projectHelper.getProject().getProjectActivities().clear();
			systemApp.setProjectDeadline(projectHelper.getProject(), start);
			systemApp.setProjectStart(projectHelper.getProject(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets project deadline before project start$")
	public void userSetsProjectDeadlineBeforeProjectStart() throws Exception {
		try {
			systemApp.setProjectStart(projectHelper.getProject(), deadline);
			systemApp.setProjectDeadline(projectHelper.getProject(), start);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets activity start$")
	public void userSetsActivityStart() throws Exception {
		try {
			systemApp.setActivityStart(projectHelper.getProject(),activityHelper.getActivity(), start);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@When("^user sets activity deadline$")
	public void userSetsActivityDeadline() throws Exception {
		try {
			systemApp.setActivityDeadline(projectHelper.getProject(), activityHelper.getActivity(), deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
	
	@When("^user postpones project deadline$")
	public void userPostponesProjectDeadline() throws Exception {
		postPonedDeadline = new GregorianCalendar(); 
		postPonedDeadline.add(Calendar.WEEK_OF_YEAR, 4);
		try {
			systemApp.setProjectDeadline(projectHelper.getProject(), postPonedDeadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("^project deadline is postponed$")
	public void projectDeadlineIsPostponed() throws Exception {
		assertEquals(postPonedDeadline.get(Calendar.DAY_OF_YEAR),
				projectHelper.getProject().getDeadline().get(Calendar.DAY_OF_YEAR));
		assertEquals(postPonedDeadline.get(Calendar.YEAR),
				projectHelper.getProject().getDeadline().get(Calendar.YEAR));
	}
	@Then("^activity deadline is set$")
	public void activityDeadlineIsSet() throws Exception {
		assertEquals(deadline.get(Calendar.DAY_OF_YEAR), 
				activityHelper.getActivity().getDeadline().get(Calendar.DAY_OF_YEAR));
		assertEquals(deadline.get(Calendar.YEAR), 
				activityHelper.getActivity().getDeadline().get(Calendar.YEAR));
	}

	@Then("^activity start is set$")
	public void activityStartIsSet() throws Exception {
		assertEquals(start.get(Calendar.DAY_OF_YEAR), 
				activityHelper.getActivity().getStart().get(Calendar.DAY_OF_YEAR));
		assertEquals(start.get(Calendar.YEAR), 
				activityHelper.getActivity().getStart().get(Calendar.YEAR));
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
			projectHelper.getProject().getProjectActivities().clear();
			systemApp.setProjectDeadline(projectHelper.getProject(), start);
			projectHelper.getProject().addActivity(activityHelper.getActivity());
			activityHelper.getActivity().setDeadline(middle);
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
			projectHelper.getProject().getProjectActivities().clear();
			systemApp.setProjectDeadline(projectHelper.getProject(), middle);
			systemApp.addActivity(projectHelper.getProject(), activityHelper.getActivity());
			activityHelper.getActivity().setDeadline(deadline);
			systemApp.setActivityDeadline(projectHelper.getProject(),activityHelper.getActivity(),deadline);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Given("^developers in SystemApp has different activitylevel that week$")
	public void developersInSystemAppHasDifferentActivitylevelThatWeek() throws Exception {
		week = new Week (start.get(Calendar.WEEK_OF_YEAR),start.get(Calendar.YEAR));
		Random rn = new Random();
		for (Developer dev : systemApp.getDevelopers()) {
			int activityLevel = rn.nextInt(20)+1;
			dev.getDevCalendar().setCalendar(week, activityLevel);	
		}
		systemApp.getDevelopers().get(0).getDevCalendar().setCalendar(week, 20);
	}

	@When("^user ask for all available developers$")
	public void userAskForAllAvailableDevelopers() throws Exception {
		try {
			availableDev = systemApp.getAvailableDevelopers(week);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
	
	@When("^user ask for all available developers in week (\\d+) year (\\d+)$")
	public void userAskForAllAvailableDevelopersInWeekYear(int weekOfYear, int year) throws Exception {
		try {
			week = new Week(weekOfYear, year);
			availableDev = systemApp.getAvailableDevelopers(week);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}

	@Then("^user gets a sorted list of all available developers$")
	public void userGetsASortedListOfAllAvailableDevelopers() throws Exception {
		for (int i = 0; i < availableDev.size()-1; i++) {
			assertTrue(availableDev.get(i).getValue() <= availableDev.get(i+1).getValue());
		}
	}

	@Given("^there is an illegal week$")
	public void thereIsAnIllegalWeek() throws Exception {
	    week = new Week (54,2019);
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
	
	@When("^user sets new project deadline before project deadline$")
	public void userSetsNewProjectDeadlineBeforeProjectDeadline() throws Exception {
		try {
			systemApp.setProjectDeadline(projectHelper.getProject(), middle);
		} catch (OperationNotAllowedException e) {
			errorMessageHolder.setErrorMessage(e.getMessage());
		}
	}
	
	@Then("^project deadline is set back$")
	public void projectDeadlineIsSetBack() throws Exception {
		assertEquals(middle.get(Calendar.DAY_OF_YEAR), 
				projectHelper.getProject().getDeadline().get(Calendar.DAY_OF_YEAR));
		assertEquals(middle.get(Calendar.YEAR),
				projectHelper.getProject().getDeadline().get(Calendar.YEAR));
	}

}

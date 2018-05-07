package system.app.ui;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;

import javafx.util.Pair;
import system.app.Activity;
import system.app.Developer;
import system.app.OperationNotAllowedException;
import system.app.Project;
import system.app.SystemApp;
import system.app.Week;

/**
 * @author Mai-Thi
 */
public class SystemAppController {

	BufferedReader rs = new BufferedReader(new InputStreamReader(System.in));
	SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");

	public void createProject(SystemApp systemApp) throws IOException {
		System.out.print("Enter a project name: ");
		String projectName = rs.readLine(); 
		try {
			systemApp.addProject(systemApp.createProject(projectName));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	public void changeProjectLeader(SystemApp systemApp) throws IOException {
		try {
			systemApp.setProjectLeader(enterProject(systemApp), enterDeveloper(systemApp));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	public void addDelevoperToProject(SystemApp systemApp) throws IOException {
		try {
			systemApp.addProjectDev(enterProject(systemApp), enterDeveloper(systemApp));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
	}

	public void removeDeveloperFromProject(SystemApp systemApp) throws IOException {
		try {
			systemApp.removeProjectDev(enterProject(systemApp), enterDeveloper(systemApp));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
	}

	public void setNewStartDateForProject(SystemApp systemApp) throws IOException {
		try {
			systemApp.setProjectStart(enterProject(systemApp), enterDate());

		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	public void setNewDeadlineForProject(SystemApp systemApp) throws IOException {
		try {
			systemApp.setProjectDeadline(enterProject(systemApp), enterDate());
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	public void addActivityToProject(SystemApp systemApp) throws IOException {
		Project project = enterProject(systemApp);
		System.out.print("Enter an activity name: ");
		String activityName = rs.readLine();
		try {
			systemApp.addActivity(project, systemApp.createActivity(activityName));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	public void removeActivityFromProject(SystemApp systemApp) throws IOException {
		Project project = enterProject(systemApp);
		Activity activity = enterActivity(project);
		try {
			systemApp.removeActivity(project, activity);
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	public void addDeveloperToActivity(SystemApp systemApp) throws IOException {
		Project project = enterProject(systemApp);
		Activity activity = enterActivity(project);
		Developer developer = enterDeveloper(systemApp);
		try {
			systemApp.addActivityDev(project, activity, developer);
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	public void removeDeveloperFromActivity(SystemApp systemApp) throws IOException {
		Project project = enterProject(systemApp);
		Activity activity = enterActivity(project);
		Developer developer = enterDeveloper(systemApp);
		try {
			systemApp.removeActivityDev(project, activity, developer);
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	public void setNewStartDateForActivity(SystemApp systemApp) throws IOException {
		Project project = enterProject(systemApp);
		Activity activity = enterActivity(project);

		try {
			systemApp.setActivityStart(project, activity, enterDate());
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
	}

	public void setNewDeadlineForActivity(SystemApp systemApp) throws IOException {
		Project project = enterProject(systemApp);
		Activity activity = enterActivity(project);

		try {
			systemApp.setActivityDeadline(project, activity, enterDate());
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
	}

	public void getAvailableDevelopers(SystemApp systemApp) throws IOException {
		try {
			Week week = enterWeek();
			if (systemApp.getAvailableDevelopers(week).size() == 0) {
				System.out.println("No available developers");
			} else {
				for(Pair<String,Integer> p: systemApp.getAvailableDevelopers(week)) {
					System.out.println(p);
				}
			}
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	} 

	public void getListOfProjects(SystemApp systemApp) {
		if(systemApp.getActiveUser().equalsIgnoreCase("")) {
			System.out.println("User is not logged in");
		}
		else if (systemApp.getProjects().size() == 0) {
			System.out.println("No projects");
		} else {
			for(Project p: systemApp.getProjects()) {
				System.out.println(p.getProjectName());
				System.out.println("Project leader: " + p.getProjectLeader());
				System.out.println("Start: " + format1.format(p.getStart().getTime()));
				System.out.println("Deadline: " + format1.format(p.getDeadline().getTime()));
				System.out.println("List of developers:");
				for(Developer d: p.getProjectDevelopers()) {
					System.out.print(d.getId() + " ");
				}
				System.out.println("");
			}
		}
	}

	public void getListOfActivities(SystemApp systemApp) throws IOException {
		Project project = enterProject(systemApp);
		if(systemApp.getActiveUser().equalsIgnoreCase("")) {
			System.out.println("User is not logged in");
		}
		else if (!systemApp.getProjects().contains(project)) {
			System.out.println("Project not found");
		} else if (project.getProjectActivities().size() == 0) {
			System.out.println("No activities");
		} else {
			for(Activity a: project.getProjectActivities()) {
				System.out.println(a.getActivityName());
				System.out.println("Start: " + format1.format(a.getStart().getTime()));
				System.out.println("Deadline: " + format1.format(a.getDeadline().getTime()));
				System.out.println("List of developers:");
				for(Developer d: a.getActivityDevelopers()) {
					System.out.print(d.getId() + " ");
				}
				System.out.println("");
			}
		}
	}

	public void getMyProjects(SystemApp systemApp) {
		if(systemApp.getActiveUser().equalsIgnoreCase("")) {
			System.out.println("User is not logged in");
		} else {
			Developer activeUser = new Developer("");

			for (Developer d: systemApp.getDevelopers()) {
				if(d.getId().equalsIgnoreCase(systemApp.getActiveUser())) {
					activeUser = d;
				}
			}

			if (activeUser.getMyProjects().size() == 0) {
				System.out.println("No projects");
			} else {
				for(Project p: activeUser.getMyProjects()) {
					System.out.println(p.getProjectName());
				}
			}
		}
	}

	public void getMyActivities(SystemApp systemApp) {
		if(systemApp.getActiveUser().equalsIgnoreCase("")) {
			System.out.println("User is not logged in");
		}
		else {
			Developer activeUser = new Developer("");

			for (Developer d: systemApp.getDevelopers()) {
				if(d.getId().equalsIgnoreCase(systemApp.getActiveUser())) {
					activeUser = d;
				}
			}

			if (activeUser.getMyActivities().size() == 0) {
				System.out.println("No activities");
			} else {
				for(Activity a: activeUser.getMyActivities()) {
					System.out.println(a.getActivityName());
				}
			}
		}

	}

	public void removeProject(SystemApp systemApp) throws IOException {
		try {
			systemApp.removeProject(enterProject(systemApp));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

	private Calendar enterDate() throws IOException {
		System.out.print("Enter year: ");
		int year = Integer.valueOf(rs.readLine());
		System.out.print("Enter month: ");
		int month = Integer.valueOf(rs.readLine()) - 1; // Month is 0-based
		System.out.print("Enter day of month: ");
		int day = Integer.valueOf(rs.readLine());
		return new GregorianCalendar(year, month, day);
	}

	private Week enterWeek() throws IOException {
		System.out.print("Enter week: ");
		int weekNumber = Integer.valueOf(rs.readLine());
		System.out.print("Enter year: ");
		int yearNumber = Integer.valueOf(rs.readLine());
		return new Week(weekNumber,yearNumber);
	}


	private Developer enterDeveloper(SystemApp systemApp) throws IOException {
		System.out.print("Enter developer ID: ");
		String developerID = rs.readLine();

		for (Developer d: systemApp.getDevelopers()) {
			if(d.getId().equalsIgnoreCase(developerID)) {
				return d;
			}
		}
		return new Developer(developerID);
	}

	private Project enterProject(SystemApp systemApp) throws IOException {
		System.out.print("Enter a project name: ");
		String projectName = rs.readLine();

		for (Project p: systemApp.getProjects()) {
			if(p.getProjectName().equalsIgnoreCase(projectName)) {
				return p;
			}
		}
		return new Project("",projectName);
	}

	private Activity enterActivity(Project project) throws IOException {
		System.out.print("Enter an activity name: ");
		String activityName = rs.readLine();

		for (Activity a: project.getProjectActivities()) {
			if(a.getActivityName().equalsIgnoreCase(activityName)) {
				return a;
			}
		}
		return new Activity(activityName);
	}

	public void login(SystemApp systemApp) throws IOException {
		System.out.print("Enter Initials: "); 
		String initials = rs.readLine();
		try {
			systemApp.userLogin(initials);
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		} 

	}


}

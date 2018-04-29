package system.app;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;

import javafx.util.Pair;

/**
 * @author Mai-Thi
 */
public class SystemAppState {
	BufferedReader rs = new BufferedReader(new InputStreamReader(System.in));
	SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");

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
		return new Project("","",projectName);
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

	public void createProject(SystemApp systemApp) throws IOException {
		System.out.print("Enter a project name: ");
		String projectName = rs.readLine();
		try {
			systemApp.addProject(new Project(systemApp.getActiveUser(), null, projectName));
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
		System.out.print("Enter an activity name: ");
		String activityName = rs.readLine();
		Activity activity = new Activity(activityName);
		try {
			systemApp.addActivity(enterProject(systemApp), activity);
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
			Week weekYear = enterWeek();
			for(Pair<String,Integer> p: systemApp.getAvailableDevelopers(weekYear) ) {
				System.out.println(p);
			}
			// Kommer an paa om vi vil have den printet ud vandret eller lodret
			// System.out.println(systemApp.getAvailableDevelopers(week));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}

	}

}

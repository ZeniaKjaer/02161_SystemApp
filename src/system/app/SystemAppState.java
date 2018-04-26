package system.app;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Calendar;
import java.util.GregorianCalendar;

public class SystemAppState {
	BufferedReader rs = new BufferedReader(new InputStreamReader(System.in));
	
	private Developer enterDeveloper(SystemApp systemApp) throws IOException {
		System.out.print("Enter developer ID: ");
		String developerID = rs.readLine();
		
		for (Developer d: systemApp.getDevelopers()) {
			if(d.getId().equalsIgnoreCase(developerID)) {
				return d;
			}
		}
		return new Developer("");
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
	
	private Calendar enterDate() throws NumberFormatException, IOException {
		System.out.print("Enter year: ");
		int year = Integer.valueOf(rs.readLine());
		System.out.print("Enter month: ");
		int month = Integer.valueOf(rs.readLine());
		System.out.print("Enter day of month: ");
		int day = Integer.valueOf(rs.readLine());
		
		Calendar date = new GregorianCalendar(year, month, day);
		return date;
	}

	public void createProject(SystemApp systemApp) throws IOException {
		System.out.print("Enter a project name: ");
		String projectName = rs.readLine();
		try {
			systemApp.addProject(new Project(null, null, projectName));
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

	public void setNewStartDateForProject(SystemApp systemApp) throws IOException, NumberFormatException {
		try {
			systemApp.setProjectStart(enterProject(systemApp), enterDate());
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
		
	}

	public void setNewDeadlineForProject(SystemApp systemApp) throws NumberFormatException, IOException {
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

}

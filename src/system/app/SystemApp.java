package system.app;


import java.io.IOException;
import java.util.Observable;
import java.time.Month;
import java.time.temporal.WeekFields;
import java.util.*;

import dtu.library.acceptance_tests.ProjectHelper;
import system.app.DateServer;

public class SystemApp extends Observable{

	private List<Developer> developers = new ArrayList<Developer>();
	private boolean loggedIn = false;
	private String activeUser = "";
	private List<Project> projects = new ArrayList<Project>();
	private int nextProjectID = 1000;
	private DateServer dateServer = new DateServer();;

	private static final int DEADLINE_ADVANCE_DATE = 3; 


	/**
	 * Constructs a SystemApp with specific developers and projects
	 */

	public SystemApp() {
		developers.add(new Developer("ABCD"));
		developers.add(new Developer("HERE"));
		developers.add(new Developer("MTVD"));
		developers.add(new Developer("RITG"));
		developers.add(new Developer("ZEKT"));
	}

	public void addDeveloper(Developer developer) {
		developers.add(developer);	
	}

	/**
	 * checks if a there's a developer with given id is on the list of developers in the company
	 * @param id
	 * @return true if developer is in the system 
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */  
	public boolean isInTheSystem(String id) {
		for (Developer developer : developers) {
			if (id.equalsIgnoreCase(developer.getId())) {
				return true; 
			}
		}
		return false;
	}

	public void userLogin(String id) throws OperationNotAllowedException  {
		if (!isInTheSystem(id)) {
			throw new OperationNotAllowedException("Wrong initials");
		} else if (loggedIn) {
			throw new OperationNotAllowedException("Another user is already logged in");
		}
		else {
			activeUser = id;
			loggedIn = true;
		}

		setChanged();
		notifyObservers(NotificationType.ACTIVE_USER);
	}

	public void userLogout() {
		activeUser = "";
		loggedIn = false;	
	}

	public boolean isProjectLeader(Project project) {
		if(activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			return true;
		}
		return false;
	}

	public boolean isAvailableForActivity(Developer developer, Activity activity) {
		for (Week week : activity.getDuration()) {
			if (!developer.isAvailable(week)) {
				return false;
			}
		} 
		return true;
	} 
	
	public void addProject(Project project) throws OperationNotAllowedException{
		for (Project p: projects) {
			if (p.getProjectName().equalsIgnoreCase(project.getProjectName())) { 
				throw new OperationNotAllowedException("Illegal project name");
			}
		}
		Calendar start = new GregorianCalendar();
		project.setStart(start);
		Calendar deadline = new GregorianCalendar(); 
		deadline.add(Calendar.WEEK_OF_YEAR,  DEADLINE_ADVANCE_DATE);
		project.setDeadline(deadline);

		int year = getDate().get(Calendar.YEAR);
		String projectId = ""+ year + nextProjectID++; 
		project.setProjectId(projectId);
		
		projects.add(project); 	
		
		setChanged();
		notifyObservers(NotificationType.ADD_PROJECT);
	}

	public void addProjectDev(Project project, Developer developer) throws OperationNotAllowedException{
		// Skal vaere her iflg vores whitebox-test for denne metode
		if(!projects.contains(project)) {
			throw new OperationNotAllowedException("Project is not in the system");
		} else if(!isInTheSystem(developer.getId())) { // Jeg har aendret dit if-statement
			throw new OperationNotAllowedException("Developer is not in the system");
		}
		// whitebox-test tilfoejelse slut
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} 
		else if (project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("User is already part of project");
		} 
		else {
			project.addProjectDev(developer);
		}
		
		setChanged();
		notifyObservers(NotificationType.ADD_DEVELOPER);
		
	}

	public void removeProjectDev(Project project, Developer developer) throws OperationNotAllowedException {
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} 
		else if (!project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("Developer not found");
		} 
		else {
			project.removeProjectDev(developer);
		}
		setChanged();
		notifyObservers(NotificationType.REMOVE_DEVELOPER);
	}

	public void setProjectLeader(Project project, Developer developer) throws OperationNotAllowedException{
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} 
		else if (!project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("Developer not found");
		}
		else {
			project.setProjectLeader(developer.getId());
		}
		
		setChanged();
		notifyObservers(NotificationType.CHANGE_PROJECT_LEADER);
	}

	public void addActivity(Project project, Activity activity) throws OperationNotAllowedException {
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} 
		else {
			activity.setStart(project.getStart());
			activity.setDeadline(project.getDeadline());
			activity.updateDuration();
			project.addActivity(activity);
		}	
	}

	public void removeActivity(Project project, Activity activity) throws OperationNotAllowedException {
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} 
		else if (!project.isProjectActivity(activity)) {
			throw new OperationNotAllowedException("Activity is not part of the project");
		} 
		else {
			project.removeActivity(activity);

			for (Developer dev : activity.getActivityDevelopers()) {
				dev.removeActivityFromCalendar(activity);
			}
		}	
	}

	public void addActivityDev(Project project, Activity activity, Developer developer) throws OperationNotAllowedException{
		if (!isAvailableForActivity(developer, activity)) {
			throw new OperationNotAllowedException("Developer is not available");
		} 
		else if (activity.isActivityDev(developer.getId())) {
			throw new OperationNotAllowedException("Developer is already working on activity");
		}
		else if (isProjectLeader(project) || activity.isActivityDev(activeUser)) {
			activity.addActivityDev(developer);
			developer.addActivityToCalendar(activity);
		} 
		else { 
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
	}

	public void removeActivityDev(Project project, Activity activity, Developer developer) throws OperationNotAllowedException {
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} 
		else if (!project.isProjectActivity(activity)) {
			throw new OperationNotAllowedException("Activity not found");
		} 
		else if (!activity.isActivityDev(developer.getId())) { 
			throw new OperationNotAllowedException("Developer not found");
		} 
		else {
			activity.removeActivityDev(developer);
			developer.removeActivityFromCalendar(activity);
		}	
	}

	public void setProjectStart(Project project, Calendar start) throws OperationNotAllowedException {
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		else if (start.after(project.getDeadline())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		project.setStart(start);
	}

	public void setProjectDeadline(Project project, Calendar deadline)throws OperationNotAllowedException {
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		else if(deadline.before(project.getStart())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		project.setDeadline(deadline);
	}

	public void setActivityStart(Project project, Activity activity, Calendar start) throws OperationNotAllowedException {
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		else if(start.after(activity.getDeadline())) {
			throw new OperationNotAllowedException("Illegal time budget");
		} 
		else if (start.before(project.getStart()) || start.after(project.getDeadline()) ) {
			throw new OperationNotAllowedException("Activity cant exceed project");
		}
		else {
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.removeActivityFromCalendar(activity);
			}
			activity.setStart(start);
			activity.updateDuration();
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.addActivityToCalendar(activity); 
			}
		}
	}

	public void setActivityDeadline(Project project, Activity activity, Calendar deadline) throws OperationNotAllowedException {
		if (!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		else if (deadline.before(activity.getStart())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		else if ( deadline.before(project.getStart()) || deadline.after(project.getDeadline()) ) {
			throw new OperationNotAllowedException("Activity cant exceed project");
		}else {
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.removeActivityFromCalendar(activity);
			}
			activity.setDeadline(deadline);
			activity.updateDuration();
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.addActivityToCalendar(activity); 
			}
		}
	}

	// Getters and setters

	public String getActiveUser() {
		return activeUser;
	}

	public List<Developer> getDevelopers() {
		return developers;
	}

	public List<Project> getProjects() {
		return projects;
	}

	// Har vi brug for den?
	public void setDateServer(DateServer dateServer) {
		this.dateServer = dateServer;
	}

	public Calendar getDate() {
		return dateServer.getDate();
	}
}

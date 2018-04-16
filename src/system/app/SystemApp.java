package system.app;


import java.time.Month;
import java.time.temporal.WeekFields;
import java.util.*;

import dtu.library.acceptance_tests.ProjectHelper;
import system.app.DateServer;

public class SystemApp {

	private List<Developer> developers = new ArrayList<Developer>();
	private boolean loggedIn = false;
	private String activeUser = "";
	private List<Project> projects = new ArrayList<Project>();
	private int nextProjectID = 1;
	private DateServer dateServer;
	
	private static final int DEADLINE_ADVANCE_DATE = 3; 
	

	public void addDeveloper(Developer developer) {
		developers.add(developer);		
	}

	/**
	 * checks if a there's a developer with given id is on the list of developers in the company
	 * 
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
		
		
		//int year = getDate().YEAR;
		int year = 18;
		String projectId = ""+ year + nextProjectID++; 
		project.setProjectId(projectId);
		projects.add(project); 
		
	}

	public void addProjectDev(Project project, Developer developer) throws OperationNotAllowedException{
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} else if (project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("User is already part of project");
		} else {
			project.addProjectDev(developer);
		}
	}
	
	public void removeProjectDev(Project project, Developer developer) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} else if (!project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("Developer not found");
		} else {
			project.removeProjectDev(developer);
		}
	}
	
	public void setProjectLeader(Project project, Developer developer) throws OperationNotAllowedException{
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} else if (!project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("Developer not found");
		}
		else {
			project.setProjectLeader(developer.getId());
		}
	}
	
	public void addActivity(Project project, Activity activity) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} else {
			project.addActivity(activity);
		}	
	}
	
	public void removeActivity(Project project, Activity activity) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} else if (!project.isProjectActivity(activity)) {
			throw new OperationNotAllowedException("Activity is not part of the project");
		} else {
			project.removeActivity(activity);
		}	
	}

	public void addActivityDev(Project project, Activity activity, Developer developer) throws OperationNotAllowedException{
		if (activity.isActivityDev(developer)) {
			throw new OperationNotAllowedException("Developer is already working on activity");
		}
		else if (activeUser.equalsIgnoreCase(project.getProjectLeader()) || activity.isActivityDev(new Developer(activeUser))) {
			for (Activity a: project.getProjectActivities()) {
				if (a.getActivityName().equals(activity.getActivityName())) {
					activity.addActivityDev(developer);
				}
			}
		}
		else if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
	}
	
	public void removeActivityDev(Project project, Activity activity, Developer developer) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		} else if (!project.isProjectActivity(activity)) {
			throw new OperationNotAllowedException("Activity not found");
		} else if (!activity.isActivityDev(developer)) { 
			throw new OperationNotAllowedException("Developer not found");
		} else {
			activity.removeActivityDev(developer);
		}	
	}

	public void userLogout() {
		activeUser = "";
		loggedIn = false;	
	}

	public void setProjectStart(Project project, Calendar start) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}else if (start.after(project.getDeadline())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		project.setStart(start);
	}

	public void setProjectDeadline(Project project, Calendar deadline)throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}else if(deadline.before(project.getStart())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		project.setDeadline(deadline);
	}
	
	public void setActivityStart(Project project, Activity activity, Calendar start) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		else if(false) {
			throw new OperationNotAllowedException("Illegal time budget");
		} 
		else if (false) {
			throw new OperationNotAllowedException("Activity cant exceed project");
		}
		activity.setStart(start);
	}

	public void setActivityDeadline(Project project, Activity activity, Calendar deadline) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		else if (false) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		else if (false) {
			throw new OperationNotAllowedException("Activity cant exceed project");
		}
		activity.setDeadline(deadline);
		
	}
	
	private boolean StartComesAfterDeadline(int startWeek, int startYear, int deadlineWeek, int deadlineYear) {
		if (deadlineWeek == -1 && deadlineYear == -1) {
			return false;
		}else if (deadlineYear < startYear) {
			return true;
		}
		else if ((deadlineWeek < startWeek) && (deadlineYear <= startYear)) {
			return true;
		}
		return false;
	}
	
	private boolean DeadlineComesBeforeStart(int startWeek, int startYear, int deadlineWeek, int deadlineYear) {
		if (startWeek == -1 && startYear == -1) {
			return false;
		}else if (deadlineYear < startYear) {
			return true;
		}
		else if ((deadlineWeek < startWeek) && (deadlineYear <= startYear)) {
			return true;
		}
		return false;
	}
	
	public String getActiveUser() {
		return activeUser;
	}

	public List<Developer> getDevelopers() {
		return developers;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setDateServer(DateServer dateServer) {
		this.dateServer = dateServer;
	}
	///////////////////////////
	// DENNE HER DUR IKKE /////
	//////////////////////77777
	public Calendar getDate() {
		return dateServer.getDate();
	}

}

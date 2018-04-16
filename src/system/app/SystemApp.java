package system.app;


import java.util.*;

import dtu.library.acceptance_tests.ProjectHelper;
import system.app.DateServer;

public class SystemApp {

	private List<Developer> developers = new ArrayList<Developer>();
	private boolean loggedIn = false;
	private String activeUser = "";
	private List<Project> projects = new ArrayList<Project>();
	private int year;
	private int nextProjectID = 1;
	private DateServer dateServer;

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
		year = 18;
		//year = getYear();
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

	public void setProjectStart(Project project, int startWeek, int startYear) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}else if(StartComesAfterDeadline(startWeek,startYear,project.getDeadlineWeek(),project.getDeadlineYear())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		project.setStart(startWeek, startYear);
	}

	public void setProjectDeadline(Project project, int deadlineWeek, int deadlineYear)throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}else if(DeadlineComesBeforeStart(project.getStartWeek(),project.getStartYear(), deadlineWeek, deadlineYear)) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		project.setDeadline(deadlineWeek, deadlineYear);
	}
	
	public void setActivityStart(Project project, Activity activity, int startWeek, int startYear) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		else if(StartComesAfterDeadline(startWeek,startYear,activity.getDeadlineWeek(),activity.getDeadlineYear())) {
			throw new OperationNotAllowedException("Illegal time budget");
		} 
		else if (DeadlineComesBeforeStart(project.getStartWeek(), project.getStartYear(), startWeek, startYear)
				|| StartComesAfterDeadline(startWeek, startYear, project.getDeadlineWeek(), project.getDeadlineYear())) {
			throw new OperationNotAllowedException("Activity cant exceed project");
		}
		activity.setStart(startWeek, startYear);
	}

	public void setActivityDeadline(Project project, Activity activity, int deadlineWeek, int deadlineYear) throws OperationNotAllowedException {
		if (!activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		else if(DeadlineComesBeforeStart(activity.getStartWeek(), activity.getStartYear(), deadlineWeek, deadlineYear)) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		else if (DeadlineComesBeforeStart(project.getStartWeek(), project.getStartYear(),deadlineWeek, deadlineYear)
				|| 
				
				StartComesAfterDeadline(deadlineWeek, deadlineYear, project.getDeadlineWeek(), project.getDeadlineYear())) {
			
			throw new OperationNotAllowedException("Activity cant exceed project");
		}
		activity.setDeadline(deadlineWeek, deadlineYear);
		
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
	
	/*
	public Calendar getDate() {
		return dateServer.getDate();
	}
	*/
	
	public int getWeek() {
		return dateServer.getWeek();
	}
	public int getYear() {
		return dateServer.getYear();
	}

}

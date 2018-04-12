package system.app;


import java.util.*;

public class SystemApp {

	private List<Developer> developers = new ArrayList<Developer>();
	private boolean loggedIn = false;
	private String activeUser = "";
	private List<Project> projects = new ArrayList<Project>();
	private int year = 18 ;
	private int nextProjectID = 1;

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

	public void addProject(Project project) throws OperationNotAllowedException{
		for (Project p: projects) {
			if (p.getProjectName().equalsIgnoreCase(project.getProjectName())) { 
				throw new OperationNotAllowedException("Illegal project name");
			}
		}
		String projectId = ""+ year + nextProjectID++; 
		project.setProjectId(projectId);
		projects.add(project); 

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

	public void userLogout() {
		activeUser = "";
		loggedIn = false;	
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

}

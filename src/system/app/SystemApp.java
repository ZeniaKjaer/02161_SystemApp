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
	 * checks if a theres a developer with given id is on the list of developers in the company
	 * 
	 * @param id
	 * @return true if developer is in the system 
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */  
	public boolean isInTheSystem(String id) throws OperationNotAllowedException {
		 for (Developer developer : developers) {
			 if (id == developer.getId()) 
				 return true; 
		 }
		 throw new OperationNotAllowedException("Wrong initials");
	} 

	public void userLogin(String id) throws OperationNotAllowedException  {
		if (isInTheSystem(id)) {		
		activeUser = id;
		loggedIn = true;
		}
	}
	
	public void addProjectDev(Project project, Developer developer) throws OperationNotAllowedException{
		if (activeUser != project.getProjectLeader() ) {
			throw new OperationNotAllowedException("project leader authorization needed");
		} else if (isProjectDev(developer)) {
			throw new OperationNotAllowedException("user is already part of project");
		}
		else {
			project.addProjectDev(developer);
		}
	}
	
	public void addActivity(Project project, Activity activity) throws OperationNotAllowedException {
		if (activeUser != project.getProjectLeader() ) {
			throw new OperationNotAllowedException("project leader authorization needed");
		} else {
			project.addActivity(activity);
		}
		
	}
	

	private boolean isProjectDev(Developer dev) {
		for (Developer d : developers) {
			 if (d == dev) 
				 return true; 
		 }
		return false;
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

	public void addProject(Project project) throws OperationNotAllowedException{
		for (Project p: projects) {
			 if (p.getProjectName() == project.getProjectName()) { 
				 throw new OperationNotAllowedException("Illegal project name");
			 }
		}
		String projectId = ""+ year + nextProjectID++; 
		project.setProjectId(projectId);
		projects.add(project); 
		 	
	}
	
	public List<Project> getProjects() {
		return projects;
	}

}

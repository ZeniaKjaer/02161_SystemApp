package system.app;

import java.util.ArrayList;
import java.util.List;

public class Project {
	String projectLeader;
	String projectId;
	String projectName;
	private List<Developer> projectDevelopers = new ArrayList<Developer>();
	private List<Activity> projectActivities = new ArrayList<Activity>(); 

	public Project(String developerId, String projectID, String projectName) {
		this.projectLeader = developerId;
		this.projectId = projectId;
		this.projectName = projectName;
	}

	public boolean isProjectDev(Developer dev) {
		for (Developer d : projectDevelopers) {
			 if (d.getId().equalsIgnoreCase(dev.getId())) 
				 return true; 
		 }
		return false;
	}
	
	public void addProjectDev(Developer developer) throws OperationNotAllowedException{		
		projectDevelopers.add(developer);
	}
	
	public void addActivity(Activity activity) {
		projectActivities.add(activity);
	}

	public List<Developer> getProjectDevelopers() {
		return projectDevelopers;
	}

	public String getProjectName() {
		return projectName;
	}


	public String getProjectLeader() {
		return projectLeader;
	}

	public void setProjectLeader(String projectLeader) {
		this.projectLeader = projectLeader;
	}


	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}


	public void setProjectId(String projectId) {
		this.projectId = projectId;
	}

	public List<Activity> getProjectActivities() {
		return projectActivities;
	}



	

}

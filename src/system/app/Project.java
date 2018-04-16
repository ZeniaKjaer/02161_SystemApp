package system.app;

import java.util.ArrayList;
import java.util.List;

public class Project {
	String projectLeader;
	String projectId;
	String projectName;
	private int startWeek, startYear, deadlineWeek, deadlineYear;
	private List<Developer> projectDevelopers = new ArrayList<Developer>();
	private List<Activity> projectActivities = new ArrayList<Activity>();

	public Project(String developerId, String projectID, String projectName) {
		this.projectLeader = developerId;
		this.projectId = projectId;
		this.projectName = projectName;
		this.startWeek = -1;
		this.startYear = -1;
		this.deadlineWeek = -1;
		this.deadlineYear = -1;
	}
	
	public boolean isProjectDev(Developer dev) {
		if (projectDevelopers.contains(dev)) {
			return true;
		} 
			return false;
	}

	public void addProjectDev(Developer developer) throws OperationNotAllowedException {
		projectDevelopers.add(developer);
	}
	
	public void removeProjectDev(Developer developer) {
		projectDevelopers.remove(developer);
	}
	
	public boolean isProjectActivity(Activity activity) {
		if (projectActivities.contains(activity)) {
			return true;
		} 
			return false;
	}

	public void addActivity(Activity activity) {
		projectActivities.add(activity);
	}

	public void removeActivity(Activity activity) {
		projectActivities.remove(activity);
	}

	//Getters and Setters
	
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

	public String getProjectId() {
		return projectId;
	}

	public void setStart(int startWeek, int startYear) {
		this.startWeek = startWeek;
		this.startYear = startYear;
	}

	public void setDeadline(int deadlineWeek, int deadlineYear) {
		this.deadlineWeek = deadlineWeek;
		this.deadlineYear = deadlineYear;
	}
	
	public int getStartWeek() {
		return startWeek;
	}

	public int getDeadlineWeek() {
		return deadlineWeek;
	}

	public int getStartYear() {
		return startYear;
	}

	public int getDeadlineYear() {
		return deadlineYear;
	}


}

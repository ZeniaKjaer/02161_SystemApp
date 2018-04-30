package system.app;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

/**
 * @author Helena
 */
public class Project {
	String projectLeader;
	String projectId;
	String projectName;
	private Calendar start, deadline;
	private List<Developer> projectDevelopers = new ArrayList<Developer>();
	private List<Activity> projectActivities = new ArrayList<Activity>();

	public Project(String developerId, String projectID, String projectName) {
		this.projectLeader = developerId;
		this.projectId = projectID;
		this.projectName = projectName;	
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
		activity.setStart(start);
		activity.setDeadline(deadline);
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

	public void setStart(Calendar start)  {
		this.start = start;
	}

	public void setDeadline(Calendar deadline) {
		this.deadline = deadline;
	}
	
	public Calendar getStart() {
		return start;
	}

	public Calendar getDeadline() {
		return deadline;
	}

}

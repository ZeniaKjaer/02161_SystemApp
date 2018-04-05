package system.app;

public class Project {
	String projectLeader;
	String projectId;
	String projectName;

	

	public Project(String developerId, String projectID, String projectName) {
		this.projectLeader = developerId;
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
	
	

}

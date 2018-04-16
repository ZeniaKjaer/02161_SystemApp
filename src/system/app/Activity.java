package system.app;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class Activity {
	String acitivityName;
	private Calendar start, deadline;
	private List<Developer> activityDevelopers = new ArrayList<Developer>();

	public Activity(String activityName) {
		this.acitivityName = activityName;
	}
	
	public boolean isActivityDev(Developer developer) {
		for (Developer d: activityDevelopers) {
			if (d.getId().equals(developer.getId())) {
				return true;
			}
		}
		return false;
	}

	public void addActivityDev(Developer developer) {
		activityDevelopers.add(developer);
	}
	
	public void removeActivityDev(Developer developer) {
		activityDevelopers.remove(developer);
	}
	
	// Getters and Setters
	public List<Developer> getActivityDevelopers() {
		return activityDevelopers;
	}
	
	public String getActivityName() {
		return acitivityName;
	}
	public void setStart(Calendar start) {
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

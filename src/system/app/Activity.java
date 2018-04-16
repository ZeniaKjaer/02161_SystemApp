package system.app;

import java.util.ArrayList;
import java.util.List;

public class Activity {
	String acitivityName;
	private int startWeek, startYear, deadlineWeek, deadlineYear;
	private List<Developer> activityDevelopers = new ArrayList<Developer>();

	public Activity(String activityName) {
		this.acitivityName = activityName;
		this.startWeek = -1;
		this.startYear = -1;
		this.deadlineWeek = -1;
		this.deadlineYear = -1;
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

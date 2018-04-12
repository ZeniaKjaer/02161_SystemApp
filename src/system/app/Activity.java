package system.app;

import java.util.ArrayList;
import java.util.List;

public class Activity {
	String acitivityName;
	private List<Developer> activityDevelopers = new ArrayList<Developer>();

	public Activity(String activityName) {
		this.acitivityName = activityName;
	}
	
	public String getActivityName() {
		return acitivityName;
	}

	public void addActivityDev(Developer developer) {
		activityDevelopers.add(developer);
		
	}

	public List<Developer> getActivityDevelopers() {
		return activityDevelopers;
	}

	public boolean isActivityDev(Developer developer) {
		for (Developer d: activityDevelopers) {
			if (d.getId().equals(developer.getId())) {
				return true;
			}
		}
		return false;
	}
	
}

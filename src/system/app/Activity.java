package system.app;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

/**
 * @author Rikke
 */
public class Activity {
	String acitivityName;
	private Calendar start, deadline;
	private List<Developer> activityDevelopers = new ArrayList<Developer>();
	private ArrayList<Week> duration;

	public Activity(String activityName) {
		this.acitivityName = activityName;
		this.duration = new ArrayList<>();
	}

	public boolean isActivityDev(String developerId) {
		for (Developer d: activityDevelopers) {
			if (d.getId().equals(developerId)) {
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

	public void updateDuration() {
		duration.clear();
		Calendar tempDate = new GregorianCalendar(start.get(Calendar.YEAR), 
				start.get(Calendar.MONTH),
				start.get(Calendar.DAY_OF_MONTH));

		while (!tempDate.after(deadline)) {
			duration.add(new Week(tempDate.get(Calendar.WEEK_OF_YEAR),tempDate.get(Calendar.YEAR)));
			tempDate.add(Calendar.WEEK_OF_YEAR, 1);
		}
	}
	
	// Getters and Setters
	public List<Developer> getActivityDevelopers() {
		return activityDevelopers;
	}
	
	// only used by the user interface
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

	public ArrayList<Week> getDuration() {
		return duration;
	}

}

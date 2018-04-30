package system.app;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Map;

/**
 * @author Mai-Thi
 */
public class Developer {

	private String id;
	DevCalendar devCalendar;
	ArrayList<Project> myProjects;
	ArrayList<Activity> myActivities;
	

	//Constructor
	public Developer(String id) {
		this.id = id;
		this.myProjects = new ArrayList<>();
		this.myActivities = new ArrayList<>();

		// Create personal calendar
		Calendar startDay = new GregorianCalendar();
		devCalendar = new DevCalendar(startDay.get(Calendar.YEAR));
	}

	public void addActivityToCalendar(Activity activity) {
		for (Week week : activity.getDuration()) {
			devCalendar.incrementActivity(week);
		}
	}

	public void removeActivityFromCalendar(Activity activity) {
		for (Week week : activity.getDuration()) {
			devCalendar.decrementActivity(week);
		}
	}
	
	// developer is available that week, if she has less than 20 activities in her calendar
	public boolean isAvailable(Week week) {	
		if(!devCalendar.haveYear(week.getYear())) {
			return false;
		}
		else if (devCalendar.getActivityLevel(week) < 20) {
			return true;
		}
		return false;
	}
	
	// returns number of activities that week
	public int getActivityLevel(Week week) {
		return devCalendar.getActivityLevel(week);
	}
	
	public DevCalendar getDevCalendar() {
		return devCalendar;
	}
	
	public String getId() {
		return id;
	}

	public ArrayList<Project> getMyProjects() {
		return myProjects;
	}

	public ArrayList<Activity> getMyActivities() {
		return myActivities;
	}

}	



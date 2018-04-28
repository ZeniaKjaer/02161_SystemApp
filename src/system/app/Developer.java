package system.app;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class Developer {

	private String id;
	DevCalendar devCalendar;

	//Constructor
	public Developer(String id) {
		this.id = id;

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
}	



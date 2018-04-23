package system.app;

import java.util.ArrayList;
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

	public String getId() {
		return id;
	}

	public void addActivityToCalendar(Activity activity) {
		for (Week week : activity.getDuration()) {
			devCalendar.incrementActivity(week);
		}
	}

	public DevCalendar getDevCalendar() {
		return devCalendar;
	}


	public void removeActivityFromCalendar(Activity activity) {
		for (Week week : activity.getDuration()) {
			devCalendar.decrementActivity(week);
		}
	}

}	



package system.app;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.LinkedHashMap;
import java.util.Map;

public class DevCalendar implements Cloneable {
	private Map<Integer, int[]> calendar;

	public DevCalendar(int startYear) {
		calendar = new LinkedHashMap<>();
		for (int i = 0; i < 10; i++) {
			int[] year = new int[53];			
			calendar.put(startYear+1, year);
		}
	}

	public void incrementActivity(Week week) {
		calendar.get(week.getYear())[week.getWeekOfYear()]++;
	}

	public void decrementActivity(Week week) {
		calendar.get(week.getYear())[week.getWeekOfYear()]--;
	}

	public DevCalendar copy() throws CloneNotSupportedException {
		DevCalendar copy;
		try {
			copy = (DevCalendar) super.clone();
		} catch (CloneNotSupportedException e) { // this should never happen
			System.out.println("CloneNotSupportedException thrown " + e);
	        return null;
		}
		return copy;
	}

	public int getActivityLevel(Week week) {
		return calendar.get(week.getYear())[week.getWeekOfYear()];
	}
}

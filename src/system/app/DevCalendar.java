package system.app;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author Zenia
 */
public class DevCalendar {

	private Map<Integer,  int[]> calendar;

	public DevCalendar(int startYear) {
		calendar = new LinkedHashMap<>();
		for (int i = 0; i < 100; i++) {
			int[] year = new int[54];			
			calendar.put(startYear+i, year);
		}
	}

	public void incrementActivity(Week week) {
		calendar.get(week.getYear())[week.getWeekOfYear()]++; 
	}

	public void decrementActivity(Week week) {
		calendar.get(week.getYear())[week.getWeekOfYear()]--;
	}

	public void setCalendar(Week week, int numberOfActivities) {
		calendar.get(week.getYear())[week.getWeekOfYear()] = numberOfActivities;
	}

	public int getActivityLevel(Week week) {
		return calendar.get(week.getYear())[week.getWeekOfYear()];
	}

}

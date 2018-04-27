package system.app;

import java.util.LinkedHashMap;
import java.util.Map;

public class DevCalendar implements Cloneable {
	
	private Map<Integer, int[]> calendar;
	private int startYear;

	public DevCalendar(int startYear) {
		this.startYear = startYear;
		calendar = new LinkedHashMap<>();
		for (int i = 0; i < 10; i++) {
			int[] year = new int[54];			
			calendar.put(startYear+i, year);
		}
	}

	public void incrementActivity(Week week) {
		//DbC
		assert calendar.get(week.getYear())[week.getWeekOfYear()] >= 0
				&& calendar.get(week.getYear())[week.getWeekOfYear()] < 20 : "Precondition violated " ;
		int pre = calendar.get(week.getYear())[week.getWeekOfYear()];
		
		calendar.get(week.getYear())[week.getWeekOfYear()]++;
		
		assert calendar.get(week.getYear())[week.getWeekOfYear()] == pre+1 : "Postcondition violated";
	}

	public void decrementActivity(Week week) {
		//DbC
		assert calendar.get(week.getYear())[week.getWeekOfYear()] > 0
				&& calendar.get(week.getYear())[week.getWeekOfYear()] <= 20 : "Precondition violated " ;
		int pre = calendar.get(week.getYear())[week.getWeekOfYear()];
		
		calendar.get(week.getYear())[week.getWeekOfYear()]--;
		
		assert calendar.get(week.getYear())[week.getWeekOfYear()] == pre-1 : "Postcondition violated";
	}

	public DevCalendar copy() throws CloneNotSupportedException {
		DevCalendar copy;
		try {
			copy = (DevCalendar) super.clone();
		} catch (CloneNotSupportedException e) { // this should never happen
			System.out.println("CloneNotSupportedException thrown" + e);
	        return null;
		}
		return copy;
	}
	

	public DevCalendar copy2() throws CloneNotSupportedException {
		DevCalendar copy = new DevCalendar(this.startYear);
		

		return copy;
	}


	public void SetCalendar(Week week, int numberOfActivities) {
		calendar.get(week.getYear())[week.getWeekOfYear()] = numberOfActivities;
	}
	
	public int getActivityLevel(Week week) {
		return calendar.get(week.getYear())[week.getWeekOfYear()];
	}
}

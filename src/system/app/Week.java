package system.app;

import javafx.util.Pair;

/**
 * @author Zenia
 */
public class Week {
	
	
	 Pair<Integer, Integer> week;

	public Week(int weekOfYear, int year) {
		this.week = new Pair<>(weekOfYear,year);
	}

	public Pair<Integer, Integer> getWeek() {
		return week;
	}

	public int getWeekOfYear() {
		return week.getKey();
	}
	
	public int getYear() {
		return week.getValue();
	}
}


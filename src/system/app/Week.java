package system.app;

import javafx.util.Pair;

public class Week {
	Pair week;

	public Week(int week, int year) {
		this.week = new Pair(week,year);
	}

	public Pair getWeek() {
		return week;
	}

}


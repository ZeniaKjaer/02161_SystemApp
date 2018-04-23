package system.app;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;

public class DevCalendar {
	ArrayList<int[]> calendar = new ArrayList<int[]>();

	public DevCalendar(int startYear) {
		for (int i = 0; i < 5; i++) {
			int[] year = new int[54];
			year[0] = startYear + i;
			calendar.add(year);	

		}
	}

	public void incrementActivity(Week week) {
		// TODO Auto-generated method stub
		
	}

	public void decrementActivity(Week week) {
		// TODO Auto-generated method stub
		
	}

	public DevCalendar copy() {
		// TODO Auto-generated method stub
		return null;
	}

	public int getActivityLevel(Week week) {
		// TODO Auto-generated method stub
		return 0;
	}
}

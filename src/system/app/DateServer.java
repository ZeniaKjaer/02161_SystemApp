package system.app;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class DateServer {

	/**
	 * Return the current date without the current time.
	 * @return the current date without the current time
	 */
	public Calendar getDate() {
		Calendar calendar = new GregorianCalendar();
		Calendar c = new GregorianCalendar(calendar.get(Calendar.YEAR)
				,calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH));
		return c;
	}
	
	/**
	 * 
	 */
	public int getWeek() {
		Calendar calendar = new GregorianCalendar();
		return calendar.get(Calendar.WEEK_OF_YEAR);
	}
	
	/**
	 * 
	 */
	public int getYear() {
		Calendar calendar = new GregorianCalendar();
		return calendar.get(Calendar.YEAR);
	}
}

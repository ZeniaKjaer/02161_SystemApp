package dtu.library.acceptance_tests;

import static org.mockito.Mockito.mock;

import static org.mockito.Mockito.when;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;

import system.app.DateServer;
import system.app.SystemApp;

public class MockDateHolder {
	
	DateServer dateServer = mock(DateServer.class);
	
	public MockDateHolder(SystemApp systemApp) {
		GregorianCalendar calendar = new GregorianCalendar();
		setDate(calendar);
		systemApp.setDateServer(dateServer);
	}

	public void setDate(Calendar calendar) {
		Calendar c = new GregorianCalendar(calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH));
		when(this.dateServer.getDate()).thenReturn(c);
	}
	
//	public void setWeek(Calendar calendar) {
//		Calendar c = new GregorianCalendar(calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH));
//		when(this.dateServer.getWeek()).thenReturn(calendar.get(c.WEEK_OF_YEAR));
//	}
//	
//	public void setYear(Calendar calendar) {
//		Calendar c = new GregorianCalendar(calendar.get(Calendar.YEAR),calendar.get(Calendar.MONTH),calendar.get(Calendar.DAY_OF_MONTH));
//		when(this.dateServer.getDate()).thenReturn(c);
//	}
	
	/*
	public void advanceDateByDays(int days) {
		Calendar currentDate = dateServer.getDate();
		// Important: we need to create a new object,
		// otherwise, the old calendar object gets changed,
		// which suddenly changes the date for objects 
		// using that old calendar object
		Calendar nextDate = new GregorianCalendar();
		nextDate.setTime(currentDate.getTime());
		nextDate.add(Calendar.DAY_OF_YEAR, days);
		setDate(nextDate);
	}
	*/
	
	/*
	public void advanceDateByDays(int days) {
		Calendar currentDate = dateServer.getDate();
		// Important: we need to create a new object,
		// otherwise, the old calendar object gets changed,
		// which suddenly changes the date for objects 
		// using that old calendar object
		Calendar nextDate = new GregorianCalendar();
		nextDate.setTime(currentDate.getTime());
		nextDate.add(Calendar.DAY_OF_YEAR, days);
		setDate(nextDate);
	}
	*/
	
}


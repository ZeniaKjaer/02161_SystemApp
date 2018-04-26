package system.app;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Calendar;
import java.util.GregorianCalendar;

public class SystemAppState {
	BufferedReader rs = new BufferedReader(new InputStreamReader(System.in));
	
	private Developer enterDeveloper(SystemApp systemApp) throws IOException {
		System.out.print("Enter developer ID: ");
		String developerID = rs.readLine();
		
		for (Developer d: systemApp.getDevelopers()) {
			if(d.getId().equalsIgnoreCase(developerID)) {
				return d;
			}
		}
		return new Developer("");
	}

	private Project enterProject(SystemApp systemApp) throws IOException {
		System.out.print("Enter a project name: ");
		String projectName = rs.readLine();
		
		for (Project p: systemApp.getProjects()) {
			if(p.getProjectName().equalsIgnoreCase(projectName)) {
				return p;
			}
		}
		return new Project("","","");
	}
	
	private Calendar enterDate() throws NumberFormatException, IOException {
		System.out.print("Enter year: ");
		int year = Integer.valueOf(rs.readLine());
		System.out.print("Enter month: ");
		int month = Integer.valueOf(rs.readLine());
		System.out.print("Enter day of month: ");
		int day = Integer.valueOf(rs.readLine());
		
		Calendar date = new GregorianCalendar(year, month, day);
		return date;
	}

	public void createProject(SystemApp systemApp) throws IOException {
		System.out.print("Enter a project name: ");
		String projectName = rs.readLine();
		try {
			systemApp.addProject(new Project(null, null, projectName));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
		
	}

	public void changeProjectLeader(SystemApp systemApp) throws IOException {
		try {
			systemApp.setProjectLeader(enterProject(systemApp), enterDeveloper(systemApp));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
		
	}

	public void addDelevoperToProject(SystemApp systemApp) throws IOException {
		try {
			systemApp.addProjectDev(enterProject(systemApp), enterDeveloper(systemApp));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
	}

	public void removeDeveloperFromProject(SystemApp systemApp) throws IOException {
		try {
			systemApp.removeProjectDev(enterProject(systemApp), enterDeveloper(systemApp));
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
	}

//	public void setTimeBudgetForProject(SystemApp systemApp) throws IOException {
//		// SPØRGSMÅL!! 
//		// NÅR MAN SÆTTER TIDEN, GØR MAN SÅ BÅDE START OG DEADLINE PÅ SAMME TID??
//		// ELLER SKAL MAN HAVE DET SOM TO FORSKELLIGE MULIGHEDER I MENUEN??
//		Calendar start = new GregorianCalendar();
//		Calendar deadline = new GregorianCalendar();
//		try {
//			systemApp.setProjectStart(enterProject(systemApp), start);
//		} catch (OperationNotAllowedException e) {
//			System.out.println(e);
//		}
//		try {
//			systemApp.setProjectDeadline(enterProject(systemApp), deadline);
//		} catch (OperationNotAllowedException e) {
//			System.out.println(e);
//		}
//		
//	}

	public void setNewStartDateForProject(SystemApp systemApp) throws IOException, NumberFormatException {
		try {
			systemApp.setProjectStart(enterProject(systemApp), enterDate());
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
		
	}

	public void setNewDeadlineForProject(SystemApp systemApp) throws NumberFormatException, IOException {
		try {
			systemApp.setProjectDeadline(enterProject(systemApp), enterDate());
		} catch (OperationNotAllowedException e) {
			System.out.println(e);
		}
		
	}

}

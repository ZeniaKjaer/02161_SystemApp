package system.app.ui;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.Observable;
import java.util.Observer;

import system.app.NotificationType;
import system.app.OperationNotAllowedException;
import system.app.SystemApp;
/**
 * @author Mai-Thi
 */
public class SystemAppUI implements Observer {
	private SystemApp systemApp;
	private SystemAppController controller;

	public SystemAppUI() {
		systemApp = new SystemApp();
		systemApp.addObserver(this);
		controller = new SystemAppController();
	}

	public static void main(String[] args) throws Exception {
		new SystemAppUI().loginLoop(System.in, System.out);
	}

	private void loginLoop(InputStream in, PrintStream out) throws IOException {
		BufferedReader rs = new BufferedReader(new InputStreamReader(in));
		String initials = null;

		do {
			System.out.print("Enter Initials: "); 
			initials = rs.readLine();
			if (initials == null) {
				break;
			}
			if (initials.equals(0)) {
				break;
			}
			try {
				systemApp.userLogin(initials);
			} catch (OperationNotAllowedException e) {
				System.out.println(e);
			}
		} while (!systemApp.isInTheSystem(initials));
		mainLoop(in,out);
	}

	public void mainLoop(InputStream in, PrintStream out) throws IOException {
		BufferedReader rs = new BufferedReader(new InputStreamReader(in));
		String choice = null;
		do {
			showMenu(out);
			choice = rs.readLine();
			if (choice == null) {
				break;
			}
			try {
				int number = Integer.valueOf(choice);
				if (number == 0) {
					break;
				}
				processChoice(number,in, out);
			} catch (NumberFormatException e) {
				System.out.println(e);
			}
		} while (choice != null);
	}
	
	private void showMenu(PrintStream out) {
		//out.println("   0) Exit");
		out.println("Project:");
		out.println("   1) Create a project");
		out.println("   2) Remove a project");
		out.println("   3) Add developer to a project");
		out.println("   4) Remove developer from a project");
		out.println("   5) Change project leader");
		out.println("   6) Set a new start date for a project");
		out.println("   7) Set a new deadline for a project");
		out.println("Activity:");
		out.println("   8) Add activity to a project");
		out.println("   9) Remove activity from a project");
		out.println("   10) Add developer to an activity");		
		out.println("   11) Remove developer from an activity");	
		out.println("   12) Set a new start date for an activity");	
		out.println("   13) Set a new deadline for an activity");	
		out.println("Overview:");
		out.println("   14) Get available developers");
		out.println("   15) Get list of projects");
		out.println("   16) Get list of activities in a project");
		out.println("   17) Get list of my projects");
		out.println("   18) Get list of my activities");
		out.println("Logout:");
		out.println("   19) Logout");
		out.println("Select a number (1-19): ");
	}
	
	private void processChoice(int number,InputStream in, PrintStream out) throws IOException {
		switch (number) {
		case 1:
			out.println("CREATE A PROJECT");
			controller.createProject(systemApp);
			break;
		case 2:
			out.println("REMOVE A PROJECT");
			controller.removeProject(systemApp);
			break;
		case 3:
			out.println("ADD DEVELOPER TO A PROJECT");
			controller.addDelevoperToProject(systemApp);
			break;
		case 4:
			out.println("REMOVE DEVELOPER FROM A PROJECT");
			controller.removeDeveloperFromProject(systemApp);
			break;
		case 5:
			out.println("CHANGE PROJECT LEADER");
			controller.changeProjectLeader(systemApp);
			break;
		case 6:
			out.println("SET A NEW START DATE FOR A PROJECT");
			controller.setNewStartDateForProject(systemApp);
			break;
		case 7:
			out.println("SET A NEW DEADLINE FOR A PROJECT");
			controller.setNewDeadlineForProject(systemApp);
			break;
		case 8:
			out.println("ADD ACTIVITY TO A PROJECT");
			controller.addActivityToProject(systemApp);
			break;
		case 9:
			out.println("REMOVE ACTIVITY FROM A PROJECT");
			controller.removeActivityFromProject(systemApp);
			break;
		case 10:
			out.println("ADD DEVELOPER TO AN ACTIVITY"); 
			controller.addDeveloperToActivity(systemApp);
			break;
		case 11:
			out.println("REMOVE DEVELOPER FROM AN ACTIVITY");
			controller.removeDeveloperFromActivity(systemApp);
			break;
		case 12:
			out.println("SET A NEW START DATE FOR AN ACTIVITY");
			controller.setNewStartDateForActivity(systemApp);
			break;
		case 13:
			out.println("SET A NEW DEADLINE FOR AN ACTIVITY");
			controller.setNewDeadlineForActivity(systemApp);
			break;
		case 14:
			out.println("GET AVAILABLE DEVELOPERS");
			controller.getAvailableDevelopers(systemApp);
			break;
		case 15:
			out.println("GET LIST OF PROJECTS");
			controller.getListOfProjects(systemApp);
			break;
		case 16:
			out.println("GET LIST OF ACTIVITIES IN A PROJECTS");
			controller.getListOfActivities(systemApp);
			break;
		case 17:
			out.println("GET LIST OF MY PROJECTS");
			controller.getMyProjects(systemApp);
			break;
		case 18:
			out.println("GET LIST OF MY ACTIVITIES");
			controller.getMyActivities(systemApp);
			break;
		case 19:
			systemApp.userLogout();
			loginLoop(in,out);
			break;
		default:
			break;
		}
	}

	public void update(Observable o, Object aspect) {
		SystemApp s = (SystemApp) o;

		if(NotificationType.LOGIN.equals(aspect)) {
			System.out.println("Active user: " + s.getActiveUser());
		}
		if(NotificationType.LOGOUT.equals(aspect)) {
			System.out.println("User has logged out");
		}
		if (NotificationType.ADD_PROJECT.equals(aspect)) {
			System.out.println("The project has been added to the system.");
		}
		if (NotificationType.CHANGE_PROJECT_LEADER.equals(aspect)) {
			System.out.println("The project leader has been changed");
		}
		if (NotificationType.ADD_DEVELOPER.equals(aspect)) {
			System.out.println("The developer has been added.");
		}
		if (NotificationType.REMOVE_DEVELOPER.equals(aspect)) {
			System.out.println("The developer has been removed.");
		}
		if (NotificationType.TIME_BUDGET.equals(aspect)) {
			System.out.println("The time budget has been changed.");
		}
		if (NotificationType.ADD_ACTIVITY.equals(aspect)) {
			System.out.println("The activity has been added.");
		}
		if (NotificationType.REMOVE_ACTIVITY.equals(aspect)) {
			System.out.println("The activity has been removed.");
		}
	}
}


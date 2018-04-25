package system.app.ui;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.util.Observable;
import java.util.Observer;
import system.app.OperationNotAllowedException;
import system.app.Project;
import system.app.SystemApp;
import system.app.SystemAppState;

public class SystemAppUI implements Observer {
	private SystemApp systemApp;
	private SystemAppState state = new SystemAppState(); // package visible attribute

	public SystemAppUI() {
		systemApp = new SystemApp();
		systemApp.addObserver(this);
	}

	public SystemAppUI(SystemApp s) {
		systemApp = s;
		systemApp.addObserver(this);
	}


	public static void main(String[] args) throws Exception {

		new SystemAppUI().loginLoop(System.in, System.out);

	}

	private void loginLoop(InputStream in, PrintStream out) throws IOException {
		BufferedReader rs = new BufferedReader(new InputStreamReader(in));
		String initials = null;

		do {
			systemApp.userLogout();
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

	private void showMenu(PrintStream out) {
		//out.println("   0) Exit");
		out.println("   1) Create a project");
		out.println("   2) Add developer to a project");
		out.println("   3) Change project leader");
		out.println("   4) Remove developer from a project");
		out.println("   5) Set time budget for a project");
		out.println("   6) Logout");
		out.println("Select a number (1-6): ");

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
			int number = Integer.valueOf(choice);
			if (number == 0) {
				break;
			}
			processChoice(number,in, out);

		} while (choice != null);
	}
	private void processChoice(int number,InputStream in, PrintStream out) throws IOException {
		switch (number) {
		case 1:
			System.out.println("CREATE A PROJECT");
			state.createProject(systemApp);
			break;

		case 2:
			System.out.println("ADD DEVELOPER TO A PROJECT");
			state.addDelevoperToProject(systemApp);
			break;
		case 3:
			System.out.println("CHANGE PROJECT LEADER");
			state.changeProjectLeader(systemApp);
			break;
		case 4:
			System.out.println("Remove developer from a project");
			break;
		case 5:
			System.out.print("Set time budget for a project");
			break;
		case 6:
			loginLoop(in, out);
			System.out.println("User is logged out");
			break;
		default:
			break;
		}
	}

	@Override
	public void update(Observable o, Object aspect) {
		SystemApp s = (SystemApp) o;
		
		if(system.app.NotificationType.ACTIVE_USER.equals(aspect)) {
			System.out.println("Active user: " + s.getActiveUser());
		}
		
		if (system.app.NotificationType.ADD_PROJECT.equals(aspect)) {
			System.out.println("Project has been added to the system.");
		}
		
		if (system.app.NotificationType.CHANGE_PROJECT_LEADER.equals(aspect)) {
			System.out.println("The project leader has been changed");
		}
	}


}


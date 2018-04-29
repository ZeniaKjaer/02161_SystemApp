package system.app;

import java.util.*;
import javafx.util.Pair;
import system.app.DateServer;

public class SystemApp extends Observable{

	private boolean loggedIn = false;
	private String activeUser = "";
	private List<Developer> developers = new ArrayList<Developer>();
	private List<Project> projects = new ArrayList<Project>();
	private int nextProjectID = 1000;
	private DateServer dateServer = new DateServer();;
	private static final int DEADLINE_ADVANCE_DATE = 3; 

	/**
	 * Constructs a SystemApp with specific developers and projects
	 * @author Mai-Thi
	 */
	public SystemApp() {
		developers.add(new Developer("ABCD"));
		developers.add(new Developer("HERE"));
		developers.add(new Developer("MTVD"));
		developers.add(new Developer("RITG"));
		developers.add(new Developer("ZEKT"));
	}

	/**
	 * Adds developers to SystemApp
	 * @param developer
	 * @author Mai-Thi
	 */
	public void addDeveloper(Developer developer) {
		developers.add(developer);	
	}

	/**
	 * checks if a there's a developer with given id on the list of developers in SystemApp
	 * @param id
	 * @return true if developer is in the system 
	 * @throws OperationNotAllowedException
	 * @author Mai-Thi
	 */  
	public boolean isInTheSystem(String id) {
		for (Developer developer : developers) {
			if (id.equalsIgnoreCase(developer.getId())) {
				return true; 
			}
		}
		return false;
	}
	
	/**
	 *If the entered Id represents a developer in the SystemApp 
	 *then the user is logged in and is the active user 
	 * @param id
	 * @throws OperationNotAllowedException
	 * @author Mai-Thi
	 */
	public void userLogin(String id) throws OperationNotAllowedException  {
		if (!isInTheSystem(id)) {
			throw new OperationNotAllowedException("Wrong initials");
		} else if (loggedIn) {
			throw new OperationNotAllowedException("Another user is already logged in");
		}
		else {
			activeUser = id;
			loggedIn = true;
		}
		setChanged();
		notifyObservers(NotificationType.ACTIVE_USER);
	}
	
	/**
	 * Logs out off the SystemApp
	 * @author Mai-Thi
	 */
	public void userLogout() {
		activeUser = "";
		loggedIn = false;	
	}

	/**
	 * Checks if the active user is the same as the project leader
	 * @param project
	 * @return true, if the active user is the project leader of the given project
	 * @author Rikke
	 */
	public boolean isProjectLeader(Project project)  {
		if(activeUser.equalsIgnoreCase(project.getProjectLeader())) {
			return true;
		}
		return false;
	}
	/**
	 * Checks if a developer has less than 20 activities during the activity
	 * @param developer
	 * @param activity
	 * @return
	 * @author Zenia
	 */
	public boolean isAvailableForActivity(Developer developer, Activity activity) {
		for (Week week : activity.getDuration()) {
			if (!developer.isAvailable(week)) {
				return false;
			}
		} 
		return true;
	} 

	/**
	 * Adds a project to the systemApp. 
	 * Initialise the project by setting the project start to that day the project is added, 
	 * and the deadline 3 weeks later. 
	 * Gives the project a unique project id.
	 * @param project
	 * @throws OperationNotAllowedException
	 * @author Helena
	 */
	public void addProject(Project project) throws OperationNotAllowedException{
		for (Project p: projects) {
			if (p.getProjectName().equalsIgnoreCase(project.getProjectName())) { 
				throw new OperationNotAllowedException("Illegal project name");
			}
		}
		Calendar start = new GregorianCalendar();
		project.setStart(start);
		Calendar deadline = new GregorianCalendar(); 
		deadline.add(Calendar.WEEK_OF_YEAR,  DEADLINE_ADVANCE_DATE);
		project.setDeadline(deadline);

		int year = getDate().get(Calendar.YEAR);
		String projectId = ""+ year + nextProjectID++; 
		project.setProjectId(projectId);

		projects.add(project); 	

		setChanged();
		notifyObservers(NotificationType.ADD_PROJECT);
	}

	/**
	 * Add a developer to project
	 * @param project
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void addProjectDev(Project project, Developer developer) throws OperationNotAllowedException{
		// Skal vaere her iflg vores whitebox-test for denne metode
		if(!projects.contains(project)) {
			throw new OperationNotAllowedException("Project is not in the system");
		} else if(!isInTheSystem(developer.getId())) { // Jeg har aendret dit if-statement
			throw new OperationNotAllowedException("Developer is not in the system");
		}
		// whitebox-test tilfoejelse slut
		projectLeaderCheck(project);
		if (project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("User is already part of project");
		} 
		else {
			project.addProjectDev(developer);
		}

		setChanged();
		notifyObservers(NotificationType.ADD_DEVELOPER);
	}
	/**
	 * Removes Developer from project
	 * @param project
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void removeProjectDev(Project project, Developer developer) throws OperationNotAllowedException {
		projectLeaderCheck(project);
		if (!project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("Developer not found");
		} 
		else {
			project.removeProjectDev(developer);
		}
		setChanged();
		notifyObservers(NotificationType.REMOVE_DEVELOPER);
	}

	/**
	 * Sets a new project leader among the project developers
	 * @param project
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Helena
	 */
	public void setProjectLeader(Project project, Developer developer) throws OperationNotAllowedException{
		projectLeaderCheck(project);
		if (!project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("Developer not found");
		}
		else {
			project.setProjectLeader(developer.getId());
		}

		setChanged();
		notifyObservers(NotificationType.CHANGE_PROJECT_LEADER);
	}

	/**
	 * Adds an activty to project
	 * @param project
	 * @param activity
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void addActivity(Project project, Activity activity) throws OperationNotAllowedException {
		projectLeaderCheck(project);

		activity.setStart(project.getStart());
		activity.setDeadline(project.getDeadline());
		activity.updateDuration();
		project.addActivity(activity);	

		setChanged();
		notifyObservers(NotificationType.ADD_ACTIVITY);
	}
	
	/**
	 * Removes an activity from project
	 * @param project
	 * @param activity
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void removeActivity(Project project, Activity activity) throws OperationNotAllowedException {
		if(!projects.contains(project)) {
			throw new OperationNotAllowedException("Project is not in the system"); 
		}
		projectLeaderCheck(project);
		if (!project.isProjectActivity(activity)) {
			throw new OperationNotAllowedException("Activity is not part of the project");
		} 
		else {
			project.removeActivity(activity);
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.removeActivityFromCalendar(activity);
			}
		}
		setChanged();
		notifyObservers(NotificationType.REMOVE_ACTIVITY);
	}

	/**
	 * Adds an available developer to activity, and add the activity to developers calendar
	 * @param project
	 * @param activity
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void addActivityDev(Project project, Activity activity, Developer developer) throws OperationNotAllowedException{
		if (!isAvailableForActivity(developer, activity)) {
			throw new OperationNotAllowedException("Developer is not available");
		} 
		else if (activity.isActivityDev(developer.getId())) {
			throw new OperationNotAllowedException("Developer is already working on activity");
		}
		else if (isProjectLeader(project) || activity.isActivityDev(activeUser)) {
			activity.addActivityDev(developer);
			developer.addActivityToCalendar(activity);
		} 
		else { 
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
		setChanged();
		notifyObservers(NotificationType.ADD_DEVELOPER);
	}

	/**
	 * Removes a developer from activty and remove activity from developers calendar
	 * @param project
	 * @param activity
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void removeActivityDev(Project project, Activity activity, Developer developer) throws OperationNotAllowedException {
		projectLeaderCheck(project);
		if (!project.isProjectActivity(activity)) {
			throw new OperationNotAllowedException("Activity not found");
		} 
		else if (!activity.isActivityDev(developer.getId())) { 
			throw new OperationNotAllowedException("Developer not found");
		} 
		else {
			activity.removeActivityDev(developer);
			developer.removeActivityFromCalendar(activity);
		}
		setChanged();
		notifyObservers(NotificationType.REMOVE_DEVELOPER);
	}

	/**
	 * Sets the project start
	 * @param project
	 * @param start
	 * @throws OperationNotAllowedException
	 * @author Mai-Thi
	 */
	public void setProjectStart(Project project, Calendar start) throws OperationNotAllowedException {
		projectLeaderCheck(project);
		if (start.after(project.getDeadline())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		project.setStart(start);

		setChanged();
		notifyObservers(NotificationType.TIME_BUDGET);
	}

	/**
	 * Sets the project deadline
	 * @param project
	 * @param deadline
	 * @throws OperationNotAllowedException
	 * @author Mai-Thi
	 */
	public void setProjectDeadline(Project project, Calendar deadline)throws OperationNotAllowedException {
		projectLeaderCheck(project);
		if(deadline.before(project.getStart())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		project.setDeadline(deadline);

		setChanged();
		notifyObservers(NotificationType.TIME_BUDGET);
	}

	/**
	 * Sets the activity start and update activity duration
	 * @param project
	 * @param activity
	 * @param start
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void setActivityStart(Project project, Activity activity, Calendar start) throws OperationNotAllowedException {
		projectLeaderCheck(project);
		if(start.after(activity.getDeadline())) {
			throw new OperationNotAllowedException("Illegal time budget");
		} 
		else if (start.before(project.getStart()) || start.after(project.getDeadline()) ) {
			throw new OperationNotAllowedException("Activity cant exceed project");
		}
		else {
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.removeActivityFromCalendar(activity);
			}
			activity.setStart(start);
			activity.updateDuration();
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.addActivityToCalendar(activity); 
			}
		}
		setChanged();
		notifyObservers(NotificationType.TIME_BUDGET);
	}

	/**
	 * Sets the activity deadline and update activity duration
	 * @param project
	 * @param activity
	 * @param deadline
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void setActivityDeadline(Project project, Activity activity, Calendar deadline) throws OperationNotAllowedException {
		projectLeaderCheck(project);
		if (deadline.before(activity.getStart())) {
			throw new OperationNotAllowedException("Illegal time budget");
		}
		else if ( deadline.before(project.getStart()) || deadline.after(project.getDeadline()) ) {
			throw new OperationNotAllowedException("Activity cant exceed project");
		}else {
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.removeActivityFromCalendar(activity);
			}
			activity.setDeadline(deadline);
			activity.updateDuration();
			for (Developer dev : activity.getActivityDevelopers()) {
				dev.addActivityToCalendar(activity); 
			}
		}
		setChanged();
		notifyObservers(NotificationType.TIME_BUDGET);
	}

	/**
	 * Creates a sorted list off all available developers in a given week, 
	 * from with increasing activity level
	 * @param week
	 * @return a sorted list of all available developers the given week
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */ 
	public ArrayList<Pair<String,Integer>> getAvailableDevelopers(Week week) throws OperationNotAllowedException {
		//Design by Contract
		assert week != null : "Precondition violated" ;
		ArrayList<Pair<String, Integer>> availableDevelopers = new ArrayList<>();
		if (week.getWeekOfYear() > 53) {
			throw new OperationNotAllowedException("Illegal week");
		}

		for (Developer dev : developers) {
			if(dev.haveYear(week.getYear())) {
				if (dev.isAvailable(week)) { 
					availableDevelopers.add(new Pair<String, Integer>(dev.getId(),dev.getActivityLevel(week)));

					// Sorts a list of pair<String,Integer> by its value-integer.
					Collections.sort(availableDevelopers, new Comparator<Pair<String, Integer>>() {
						@Override
						public int compare(final Pair<String, Integer> p1, final Pair<String, Integer> p2) {
							return p1.getValue().compareTo(p2.getValue());
						}
					});
				}
			}
		}
		assert isSorted(availableDevelopers) : "Postcondition violated" ;
		return availableDevelopers;
	}

	/**
	 * Checks if a list of pairs<DevId, activityLevel> is sorted, in increasing activity level
	 * @param AvailableDevelopers
	 * @return a sorted list of all available developers the given week
	 * @author Zenia
	 */ 
	public boolean isSorted(ArrayList<Pair<String, Integer>> availableDev) {
		boolean sorted = true;
		for (int i = 0; i > availableDev.size()-1; i++) {
			sorted = sorted && availableDev.get(i).getValue() <= availableDev.get(i+1).getValue();
		}
		return sorted;
	}

	/**
	 * Throws an exception if the active user isn't the project leader of the project
	 * @param project
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void projectLeaderCheck(Project project) throws OperationNotAllowedException {
		if(!isProjectLeader(project)) {
			throw new OperationNotAllowedException("Project leader authorization needed");
		}
	}
	
	///////////////////////
	///  Vi bruger ikke den her endnu
	/////////////////////////
	/**
	 * Throws an exception if start comes after the deadline  
	 * @param start
	 * @param deadline
	 * @throws OperationNotAllowedException
	 * @author Helena
	 */
	public void timeBudgetCheck(Calendar start, Calendar deadline) throws OperationNotAllowedException {
		if (deadline.before(start) || start.after(deadline)) {
			throw new OperationNotAllowedException("Illegal time budget");	
		}
	}

	// Getters and setters
	public String getActiveUser() {
		return activeUser;
	}

	public List<Developer> getDevelopers() {
		return developers;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setDateServer(DateServer dateServer) {
		this.dateServer = dateServer;
	}

	public Calendar getDate() {
		return dateServer.getDate();
	}

}

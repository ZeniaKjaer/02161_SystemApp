package system.app;

import java.util.*;
import javafx.util.Pair;

public class SystemApp extends Observable{
 
	private boolean loggedIn = false;
	private String activeUser = "";
	private List<Developer> developers = new ArrayList<Developer>();
	private List<Project> projects = new ArrayList<Project>(); 
	private int nextProjectID = 1000;
	private static final int DEADLINE_ADVANCE_DATE = 3; 
 
	/**
	 * Constructs a SystemApp with specific developers
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
	 * Checks if a there's a developer with given id on the list of developers in SystemApp
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
	 *If the given Id represents a developer in the SystemApp 
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
		notifyObservers(NotificationType.LOGIN);
	}

	/**
	 * Logs out off the SystemApp
	 * @author Mai-Thi
	 */
	public void userLogout() {
		activeUser = "";
		loggedIn = false;	

		setChanged();
		notifyObservers(NotificationType.LOGOUT);
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
	 * Checks if a developer has less than 20 activities during the all weeks of activity.
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
	 * Contructs a project through the SystemApp
	 * @param String
	 * @return Project
	 * @author Mai-Thi
	 */
	
	public Project createProject(String projectName) {
		return new Project(activeUser,projectName);
	}

	/**
	 * Adds a project to the systemApp. 
	 * Initialize the project by setting the project start to that day the project is added, 
	 * and the deadline 3 weeks later.
	 * Gives the project a unique project id.
	 * @param project
	 * @throws OperationNotAllowedException
	 * @author Helena
	 */
	public void addProject(Project project) throws OperationNotAllowedException{	
		//Design by contract
		assert project!= null: "Pre-condition violated for addProject";
		loginCheck();																// 1
		for (Project p: projects) {													// 2	
			if (p.getProjectName().equalsIgnoreCase(project.getProjectName())) { 		// 3	

				throw new OperationNotAllowedException("Illegal project name");
			}
		}
		//Sets start and deadline
		Calendar start = new GregorianCalendar();
		project.setStart(start);
		Calendar deadline = new GregorianCalendar(); 
		deadline.add(Calendar.WEEK_OF_YEAR,  DEADLINE_ADVANCE_DATE);
		project.setDeadline(deadline);

		projects.add(project);														// 4		
		

		//adds the active user to the list of project developers
		for (Developer dev : developers) {											// 4
			if (dev.getId().equalsIgnoreCase(activeUser)) {
				project.addProjectDev(dev);
				dev.getMyProjects().add(project);
			}
		}

		setChanged();
		notifyObservers(NotificationType.ADD_PROJECT);

		// Post condition asserts
		for (Developer dev : developers) {
			if (dev.getId().equals(activeUser)) {
				assert project.isProjectDev(dev): "Post-condition 1 violated for addProject";
				break;
			}
		}
		assert projects.contains(project): "Post-condition 2 violated for addProject";
	}

	/**
	 * Removes a project from the systemApp
	 * Removes activities, and remove activities from activity developers calendar
	 * Removes project developers, and remove project from project developers
	 * @param project
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void removeProject(Project project) throws OperationNotAllowedException {
		loginCheck();
		projectCheck(project);
		projectLeaderCheck(project);
		while (project.getProjectActivities().size() > 0) {
			removeActivity(project,project.getProjectActivities().get(0));
		}

		while(project.getProjectDevelopers().size() > 0) {
			project.getProjectDevelopers().get(0).getMyProjects().remove(project);
			project.getProjectDevelopers().remove(0);
		}
		projects.remove(project);
		
		setChanged();
		notifyObservers(NotificationType.REMOVE_PROJECT);
	}

	/**
	 * Add a developer to project
	 * @param project
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void addProjectDev(Project project, Developer developer) throws OperationNotAllowedException{
		//Design by Contract
		assert project != null && developer != null: "Precondition violated for addProjectDev" ;
		loginCheck();																				// 1
		projectCheck(project);																		// 2
		if(!isInTheSystem(developer.getId())) { 														// 3
			throw new OperationNotAllowedException("Developer is not in the system");
		}
		projectLeaderCheck(project);																	// 4
		if (project.isProjectDev(developer)) {														// 5
			throw new OperationNotAllowedException("Developer is already part of project");
		} 
		else {																						// 6
			project.addProjectDev(developer);
			developer.getMyProjects().add(project);
		}
		setChanged();
		notifyObservers(NotificationType.ADD_DEVELOPER);
		
		assert project.isProjectDev(developer): "Poscondition violated for addProjectDev";
	}

	/**
	 * Removes developer from project and all project activities she is working on
	 * Removes project activities from developers calendar.
	 * @param project
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void removeProjectDev(Project project, Developer developer) throws OperationNotAllowedException {
		loginCheck();
		projectCheck(project);
		projectLeaderCheck(project);
		projectDevCheck(project, developer);

		project.removeProjectDev(developer);
		developer.getMyProjects().remove(project);

		for (Activity activity : project.getProjectActivities()) {
			if(activity.getActivityDevelopers().contains(developer)) {
				developer.getMyActivities().remove(activity);
				developer.removeActivityFromCalendar(activity);
			}
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
		loginCheck();
		projectCheck(project);
		projectLeaderCheck(project);
		projectDevCheck(project,developer);

		project.setProjectLeader(developer.getId());

		setChanged();
		notifyObservers(NotificationType.CHANGE_PROJECT_LEADER);
	}

	/**
	 * Contructs an activity through the SystemApp
	 * @param String
	 * @return Activity
	 * @author Zenia
	 */
	public Activity createActivity(String activityName) {
		return new Activity(activityName);
	}
	
	/**
	 * Adds an activty to project.
	 * Sets activity start and deadline to the project start and deadline.
	 * @param project
	 * @param activity
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void addActivity(Project project, Activity activity) throws OperationNotAllowedException {
		loginCheck();
		projectCheck(project);
		projectLeaderCheck(project);
		
		for (Activity a: project.getProjectActivities()) {												
			if (a.getActivityName().equalsIgnoreCase(activity.getActivityName())) { 	
				throw new OperationNotAllowedException("Illegal activity name");
			}
		}
		
		activity.setStart(project.getStart());
		activity.setDeadline(project.getDeadline());
		activity.updateDuration();
		
		project.addActivity(activity);	

		setChanged();
		notifyObservers(NotificationType.ADD_ACTIVITY);
	} 

	/**
	 * Removes an activity from project.
	 * Deletes activity from all activity developers calendar
	 * @param project
	 * @param activity
	 * @throws OperationNotAllowedException
	 * @author Rikke
	 */
	public void removeActivity(Project project, Activity activity) throws OperationNotAllowedException {
		// Design by contract
		assert project != null && activity != null: "Pre-condition violated for removeActivity";
		loginCheck();														// 1
		projectCheck(project);												// 2
		projectActivityCheck(project,activity);								// 3
		projectLeaderCheck(project);											// 4

		for (Developer dev : activity.getActivityDevelopers()) {				// 5
			dev.removeActivityFromCalendar(activity);
			dev.getMyActivities().remove(activity);	
		}
		project.removeActivity(activity);									// 5

		setChanged();
		notifyObservers(NotificationType.REMOVE_ACTIVITY);
		
		assert !project.isProjectActivity(activity): "Post-condition violated for removeActivity";
	}

	/**
	 * Adds an available developer to activity.
	 * Adds the activity to developers calendar.
	 * @param project
	 * @param activity
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Zenia 
	 */
	public void addActivityDev(Project project, Activity activity, Developer developer) throws OperationNotAllowedException{
		loginCheck();
		if (!isAvailableForActivity(developer, activity)) {
			throw new OperationNotAllowedException("Developer is not available");
		} 
		else if (activity.isActivityDev(developer.getId())) {
			throw new OperationNotAllowedException("Developer is already working on activity");
		}
		else if (isProjectLeader(project) || activity.isActivityDev(activeUser)) {
			activity.addActivityDev(developer);
			developer.addActivityToCalendar(activity);
			developer.getMyActivities().add(activity);
		} 
		projectLeaderCheck(project);
		projectActivityCheck(project,activity);
		
		setChanged();
		notifyObservers(NotificationType.ADD_DEVELOPER);
	}

	/**
	 * Removes a developer from activity and remove activity from developers calendar
	 * @param project
	 * @param activity
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void removeActivityDev(Project project, Activity activity, Developer developer) throws OperationNotAllowedException {
		//Design by contract
		assert project!=null && activity!=null && developer!=null: "Pre-condition violated for removeActvityDev";
		loginCheck();															// 1
		projectActivityCheck(project,activity); 									// 2					                              
		projectLeaderCheck(project);   											// 3
                                          
		if (!activity.isActivityDev(developer.getId())) {							// 4						
			throw new OperationNotAllowedException("Developer not found");
		} 
		else {                                                             		// 5     			 
			activity.removeActivityDev(developer);
			developer.removeActivityFromCalendar(activity);
			developer.getMyActivities().remove(activity);
		}
		setChanged();
		notifyObservers(NotificationType.REMOVE_DEVELOPER);
		
		assert !activity.isActivityDev(developer.getId()): "Post-condition violated for removeActvityDev";
	}

	/**
	 * Sets the project start
	 * @param project
	 * @param start
	 * @throws OperationNotAllowedException
	 * @author Mai-Thi
	 */
	public void setProjectStart(Project project, Calendar start) throws OperationNotAllowedException {
		loginCheck();
		projectCheck(project);
		projectLeaderCheck(project);
		timeBudgetCheck(start, project.getDeadline());

		if (!project.getProjectActivities().isEmpty()) {
			throw new OperationNotAllowedException("Start can't be set");
		}
		project.setStart(start);

		setChanged();
		notifyObservers(NotificationType.TIME_BUDGET);
	}

	/**
	 * Sets the project deadline.
	 * If activities has been added to project, then project can only be postponed.
	 * @param project
	 * @param deadline
	 * @throws OperationNotAllowedException
	 * @author Mai-Thi
	 */
	public void setProjectDeadline(Project project, Calendar deadline)throws OperationNotAllowedException {
		loginCheck();
		projectCheck(project);
		projectLeaderCheck(project);
		timeBudgetCheck(project.getStart(), deadline);

		if (deadline.before(project.getDeadline()) && !project.getProjectActivities().isEmpty())  {
				throw new OperationNotAllowedException("Deadline can only be postponed");
		}
		project.setDeadline(deadline);

		setChanged();
		notifyObservers(NotificationType.TIME_BUDGET);
	}

	/**
	 * Sets the activity start and update activity duration.
	 * Update activity in activity developers calendar.
	 * @param project
	 * @param activity
	 * @param start
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void setActivityStart(Project project, Activity activity, Calendar start) throws OperationNotAllowedException {
		loginCheck();
		projectActivityCheck(project,activity);
		projectLeaderCheck(project);
		timeBudgetCheck(start, activity.getDeadline());
		if (start.before(project.getStart()) || start.after(project.getDeadline()) ) {
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
	 * Sets the activity deadline and update activity duration.
	 * Update activity in activity developers calendar.
	 * @param project
	 * @param activity
	 * @param deadline
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void setActivityDeadline(Project project, Activity activity, Calendar deadline) throws OperationNotAllowedException {
		loginCheck();
		projectActivityCheck(project,activity);
		projectLeaderCheck(project);
		timeBudgetCheck(activity.getStart(), deadline);
		if ( deadline.before(project.getStart()) || deadline.after(project.getDeadline()) ) {
			throw new OperationNotAllowedException("Activity cant exceed project");
		}
		else {
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
	 * Checks all developers in systemApp and gets their activity level in the given week.
	 * Make a sorted list in increasing order of all available developers
	 * @param week
	 * @return available developers
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public ArrayList<Pair<String,Integer>> getAvailableDevelopers(Week week) throws OperationNotAllowedException {
		loginCheck();
		ArrayList<Pair<String, Integer>> availableDevelopers = new ArrayList<>();

		if (week.getWeekOfYear() > 53) {
			throw new OperationNotAllowedException("Illegal week");
		}
		for (Developer dev : developers) {
			if (dev.isAvailable(week)) { 
				availableDevelopers.add(new Pair<String, Integer>(dev.getId(), dev.getActivityLevel(week)));

				// Sorts a list of pair<String,Integer> by its value-integer.
				Collections.sort(availableDevelopers, new Comparator<Pair<String, Integer>>() {
					@Override
					public int compare(final Pair<String, Integer> p1, final Pair<String, Integer> p2) {
						return p1.getValue().compareTo(p2.getValue());
					}
				});
			}
		}
		return availableDevelopers;
	}
	
	/**
	 * Throws an exception if there is no active user
	 * @throws OperationNotAllowedException
	 * @author Mai-Thi
	 */
	public void loginCheck() throws OperationNotAllowedException {
		if(activeUser.equalsIgnoreCase("")) {
			throw new OperationNotAllowedException("User is not logged in");
		}
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

	/**
	 * Throws an exception if the project is not in the system
	 * @param project
	 * @throws OperationNotAllowedException
	 * @author Helena
	 */
	public void projectCheck(Project project) throws OperationNotAllowedException {
		if(!projects.contains(project)) {
			throw new OperationNotAllowedException("Project is not in the system");
		}
	}

	/**
	 * Throws an exception if start comes after the deadline  
	 * @param start
	 * @param deadline
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void timeBudgetCheck(Calendar start, Calendar deadline) throws OperationNotAllowedException {
		if (deadline.before(start)) {
			throw new OperationNotAllowedException("Illegal time budget");	
		}
	}

	/**
	 * Throws an exception if developer is not working on the project
	 * @param project
	 * @param developer
	 * @throws OperationNotAllowedException
	 * @author Mai-Thi
	 */
	public void projectDevCheck(Project project, Developer developer) throws OperationNotAllowedException {
		if (!project.isProjectDev(developer)) {
			throw new OperationNotAllowedException("Developer not found");
		} 
	}

	/**
	 * Throws an exception if activity is not part of the project
	 * @param project
	 * @param activity
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */
	public void projectActivityCheck(Project project, Activity activity) throws OperationNotAllowedException {
		if (!project.isProjectActivity(activity)) {
			throw new OperationNotAllowedException("Activity is not part of the project");
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

}

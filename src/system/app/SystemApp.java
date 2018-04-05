package system.app;


import java.util.*;

public class SystemApp {
	
	private List<Developer> developers = new ArrayList<Developer>();
	private boolean loggedIn = false;
	private String activeUser = "";

	public void addDeveloper(Developer developer) {
		developers.add(developer);		
	}
	
	/**
	 * checks if a theres a developer with given id is on the list of developers in the company
	 * 
	 * @param id
	 * @return true if developer is in the system 
	 * @throws OperationNotAllowedException
	 * @author Zenia
	 */  
	public boolean isInTheSystem(String id) throws OperationNotAllowedException {
		 for (Developer developer : developers) {
			 if (id == developer.getId()) 
				 return true; 
		 }
		 throw new OperationNotAllowedException("Wrong initials");
	} 

	public void userLogin(String id) throws OperationNotAllowedException  {
		if (isInTheSystem(id)) {		
		activeUser = id;
		loggedIn = true;
		}
	}

	public void userLogout() {
		activeUser = "";
		loggedIn = false;	
	}

	public String getActiveUser() {
		return activeUser;
	}

	public List<Developer> getDevelopers() {
		return developers;
	}

}

package dtu.library.acceptance_tests;

import system.app.Developer;

public class DeveloperHelper {
	Developer developer;

	public DeveloperHelper () {
	}

	public Developer getDeveloper() {
		if(developer == null) {
			developer = new Developer("XXXX");
		}
		return developer;
	}

}


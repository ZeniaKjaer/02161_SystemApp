package dtu.library.acceptance_tests;

import system.app.Project;

public class ProjectHelper {
		Project project;

		public ProjectHelper () {
		}

		public Project getProject() {
			if(project == null) {
				project = new Project("ABCD", "999918" ,"Second Project");
			}
			return project;
		}

	
}

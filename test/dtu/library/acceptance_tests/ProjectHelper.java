package dtu.library.acceptance_tests;

import system.app.Project;

public class ProjectHelper {
		static Project project;

		public ProjectHelper () {
		}

		public Project getProject() {
			if(project == null) {
				project = new Project("HERE", "999918" ,"Second Project");
			}
			return project;
		}

	
}

package dtu.systemapp.acceptance_tests;

import system.app.Project;

public class ProjectHelper {
		static Project project;

		public ProjectHelper () {
		}

		public Project getProject() {
			if(project == null) {
				project = new Project("ZEKT", "999918" ,"Second Project");
			}
			return project;
		}

	
}

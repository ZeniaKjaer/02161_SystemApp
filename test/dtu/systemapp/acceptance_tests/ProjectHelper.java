package dtu.systemapp.acceptance_tests;

import system.app.Project;

public class ProjectHelper {
		static Project project;

		public ProjectHelper () {
		}

		public Project getProject() {
			if(project == null) {
				project = new Project("ZEKT", "Second Project");
			}
			return project;
		}

	
}

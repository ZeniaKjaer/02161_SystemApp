$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases/student/add_activity.feature");
formatter.feature({
  "name": "Add activity to project",
  "description": "    Description: The project leader adds activities to the project\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "project leader adds activity to project successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is an activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds activity to project",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsActivityToProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity is part of project",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivitySteps.activityIsPartOfProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity timebudget is set to project timebudget",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.activityTimebudgetIsSetToProjectTimebudget()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "add activity when not project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is not the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is an activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds activity to project",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsActivityToProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/add_coworker_activity.feature");
formatter.feature({
  "name": "Add co-worker to activity",
  "description": "    Description: A project developer adds a co-worker to an activity\n    Actors: Project developer",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Developer on activity adds co-worker to activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is working on activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.userIsWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is available",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.developerIsAvailable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is working on activity",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivitySteps.developerIsWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer has activity marked in her calendar",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.developerHasActivityMarkedInHerCalendar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Developer not on activity adds co-worker to activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is not working on activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.userIsNotWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Developer on activity adds a co-worker who is already working on activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is working on activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.userIsWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is already working on activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.userIsAlreadyWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Developer is already working on activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Developer on activity adds not available co-worker to activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is working on activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.userIsWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is not available",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.developerIsNotAvailable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Developer is not available\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/add_developer_activity.feature");
formatter.feature({
  "name": "Add project developer to activity",
  "description": "    Description:  The project leader adds project developer to a project activity\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add developer to activity successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is available",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.developerIsAvailable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is working on activity",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivitySteps.developerIsWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer has activity marked in her calendar",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.developerHasActivityMarkedInHerCalendar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add developer when not a project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is not the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add developer who is already working on activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is already working on activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.userIsAlreadyWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Developer is already working on activity\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add developer who is not available to activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is not available",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.developerIsNotAvailable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Developer is not available\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/add_developer_project.feature");
formatter.feature({
  "name": "Add developer to project",
  "description": "  Description: The project leader adds a developer to the project\n  Actors: Project leader",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add developer to project successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userAddsDeveloperToProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is part of the project",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.developerIsPartOfTheProject()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add developer to project when not a project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is not the project leader",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userAddsDeveloperToProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add developer to project twice",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProjectDeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds developer to project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userAddsDeveloperToProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"User is already part of project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/available_developer.feature");
formatter.feature({
  "name": "Get available developers",
  "description": "   Description: The project leader searches and gets a list of available developers\n\tActors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "SystemApp has developers",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "Given "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developers in SystemApp has different activitylevel that week",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.developersInSystemAppHasDifferentActivitylevelThatWeek()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader gets available developers succesfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user ask for all available developers",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userAskForAllAvailableDevelopers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets a list of all available developers",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.userGetsAListOfAllAvailableDevelopers()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/change_project_leader.feature");
formatter.feature({
  "name": "Change project leader",
  "description": "    Description: The project leader gives his status as leader to another developer\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Changes project leader successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProjectDeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user change project leader",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userChangeProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is the new project leader",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.developerIsTheNewProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is not the project leader anymore",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeaderAnymore()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Changes project leader when user is not the project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project developer",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProjectDeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is not the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user change project leader",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userChangeProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Changes project leader to someone who is not part of the project",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is not part of the project",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.developerIsNotPartOfTheProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user change project leader",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userChangeProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Developer not found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/create_project.feature");
formatter.feature({
  "name": "Create a project",
  "description": "    Description: User creates a project in the system\n    Actors: Developer",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Developer creates a project succesfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer creates project with projectname \"First Project\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.developerCreatesProject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project with projectname \"First Project\" is created",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.projectIsCreated(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the developer is now the project leader",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.theDeveloperIsNowTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Developer creates a project with illegal name",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project with name \"First Project\" already exist",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.projectWithNameAlreadyExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer creates project with projectname \"First Project\"",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.developerCreatesProject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Illegal project name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/remove_activty.feature");
formatter.feature({
  "name": "Remove activity from project",
  "description": "    Description: The project leader removes activities from the project\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Project leader removes activity successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is an activity developer",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAnActivityDeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user removes activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userRemovesActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity is no longer part of project",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivitySteps.activityIsNoLongerPartOfProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity is removed from developer calendar",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.activityIsRemovedFromDeveloperCalendar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader removes activity that is not part of the project",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity is not part of the project",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.activityIsNotPartOfTheProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user removes activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userRemovesActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Activity is not part of the project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Removes an activity when not the project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is not a project leader",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.userIsNotAProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user removes activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userRemovesActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/remove_developer_activity.feature");
formatter.feature({
  "name": "Remove developer from activity",
  "description": "    Description: The project leader removes developer from an activity\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Remove developer on activity successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is an activity developer",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAnActivityDeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project leader removes developer from activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.projectLeaderRemovesDeveloperFromActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is not working on activity",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivitySteps.developerIsNotWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity is removed from developer calendar",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.activityIsRemovedFromDeveloperCalendar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove developer from activity when not a project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is not the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is an activity developer",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAnActivityDeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project leader removes developer from activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.projectLeaderRemovesDeveloperFromActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove developer from activity when developer is not working on activity",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is not working on activity",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.developerIsNotWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project leader removes developer from activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.projectLeaderRemovesDeveloperFromActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Developer not found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/remove_developer_project.feature");
formatter.feature({
  "name": "Remove developer from project",
  "description": "    Description: The project leader removes a developer from the project\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Removes developer from project successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProjectDeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user removes developer from project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userRemovesDeveloperFromProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is no longer a part of the project",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.developerIsNoLongerAPartOfTheProject()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Removes developer from project when not the project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is not the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a project developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProjectDeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user removes developer from project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userRemovesDeveloperFromProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsADeveloper()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader removes developer who is not a part of the project",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is not part of the project",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.developerIsNotPartOfTheProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user removes developer from project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userRemovesDeveloperFromProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Developer not found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/timebudget_activity.feature");
formatter.feature({
  "name": "Set time budget for activity",
  "description": "    Description: The project leader sets time budget for an activity\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets time budget for activity successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets time budget for activity",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsTimeBudgetForActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "time budget is set for activity",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.timeBudgetIsSetForActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User sets time budget for activity when not project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is not the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets time budget for activity",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsTimeBudgetForActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets activity deadline before activity start",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets activity deadline before activity start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityDeadlineBeforeActivityStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Illegal time budget\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets activity start after activity deadline",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets activity start after activity deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityStartAfterActivityDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Illegal time budget\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets activity start before project start",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets activity start before project start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityStartBeforeProjectStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Activity cant exceed project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets activity start after project deadline",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets activity start after project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityStartAfterProjectDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Activity cant exceed project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets activity deadline before project start",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets activity deadline before project start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityDeadlineBeforeProjectStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Activity cant exceed project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project with an activity",
  "keyword": "Given "
});
formatter.match({
  "location": "ActivitySteps.thereIsAProjectWithAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets activity deadline after project deadline",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets activity deadline after project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityDeadlineAfterProjectDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Activity cant exceed project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/timebudget_project.feature");
formatter.feature({
  "name": "Set time budget for project",
  "description": "    Description: The project leader sets the time budget for the project\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets time budget for project succesfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets time budget for project",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsTimeBudgetForProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "time budget is set for project",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.timeBudgetIsSetForProject()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User sets time budget for project when not project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is not the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsNotTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets time budget for project",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsTimeBudgetForProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project leader authorization needed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets project deadline before the start",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets deadline before the start for project",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsDeadlineBeforeTheStartForProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Illegal time budget\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "there is a project",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.thereIsAProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a start date",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsAStartDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Project leader sets project start after the deadline",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the project leader",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.userIsTheProjectLeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets start after the deadline for project",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsStartAfterTheDeadlineForProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Illegal time budget\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/user_login.feature");
formatter.feature({
  "name": "User logs on",
  "description": "    Description: User logs into and out of the system\n    Actors: Developer",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "developer logs on with initials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "developer with initials \"ABCD\" is in the system",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.developerWithInitialsIsInTheSystem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is not logged in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.developerIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer enter initials \"ABCD\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutSteps.developerEnterInitials(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer with initials \"ABCD\" is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.developerWithInitialsIsLoggedIn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "developer logs on with wrong initials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "developer is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.developerIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer with initials \"EFGH\" is not in the system",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.developerWithInitialsIsNotInTheSystem(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer enter initials \"EFGH\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutSteps.developerEnterInitials(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Wrong initials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is logged out",
  "keyword": "And "
});
formatter.match({
  "location": "LoginLogoutSteps.developerIsLoggedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "developer logs out",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "developer is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.developerIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer logs out",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutSteps.developerLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.developerIsLoggedOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "developer logs on when someone else is aldready logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "developer is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.developerIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer enter initials \"ABCD\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutSteps.developerEnterInitials(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Another user is already logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
});
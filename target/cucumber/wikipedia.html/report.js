$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases/student/add_activity.feature");
formatter.feature({
  "name": "Add activity to project",
  "description": "    Description: The project leader adds activities to the project\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
  "name": "there is an activity with the name \"First activity\"",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.thereIsAnActivityWithTheName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds activity with the name \"First activity\" to project",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsActivityWithTheNameToProject(String)"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "project leader adds activity to project with illegal name",
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
  "name": "activity with name \"Second activity\" already exist",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.activityWithNameAlreadyExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds activity with the name \"Second activity\" to project",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsActivityWithTheNameToProject(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Illegal activity name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "add activity to a project that is not in the system",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "project is not in the system",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.projectIsNotInTheSystem()"
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
  "name": "user gets the error message \"Project is not in the system\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "add activity for project when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
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
  "name": "Add co-worker to own activity",
  "description": "    Description: A project developer adds a co-worker to an activity\n    Actors: Project developer",
  "keyword": "Feature"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
  "name": "user adds second developer to activity",
  "keyword": "When "
});
formatter.match({
  "location": "ActivitySteps.userAddsSecondDeveloperToActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "second developer is working on activity",
  "keyword": "Then "
});
formatter.match({
  "location": "ActivitySteps.secondDeveloperIsWorkingOnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "second developer has activity marked in her calendar",
  "keyword": "And "
});
formatter.match({
  "location": "ActivitySteps.secondDeveloperHasActivityMarkedInHerCalendar()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Developer adds developer to an activity when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
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
  "name": "Add developer to activity",
  "description": "    Description:  The project leader adds project developer to a project activity\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Add developer to activity that is not part of the project",
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
  "name": "user gets the error message \"Activity is not part of the project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Developer adds developer to an activity when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Add developer to project that is not in the system",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "project is not in the system",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.projectIsNotInTheSystem()"
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
  "name": "user gets the error message \"Project is not in the system\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
  "name": "user gets the error message \"Developer is already part of project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Add developer that is not in the system to project",
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
  "name": "developer is not in the system",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.developerIsNotInTheSystem()"
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
  "name": "user gets the error message \"Developer is not in the system\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Developer adds developer to a project when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
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
  "description": "   \tDescription: The project leader gets a list of available developers in a given week\n\tActors: Developer",
  "keyword": "Feature"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "User gets available developers succesfully",
  "description": "",
  "keyword": "Scenario"
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
  "name": "user gets a sorted list of all available developers",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.userGetsASortedListOfAllAvailableDevelopers()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "User gets available developers in an illegal week",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is an illegal week",
  "keyword": "Given "
});
formatter.match({
  "location": "TimeSteps.thereIsAnIllegalWeek()"
});
formatter.result({
  "status": "passed"
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
  "name": "user gets the error message \"Illegal week\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "User gets available developers succesfully",
  "description": "",
  "keyword": "Scenario"
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
formatter.step({
  "name": "user ask for all available developers in week 2 year 3010",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userAskForAllAvailableDevelopersInWeekYear(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets a sorted list of all available developers",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.userGetsASortedListOfAllAvailableDevelopers()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "User gets available developers when not logged in",
  "description": "",
  "keyword": "Scenario"
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
  "name": "developers in SystemApp has different activitylevel that week",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.developersInSystemAppHasDifferentActivitylevelThatWeek()"
});
formatter.result({
  "status": "passed"
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
  "name": "user gets the error message \"User is not logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
  "name": "there is a second project developer",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.thereIsASecondProjectDeveloperr()"
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
  "name": "second developer is the new project leader",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.secondDeveloperIsTheNewProjectLeader()"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Changes project leader for a project not in the system",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "project is not in the system",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.projectIsNotInTheSystem()"
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
  "name": "user gets the error message \"Project is not in the system\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Developer changes project leader when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
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
  "name": "Create project",
  "description": "    Description: User creates a project in the system\n    Actors: Developer ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Developer creates a project succesfully",
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
  "name": "project with name \"Second Project\" already exist",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.projectWithNameAlreadyExist(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "developer creates project with projectname \"Second Project\"",
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
formatter.scenario({
  "name": "Developer creates a project when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Removes an activity from a project that is not in the system",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "project is not in the system",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.projectIsNotInTheSystem()"
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
  "name": "user gets the error message \"Project is not in the system\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Removes activity for project when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Remove developer from activity that is not part of the project",
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
  "name": "user gets the error message \"Activity is not part of the project\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Remove developer from activity when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
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
formatter.scenario({
  "name": "Removes developer from project that is not in the system",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "project is not in the system",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.projectIsNotInTheSystem()"
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
  "name": "user gets the error message \"Project is not in the system\"",
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Developer removes developer from a project when not logged in",
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
  "name": "user gets the error message \"User is not logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/remove_project.feature");
formatter.feature({
  "name": "Remove project",
  "description": "\tDescription:\n\tActors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Project leader removes project successfully",
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
  "name": "user removes project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userRemovesProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project is removed",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.projectIsRemoved()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Project leader removes project that is not in the system",
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
  "name": "project is not in the system",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.projectIsNotInTheSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user removes project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userRemovesProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project is not in the system\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Removes an activity when not the project leader",
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
  "name": "user removes project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userRemovesProject()"
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
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Project leader removes project successfully",
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
  "name": "user removes project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userRemovesProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project is removed",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.projectIsRemoved()"
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
formatter.background({
  "name": "A developer has to be logged in to interact with the SystemApp",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Developer removes a project when not logged in",
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
  "name": "user removes project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userRemovesProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"User is not logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/set_deadline_activity.feature");
formatter.feature({
  "name": "Set activity deadline",
  "description": "    Description: The project leader sets activity deadline\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "Project leader sets activity deadline successfully",
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
  "name": "user sets activity deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity deadline is set",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.activityDeadlineIsSet()"
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
  "name": "Project leader sets deadline for activity that is not in the project",
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
  "name": "user sets activity deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityDeadline()"
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "User sets activity deadline when not project leader",
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
  "name": "user sets activity deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityDeadline()"
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "User sets activity deadline when not logged in",
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
  "name": "user sets activity deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"User is not logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/set_deadline_project.feature");
formatter.feature({
  "name": "Set project deadline",
  "description": "    Description: The project leader sets project deadline. \n    The start can only be postponed, or set back if the projact has no activities \n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
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
  "name": "Project leader set project deadline succesfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project with no activities",
  "keyword": "Given "
});
formatter.match({
  "location": "TimeSteps.thereIsAProjectWithNoActivities()"
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
  "name": "user sets new project deadline before project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsNewProjectDeadlineBeforeProjectDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project deadline is set back",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.projectDeadlineIsSetBack()"
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
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
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
  "name": "Project leader postpones project deadline succesfully",
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
  "name": "user postpones project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userPostponesProjectDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project deadline is postponed",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.projectDeadlineIsPostponed()"
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
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
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
  "name": "User sets project deadline when not project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "project is not in the system",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.projectIsNotInTheSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project is not in the system\"",
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
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
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
  "name": "User sets project deadline when not project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project with no activities",
  "keyword": "Given "
});
formatter.match({
  "location": "TimeSteps.thereIsAProjectWithNoActivities()"
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
  "name": "user sets project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectDeadline()"
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
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
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
  "name": "Project leader sets deadline for a project with an activity",
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
  "name": "user sets new project deadline before project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsNewProjectDeadlineBeforeProjectDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Deadline can only be postponed\"",
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
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
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
  "name": "there is a project with no activities",
  "keyword": "Given "
});
formatter.match({
  "location": "TimeSteps.thereIsAProjectWithNoActivities()"
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
  "name": "user sets project deadline before project start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectDeadlineBeforeProjectStart()"
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
  "name": "there is a date between start and deadline",
  "keyword": "And "
});
formatter.match({
  "location": "TimeSteps.thereIsADateBetweenStartAndDeadline()"
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
  "name": "Developer sets project deadline when not logged in",
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
  "name": "user sets project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectDeadline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"User is not logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/set_start_activity.feature");
formatter.feature({
  "name": "Set activity start",
  "description": "    Description: The project leader sets activity start\n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "Project leader sets activity start successfully",
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
  "name": "user sets activity start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity start is set",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.activityStartIsSet()"
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
  "name": "Project leader sets start for an activity that is not in the project",
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
  "name": "user sets activity start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityStart()"
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
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "User sets activity start when not project leader",
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
  "name": "user sets activity start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityStart()"
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
  "name": "User sets activity start when not logged in",
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
  "name": "user sets activity start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsActivityStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"User is not logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("use_cases/student/set_start_project.feature");
formatter.feature({
  "name": "Set start for project",
  "description": "    Description: The project leader sets project start. \n    The start can only be changed if the projact has no activities \n    Actors: Project leader",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "Project leader start for project succesfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project with no activities",
  "keyword": "Given "
});
formatter.match({
  "location": "TimeSteps.thereIsAProjectWithNoActivities()"
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
  "name": "user sets project start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "project start is set",
  "keyword": "Then "
});
formatter.match({
  "location": "TimeSteps.projectStartIsSet()"
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
  "name": "User sets start for project when not project leader",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "project is not in the system",
  "keyword": "Given "
});
formatter.match({
  "location": "ProjectSteps.projectIsNotInTheSystem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sets project start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Project is not in the system\"",
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
  "name": "there is a project with no activities",
  "keyword": "Given "
});
formatter.match({
  "location": "TimeSteps.thereIsAProjectWithNoActivities()"
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
  "name": "user sets project start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectStart()"
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
  "name": "Project leader sets start for a project with an activity",
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
  "name": "user sets project start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"Start can\u0027t be set\"",
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
  "name": "Project leader sets project start after project deadline",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a project with no activities",
  "keyword": "Given "
});
formatter.match({
  "location": "TimeSteps.thereIsAProjectWithNoActivities()"
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
  "name": "user sets project start after project deadline",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectStartAfterProjectDeadline()"
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
  "name": "Developer sets start for project when not logged in",
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
  "name": "user sets project start",
  "keyword": "When "
});
formatter.match({
  "location": "TimeSteps.userSetsProjectStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets the error message \"User is not logged in\"",
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
  "name": "Login",
  "description": "    Description: User logs into and out of the system\n    Actors: Developer",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Developer logs on with initials succesfully",
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
  "name": "Developer logs on with wrong initials",
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
  "name": "Developer logs on when someone else is aldready logged in",
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
formatter.uri("use_cases/student/user_logout.feature");
formatter.feature({
  "name": "Logout",
  "description": "    Description: User logs out of the system\n    Actors: Developer",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Developer logs out succesfully",
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
});
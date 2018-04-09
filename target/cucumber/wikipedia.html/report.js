$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases/student/add_activity.feature");
formatter.feature({
  "name": "Project leader adds activity to project",
  "description": "    Description:\n    Actors: Project leader",
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
formatter.uri("use_cases/student/add_developer_project.feature");
formatter.feature({
  "name": "Project leader adds developer to project",
  "description": "  Description:\n  Actors: Project leader, developer",
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

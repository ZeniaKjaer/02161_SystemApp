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
  "location": "ProjectSteps.thereIsAnActivity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds activity to project",
  "keyword": "When "
});
formatter.match({
  "location": "ProjectSteps.userAddsActivityToProject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "activity is part of project",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.activityIsPartOfProject()"
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
formatter.match({
  "location": "ProjectSteps.developerIsPartOfTheProject()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: \nExpected: a collection containing \u003csystem.app.Developer@23348b5d\u003e\n     but: \r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.junit.Assert.assertThat(Assert.java:956)\r\n\tat org.junit.Assert.assertThat(Assert.java:923)\r\n\tat dtu.library.acceptance_tests.ProjectSteps.developerIsPartOfTheProject(ProjectSteps.java:86)\r\n\tat ✽.developer is part of the project(use_cases/student/add_developer_project.feature:11)\r\n",
  "status": "failed"
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
  "name": "user gets the error message \"project leader authorization needed\"",
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
  "name": "developer is already part of the project",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.developerIsAlreadyPartOfTheProject()"
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
  "name": "user gets the error message \"user is already part of project\"",
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
  "name": "Start a project",
  "description": "    Description:\n    Actors: Project leader",
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
  "name": "project with name \"First Project\" already exist",
  "keyword": "And "
});
formatter.match({
  "location": "ProjectSteps.projectWithNameAlreadyExist(String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat system.app.SystemApp.addProject(SystemApp.java:89)\r\n\tat dtu.library.acceptance_tests.ProjectSteps.projectWithNameAlreadyExist(ProjectSteps.java:97)\r\n\tat ✽.project with name \"First Project\" already exist(use_cases/student/create_project.feature:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user gets the error message \"Illegal project name\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutSteps.userGetsTheErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("use_cases/student/user_login.feature");
formatter.feature({
  "name": "User logs on",
  "description": "    Description:\n    Actors: developer",
  "keyword": "Feature"
});
formatter.background({
  "name": "SystemApp has developers",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "SystemApp has developers",
  "rows": [
    {
      "cells": [
        "ABCD"
      ]
    },
    {
      "cells": [
        "MTVD"
      ]
    },
    {
      "cells": [
        "HERE"
      ]
    },
    {
      "cells": [
        "ZEKT"
      ]
    },
    {
      "cells": [
        "RITG"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.systemappHasDevelopers(String\u003e)"
});
formatter.result({
  "status": "passed"
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
formatter.background({
  "name": "SystemApp has developers",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "SystemApp has developers",
  "rows": [
    {
      "cells": [
        "ABCD"
      ]
    },
    {
      "cells": [
        "MTVD"
      ]
    },
    {
      "cells": [
        "HERE"
      ]
    },
    {
      "cells": [
        "ZEKT"
      ]
    },
    {
      "cells": [
        "RITG"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.systemappHasDevelopers(String\u003e)"
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
formatter.background({
  "name": "SystemApp has developers",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "SystemApp has developers",
  "rows": [
    {
      "cells": [
        "ABCD"
      ]
    },
    {
      "cells": [
        "MTVD"
      ]
    },
    {
      "cells": [
        "HERE"
      ]
    },
    {
      "cells": [
        "ZEKT"
      ]
    },
    {
      "cells": [
        "RITG"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.systemappHasDevelopers(String\u003e)"
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
formatter.background({
  "name": "SystemApp has developers",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "SystemApp has developers",
  "rows": [
    {
      "cells": [
        "ABCD"
      ]
    },
    {
      "cells": [
        "MTVD"
      ]
    },
    {
      "cells": [
        "HERE"
      ]
    },
    {
      "cells": [
        "ZEKT"
      ]
    },
    {
      "cells": [
        "RITG"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "LoginLogoutSteps.systemappHasDevelopers(String\u003e)"
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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Another user is already logged in]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat dtu.library.acceptance_tests.LoginLogoutSteps.userGetsTheErrorMessage(LoginLogoutSteps.java:78)\r\n\tat ✽.user gets the error message \"Another user is already logged in\"(use_cases/student/user_login.feature:35)\r\n",
  "status": "failed"
});
});
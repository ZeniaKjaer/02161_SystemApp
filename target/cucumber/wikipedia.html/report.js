$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("use_cases/student/user_login.feature");
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
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "developer logs out",
  "keyword": "When "
});
formatter.match({
  "location": "LoginLogoutSteps.developerLogsOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "developer is logged out",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});
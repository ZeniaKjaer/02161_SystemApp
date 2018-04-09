#@author Helena
#
 Feature: Start a project
    Description:
    Actors: Project leader

Scenario: Developer creates a project succesfully
  Given there is a developer
  When developer creates project with projectname "First Project"
  Then project with projectname "First Project" is created
  And the developer is now the project leader

Scenario: Developer creates a project with illegal name
  Given there is a developer
  When developer creates project with projectname "First Project"
  And project with name "First Project" already exist
  Then user gets the error message "Illegal project name"
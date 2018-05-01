# Use case og test af Helena
 Feature: Create project
    Description: User creates a project in the system
    Actors: Developer

Scenario: Developer creates a project succesfully
  Given there is a developer
  When developer creates project with projectname "First Project"
  Then project with projectname "First Project" is created
  And the developer is now the project leader

Scenario: Developer creates a project with illegal name
  Given there is a developer
  And project with name "First Project" already exist
  When developer creates project with projectname "First Project"
  Then user gets the error message "Illegal project name"
# Use case og test af Helena
 Feature: Create project
    Description: User creates a project in the system
    Actors: Developer 

Scenario: Developer creates a project succesfully
  Given developer is logged in
  When developer creates project with projectname "First Project"
  Then project with projectname "First Project" is created
  And the developer is now the project leader

Scenario: Developer creates a project with illegal name
  Given developer is logged in
  And project with name "Second Project" already exist
  When developer creates project with projectname "Second Project"
  Then user gets the error message "Illegal project name"
  
 Scenario: Developer creates a project when not logged in
  Given developer is not logged in
  When developer creates project with projectname "First Project"
  Then user gets the error message "User is not logged in"
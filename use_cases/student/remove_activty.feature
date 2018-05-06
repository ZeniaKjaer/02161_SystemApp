# Use case og test af Rikke
Feature: Remove activity from project
    Description: The project leader removes activities from the project
    Actors: Project leader

Background: A developer has to be logged in to interact with the SystemApp
	Given developer is logged in

Scenario: Project leader removes activity successfully
  Given user is the project leader
  And there is a project with an activity
  And there is an activity developer
  When user removes activity
  Then activity is no longer part of project
  And activity is removed from developer calendar
  
 Scenario: Removes an activity from a project that is not in the system
  Given project is not in the system
  When user removes activity
  Then user gets the error message "Project is not in the system"

Scenario: Project leader removes activity that is not part of the project
  Given user is the project leader
  And there is a project
  And activity is not part of the project
  When user removes activity
  Then user gets the error message "Activity is not part of the project"

Scenario: Removes an activity when not the project leader
  Given there is a project with an activity
  And user is not a project leader
  When user removes activity
  Then user gets the error message "Project leader authorization needed"
  
Scenario: Removes activity for project when not logged in
	Given developer is not logged in
	When user removes activity
	Then user gets the error message "User is not logged in"

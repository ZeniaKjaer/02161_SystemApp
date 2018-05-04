# Use case og test af Zenia
Feature: Remove developer from activity
    Description: The project leader removes developer from an activity
    Actors: Project leader

Background: A developer has to be logged in to interact with the SystemApp
	Given developer is logged in


Scenario: Remove developer on activity successfully
  	Given user is the project leader
  	And there is a project with an activity
  	And there is an activity developer
  	When project leader removes developer from activity
  	Then developer is not working on activity
  	And activity is removed from developer calendar
  	
Scenario: Remove developer from activity that is not part of the project
  	Given user is the project leader
  	And activity is not part of the project
  	And there is an activity developer
  	When project leader removes developer from activity
  	Then user gets the error message "Activity is not part of the project"

Scenario: Remove developer from activity when not a project leader
  	Given user is not the project leader
  	And there is a project with an activity
  	And there is an activity developer
  	When project leader removes developer from activity
  	Then user gets the error message "Project leader authorization needed"

Scenario: Remove developer from activity when developer is not working on activity
  	Given user is the project leader
  	And there is a project with an activity
  	And there is a developer
  	And developer is not working on activity
  	When project leader removes developer from activity
  	Then user gets the error message "Developer not found"

# Use case og test af Rikke
Feature: Add activity to project
    Description: The project leader adds activities to the project
    Actors: Project leader

Background: A developer has to be logged in to interact with the SystemApp
	Given developer is logged in

Scenario: project leader adds activity to project successfully
  	Given user is the project leader
	And there is a project
  	And there is an activity with the name "First activity"
  	When user adds activity to project
  	Then activity is part of project
	And activity timebudget is set to project timebudget
	
Scenario: project leader adds activity to project with illegal name
	Given user is the project leader
	And there is a project
  	And there is an activity with the name "First activity"
  	When user adds activity to project
	Then user gets the error message "Illegal activity name"
	
Scenario: add activity to a project that is not in the system
  	Given project is not in the system
  	When user adds activity to project
  	Then user gets the error message "Project is not in the system"

Scenario: add activity when not project leader
  	Given user is not the project leader
  	And there is a project
  	When user adds activity to project
  	Then user gets the error message "Project leader authorization needed"
  	
Scenario: add activity for project when not logged in
	Given developer is not logged in
	When user adds activity to project
	Then user gets the error message "User is not logged in"

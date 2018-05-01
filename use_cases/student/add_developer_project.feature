# use case og test af Rikke
Feature: Add developer to project
  Description: The project leader adds a developer to the project
  Actors: Project leader

Scenario: Add developer to project successfully
	Given there is a project
  	And user is the project leader
  	And there is a developer
  	When user adds developer to project
  	Then developer is part of the project

Scenario: Add developer to project that is not in the system
	Given project is not in the system
  	And there is a developer
  	When user adds developer to project
  	Then user gets the error message "Project is not in the system"

Scenario: Add developer to project when not a project leader
	Given there is a project
  	And user is not the project leader
  	And there is a developer
  	When user adds developer to project
  	Then user gets the error message "Project leader authorization needed"

Scenario: Add developer to project twice
	Given there is a project
  	And user is the project leader
  	And there is a project developer
  	When user adds developer to project
  	Then user gets the error message "Developer is already part of project"
  	
Scenario: Add developer that is not in the system to project
	Given there is a project
  	And developer is not in the system
  	When user adds developer to project
  	Then user gets the error message "Developer is not in the system"
  	
  	
  	
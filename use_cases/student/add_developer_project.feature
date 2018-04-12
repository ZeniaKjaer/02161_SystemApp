# @author Mai-Thi
Feature: Project leader adds developer to project
  Description:
  Actors: Project leader, developer

Scenario: Add developer to project successfully
	Given there is a project
  	And user is the project leader
  	And there is a developer
  	When user adds developer to project
  	Then developer is part of the project

Scenario: Add developer to project when not a project leader
	Given there is a project
  	And user is not the project leader
  	And there is a developer
  	When user adds developer to project
  	Then user gets the error message "Project leader authorization needed"

Scenario: Add developer to project twice
	Given there is a project
  	And user is the project leader
  	And there is a developer
  	And developer is already part of the project
  	When user adds developer to project
  	Then user gets the error message "User is already part of project"
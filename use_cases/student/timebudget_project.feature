# @author Mai-Thi
Feature: Set time budget for project
    Description: The project leader sets the time budget for the project
    Actors: Project leader

Scenario: Project leader sets time budget for project succesfully
  	Given user is the project leader
  	And there is a project
  	When user sets time budget for project
  	Then time budget is set for project

Scenario: User sets time budget for project when not project leader
  	Given user is not the project leader
  	And there is a project
  	When user sets time budget for project
  	Then user gets the error message "Project leader authorization needed"

Scenario: Project leader sets deadline before the start
  	Given user is the project leader
  	And there is a project
  	When user sets deadline before the start for project
  	Then user gets the error message "Illegal time budget"
  	
Scenario: Project leader sets start after the deadline
  	Given user is the project leader
  	And there is a project
  	When user sets start after the deadline for project
  	Then user gets the error message "Illegal time budget"

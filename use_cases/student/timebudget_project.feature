# @author Mai-Thi
Feature: Set time budget for project
    Description: The project leader sets the time budget for the project
    Actors: Project leader
    
    Background:
    Given there is a start date
    And there is a deadline

Scenario: Project leader sets time budget for project succesfully
    Given there is a project with no activities
  	And user is the project leader
  	When user sets time budget for project
  	Then time budget is set for project

Scenario: User sets time budget for project when not project leader
  	Given project is not in the system
  	When user sets time budget for project
  	Then user gets the error message "Project is not in the system"

Scenario: User sets time budget for project when not project leader
    Given there is a project with no activities
  	And user is not the project leader
  	When user sets time budget for project
  	Then user gets the error message "Project leader authorization needed"

Scenario: Project leader sets start for a project with an activity
    Given there is a project with an activity
  	And user is the project leader
  	When user sets project start
  	Then user gets the error message "Start can't be set"
  	
#Scenario: Project leader sets deadline for a project with an activity
#    Given there is a project with an activity
#  	And user is the project leader
#  	When user sets project deadline
#  	Then user gets the error message "Deadline can't be set"

Scenario: Project leader sets project deadline before the start
    Given there is a project with no activities
  	And user is the project leader
  	When user sets deadline before the start for project
  	Then user gets the error message "Illegal time budget"
  	
Scenario: Project leader sets project start after the deadline
    Given there is a project with no activities
  	And user is the project leader
  	When user sets start after the deadline for project
  	Then user gets the error message "Illegal time budget"

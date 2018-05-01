# @author Zenia
Feature: Set activity start
    Description: The project leader sets activity start
    Actors: Project leader
    Background:
    Given there is a project with an activity 
    And there is a start date
    And there is a deadline
    And there is a date between start and deadline
    
Scenario: Project leader sets activity start successfully
 	Given user is the project leader
 	And there is an activity developer
  	When user sets activity start
  	Then time budget is set for activity

Scenario: Project leader sets start for an activity that is not in the project
 	Given user is the project leader
 	And activity is not part of the project
  	When user sets activity start
  	Then user gets the error message "Activity is not part of the project"

Scenario: User sets activity start when not project leader
	Given user is not the project leader
	When user sets activity start
	Then user gets the error message "Project leader authorization needed"

Scenario: Project leader sets activity start after activity deadline
  	Given user is the project leader
  	When user sets activity start after activity deadline
  	Then user gets the error message "Illegal time budget"

Scenario: Project leader sets activity start before project start
  	Given user is the project leader
  	When user sets activity start before project start
  	Then user gets the error message "Activity cant exceed project"
  	
Scenario: Project leader sets activity start after project deadline
  	Given user is the project leader
  	When user sets activity start after project deadline
  	Then user gets the error message "Activity cant exceed project"

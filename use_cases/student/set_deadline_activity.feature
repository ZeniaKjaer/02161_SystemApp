# Use case og test af Zenia
Feature: Set activity deadline
    Description: The project leader sets activity deadline
    Actors: Project leader
    Background:
    Given there is a project with an activity 
    And there is a start date
    And there is a deadline
    And there is a date between start and deadline
    
Scenario: Project leader sets activity deadline successfully
 	Given user is the project leader
 	And there is an activity developer
  	When user sets activity deadline
  	Then activity deadline is set

Scenario: Project leader sets deadline for activity that is not in the project
 	Given user is the project leader
 	And activity is not part of the project
  	When user sets activity deadline
  	Then user gets the error message "Activity is not part of the project"

Scenario: User sets activity deadline when not project leader
	Given user is not the project leader
	When user sets activity deadline
	Then user gets the error message "Project leader authorization needed"

Scenario: Project leader sets activity deadline before activity start
  	Given user is the project leader
  	And there is an activity developer
  	When user sets activity deadline before activity start
  	Then user gets the error message "Illegal time budget"
 	
Scenario: Project leader sets activity deadline before project start
  	Given user is the project leader
  	When user sets activity deadline before project start
  	Then user gets the error message "Activity cant exceed project"
  	
Scenario: Project leader sets activity deadline after project deadline
  	Given user is the project leader
  	When user sets activity deadline after project deadline
  	Then user gets the error message "Activity cant exceed project"
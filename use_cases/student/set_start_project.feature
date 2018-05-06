# Use case og test af Mai-Thi
Feature: Set start for project
    Description: The project leader sets project start. 
    The start can only be changed if the projact has no activities 
    Actors: Project leader
    
Background:
    Given developer is logged in
    And there is a start date
    And there is a deadline

Scenario: Project leader start for project succesfully
    Given there is a project with no activities
  	And user is the project leader
  	When user sets project start 
  	Then project start is set

Scenario: User sets start for project when not project leader
  	Given project is not in the system
  	When user sets project start 
  	Then user gets the error message "Project is not in the system"

Scenario: User sets time budget for project when not project leader
    Given there is a project with no activities
  	And user is not the project leader
  	When user sets project start 
  	Then user gets the error message "Project leader authorization needed"

Scenario: Project leader sets start for a project with an activity
    Given there is a project with an activity
  	And user is the project leader
  	When user sets project start
  	Then user gets the error message "Start can't be set"
  	
Scenario: Project leader sets project start after project deadline
    Given there is a project with no activities
  	And user is the project leader
  	When user sets project start after project deadline
  	Then user gets the error message "Illegal time budget"
  	
Scenario: Developer sets start for project when not logged in
  Given developer is not logged in
  When user sets project start 
  Then user gets the error message "User is not logged in"

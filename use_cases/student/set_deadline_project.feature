# Use case og test af Mai-Thi
Feature: Set project deadline 
    Description: The project leader sets project deadline. 
    The start can only be postponed, or set back if the projact has no activities 
    Actors: Project leader
    
    Background:
    Given developer is logged in
    And there is a start date
    And there is a date between start and deadline
    And there is a deadline

Scenario: Project leader set project deadline succesfully
    Given there is a project with no activities
  	And user is the project leader
  	When user sets new project deadline before project deadline
  	Then project deadline is set back
  	
Scenario: Project leader postpones project deadline succesfully
    Given there is a project with an activity
  	And user is the project leader
  	When user postpones project deadline
  	Then project deadline is postponed
  	
Scenario: User sets project deadline when not project leader
  	Given project is not in the system
  	When user sets project deadline
  	Then user gets the error message "Project is not in the system"

Scenario: User sets project deadline when not project leader
    Given there is a project with no activities
  	And user is not the project leader
  	When user sets project deadline
  	Then user gets the error message "Project leader authorization needed"
  	
Scenario: Project leader sets deadline for a project with an activity
    Given there is a project with an activity
  	And user is the project leader 
  	When user sets new project deadline before project deadline
  	Then user gets the error message "Deadline can only be postponed"

Scenario: Project leader sets project deadline before the start
    Given there is a project with no activities
  	And user is the project leader
  	When user sets project deadline before project start
  	Then user gets the error message "Illegal time budget"
  	
Scenario: Developer sets project deadline when not logged in
	Given developer is not logged in
	When user sets project deadline
	Then user gets the error message "User is not logged in"

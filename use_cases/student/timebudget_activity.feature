# @author Zenia
Feature: Set time budget for activity
    Description: The project leader sets time budget for an activity
    Actors: Project leader
    Background:
    Given there is a project with an activity 
    And there is a start date
    And there is a deadline
    And there is a time between start and deadline

Scenario: Project leader sets time budget for activity successfully
 	Given user is the project leader
  	When user sets time budget for activity
  	Then time budget is set for activity

Scenario: User sets time budget for activity when not project leader
	Given user is not the project leader
	When user sets time budget for activity
	Then user gets the error message "Project leader authorization needed"

Scenario: Project leader sets activity deadline before start
  	Given user is the project leader
  	When user sets deadline before start activity
  	Then user gets the error message "Illegal time budget"
  	
Scenario: Project leader sets activity start after deadline
  	Given user is the project leader
  	When user sets deadline before start activity
  	Then user gets the error message "Illegal time budget"

Scenario: Project leader sets activity start before project start
  	Given user is the project leader
  	And there is a project with an activity
  	When user sets activity start before project start
  	Then user gets the error message "Activity cant exceed project"
  	
#Scenario: Project leader sets activity start after project deadline
#  	Given user is the project leader
#  	And there is a project with an activity
#  	When user sets activity start after project deadline
#  	Then user gets the error message "Activity cant exceed project"
 	
#Scenario: Project leader sets activity deadline before project start
#  	Given user is the project leader
#  	And there is a project with an activity
#  	When user sets activity deadline before project start
#  	Then user gets the error message "Activity cant exceed project"
#  	
#Scenario: Project leader sets activity deadline after project deadline
#  	Given user is the project leader
#  	And there is a project with an activity
#  	When user sets activity deadline after project deadline
#  	Then user gets the error message "Activity cant exceed project"

#Scenario: Project leader sets time budget for activity and update developer succesfully
# 	Given user is the project leader
#  	And there is a project with an activity
#  	And there is an activity developer
#  	When user sets time budget for activity
#  	Then time budget is set for activity
#  	And schedule of developer is up-to date ##omformuler


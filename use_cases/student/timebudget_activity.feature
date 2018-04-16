# @author Zenia
Feature: Set time budget for activity
    Description: The project leader sets time budget for an activity
    Actors: Project leader

Scenario: Project leader sets time budget for activity successfully
 	Given user is the project leader
  	And there is a project with an activity
  	When user sets time budget for activity
  	Then time budget is set for activity

Scenario: User sets time budget for activity when not project leader
	Given user is not the project leader
	And there is a project with an activity
	When user sets time budget for activity
	Then user gets the error message "Project leader authorization needed"
	
Scenario: Project leader sets deadline before the start
  Given user is the project leader
  And there is a project with an activity
  When user sets start after the deadline activity
  Then user gets the error message "Illegal time budget"

Scenario: Project leader sets deadline before the start
  Given user is the project leader
  And there is a project with an activity
  When user sets deadline before start activity
  Then user gets the error message "Illegal time budget"

#Scenario Project leader sets time budget for activity before activity start
#  Given user is the project leader
#  And an activity is part of the project
#  When user sets time budget for activity that exceeds project deadline
#  Then user gets the error message "Activity cant exceed project deadline"

#Scenario: Project leader sets time budget for activity and update developer succesfully
# 	Given user is the project leader
#  	And there is a project with an activity
#  	And there is an activity developer
#  	When user sets time budget for activity
#  	Then time budget is set for activity
#  	And developer is updated ##omformuler


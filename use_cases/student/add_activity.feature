# @author Rikke
Feature: Project leader adds activity to project
    Description:
    Actors: Project leader

Scenario: project leader adds activity to project successfully
  	Given user is the project leader
	And there is a project
  	And there is an activity
  	When user adds activity to project
  	Then activity is part of project

#Scenario: add activity when not project leader
#  	Given user is not the project leader
#  	And there is a project
#  	And there is an activity
#  	When user adds activity to project
#  	Then user gets the error message "Project leader authorization needed"

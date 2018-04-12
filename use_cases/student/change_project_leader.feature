# @author Helena
Feature: Project leader changes project leader
    Description:
    Actors: Project leader, developer

Scenario: Changes project leader successfully
  	Given user is the project leader
  	And there is a project developer
  	When user change project leader
  	Then developer is the new project leader
  	And user is not the project leader anymore

Scenario: Changes project leader when user is not the project leader
  	Given there is a project developer
  	Given user is not the project leader
  	When user change project leader
  	Then user gets the error message "Project leader authorization needed"

Scenario: Changes project leader to someone who is not part of the project
 	Given user is the project leader
  	And developer is not part of the project
  	When user change project leader
 	Then user gets the error message "Developer not found"
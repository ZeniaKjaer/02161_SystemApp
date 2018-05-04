# Use case og test af Helena
Feature: Change project leader
    Description: The project leader gives his status as leader to another developer
    Actors: Project leader

Background: A developer has to be logged in to interact with the SystemApp
	Given developer is logged in

Scenario: Changes project leader successfully
  	Given user is the project leader
  	And there is a project
  	And there is a second project developer
  	When user make second developer project leader
  	Then second developer is the new project leader
  	And user is not the project leader anymore
  	
Scenario: Changes project leader for a project not in the system
  	Given project is not in the system
  	When user change project leader
  	Then user gets the error message "Project is not in the system"

Scenario: Changes project leader when user is not the project leader
  	Given there is a project developer
  	And there is a project
  	And user is not the project leader
  	When user change project leader
  	Then user gets the error message "Project leader authorization needed"

Scenario: Changes project leader to someone who is not part of the project
 	Given user is the project leader
 	And there is a project
  	And developer is not part of the project
  	When user change project leader
 	Then user gets the error message "Developer not found"
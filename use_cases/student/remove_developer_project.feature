# @author Mai-Thi
Feature: Remove developer from project
    Description: The project leader removes a developer from the project
    Actors: Project leader
    
    Background: 
    Given there is a project
    And there is a developer

 Scenario: Removes developer from project successfully
  	Given user is the project leader
  	And there is a project developer
  	When user removes developer from project
  	Then developer is no longer a part of the project

Scenario: Removes developer from project when not the project leader
 	Given user is not the project leader
  	And there is a project developer
  	When user removes developer from project
  	Then user gets the error message "Project leader authorization needed"

Scenario: Project leader removes developer who is not a part of the project
  	Given user is the project leader
  	And developer is not part of the project
  	When user removes developer from project
  	Then user gets the error message "Developer not found"
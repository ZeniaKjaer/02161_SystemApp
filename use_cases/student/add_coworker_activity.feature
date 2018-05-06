# Use case og test af Mai-Thi
Feature: Add co-worker to own activity
    Description: A project developer adds a co-worker to an activity
    Actors: Project developer

Background: A developer has to be logged in to interact with the SystemApp
	Given developer is logged in

Scenario: Developer on activity adds co-worker to activity
  	Given there is a project with an activity
  	And user is working on activity
  	And developer is available
  	When user adds second developer to activity
  	Then second developer is working on activity
  	And second developer has activity marked in her calendar
  	
Scenario: Developer not on activity adds co-worker to activity
  	Given user is not working on activity
  	When user adds developer to activity
  	Then user gets the error message "Project leader authorization needed"

Scenario: Developer on activity adds a co-worker who is already working on activity
  	Given user is working on activity
  	And developer is already working on activity
  	When user adds developer to activity
  	Then user gets the error message "Developer is already working on activity"

Scenario: Developer on activity adds not available co-worker to activity
  	Given there is a project with an activity
  	And user is working on activity
  	And there is a developer 
  	And developer is not available
  	When user adds developer to activity
  	Then user gets the error message "Developer is not available"
  	
Scenario: Developer adds developer to an activity when not logged in
	Given developer is not logged in
	When user adds developer to activity
	Then user gets the error message "User is not logged in"
  	

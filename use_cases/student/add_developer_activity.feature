# @author Zenia
Feature: Add project developer to activity
    Description:  The project leader adds project developer to a project activity
    Actors: Project leader

Scenario: Add developer to activity successfully
  	Given user is the project leader
  	And there is a developer
  	And there is an activity
  	When user adds developer to activity
  	Then developer is working on activity

Scenario: Add developer when not a project leader
  	Given user is not the project leader
  	And there is a developer
  	When user adds developer to activity
  	Then user gets the error message "Project leader authorization needed"

Scenario: Add developer who is already working on activity
  	Given user is the project leader
  	And developer is already working on activity
  	When user adds developer to activity
  	Then user gets the error message "Developer is already working on activity"

#Scenario: Add developer who is not available to activity
#  	Given user is the project leader
#  	And the developer is not available
#  	When user adds developer to activity
#  	Then user gets the error message "Developer has too many activities"


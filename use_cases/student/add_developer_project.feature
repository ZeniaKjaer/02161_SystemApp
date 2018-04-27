# @author Mai-Thi
Feature: Add developer to project
  Description: The project leader adds a developer to the project
  Actors: Project leader
  
#Background: SystemApp has developers
#	Given there is a start date
#	And SystemApp has developers with number of activities in that week
#		| ABCD |  3 |
#		| MTVD |  4 |
#		| HERE |  8 |
#		| ZEKT |  7 |
#		| RITG | 20 |

Scenario: Add developer to project successfully
	Given there is a project
  	And user is the project leader
  	And there is a developer
  	When user adds developer to project
  	Then developer is part of the project

Scenario: Add developer to project when not a project leader
	Given there is a project
  	And user is not the project leader
  	And there is a developer
  	When user adds developer to project
  	Then user gets the error message "Project leader authorization needed"

Scenario: Add developer to project twice
	Given there is a project
  	And user is the project leader
  	And there is a project developer
  	When user adds developer to project
  	Then user gets the error message "User is already part of project"
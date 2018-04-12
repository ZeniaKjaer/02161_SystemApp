#@author Rikke
#
Feature: Project leader removes activity from project
    Description:
    Actors: Project leader
    
Background: SystemApp has developers
	Given SystemApp has developers
		| ABCD |
		| MTVD |
		| HERE |
		| ZEKT |
		| RITG |

Scenario: Project leader removes activity successfully
  Given user is the project leader
  And there is a project
  And there is an activity
  And activity has been added to project
  When user removes activity
  Then activity is not part of project

Scenario: Project leader removes activity that is not part of the project
  Given user is the project leader
  And there is a project
  And there is an activity that is not part of the project
  When user removes activity
  Then user gets the error message "Activity is not part of the project"

Scenario: Removes an activity when not the project leader
  Given there is a project
  And there is an activity
  And activity has been added to project
  And user is not a project leader
  When user removes activity
  Then user gets the error message "Project leader authorization needed"
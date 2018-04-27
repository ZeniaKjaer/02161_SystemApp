#@author Rikke
Feature: Remove activity from project
    Description: The project leader removes activities from the project
    Actors: Project leader
    
#Background: SystemApp has developers
#	Given there is a start date
#	And SystemApp has developers with number of activities in that week
#		| ABCD |  3 |
#		| MTVD |  4 |
#		| HERE |  8 |
#		| ZEKT |  7 |
#		| RITG | 20 |

Scenario: Project leader removes activity successfully
  Given user is the project leader
  And there is a project with an activity
  And there is an activity developer
  When user removes activity
  Then activity is no longer part of project
  #And activity is removed from developer calendar

Scenario: Project leader removes activity that is not part of the project
  Given user is the project leader
  And there is a project
  And activity is not part of the project
  When user removes activity
  Then user gets the error message "Activity is not part of the project"

Scenario: Removes an activity when not the project leader
  Given there is a project with an activity
  And user is not a project leader
  When user removes activity
  Then user gets the error message "Project leader authorization needed"

# @author Zenia
Feature: Get available developers
   Description: The project leader searches and gets a list of available developers
	Actors: Project leader
Background: SystemApp has developers
	Given there is a start date
	And developers in SystemApp has different activitylevel that week
#	And SystemApp has developers with number of activities in that week
#		| ABCD |  3 |
#		| MTVD |  4 |
#		| HERE | 20 |
#		| ZEKT |  7 |
#		| RITG |  0 |

Scenario: Project leader gets available developers succesfully
  	When user ask for all available developers
  	Then user gets a list of all available developers
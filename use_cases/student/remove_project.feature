#@author Zenia
Feature: Remove project
	Description:
	Actors: Project leader

#Scenario: Project leader removes project successfully
#  Given user is the project leader
#  And there is a project
#  #And there is a project developer 
#  When user removes project
#  Then project is removed

#Scenario: Project leader removes project that is not in the system
#  Given user is the project leader
#  And project is not in the system
#  When user removes project
#  Then user gets the error message "Project is not in the system"

Scenario: Removes an activity when not the project leader
  Given there is a project
  And user is not a project leader
  When user removes project
  Then user gets the error message "Project leader authorization needed"
  
  Scenario: Project leader removes project successfully
  Given user is the project leader
  And there is a project with an activity
  And there is an activity developer
  When user removes project
  Then project is removed
  And activity is removed from developer calendar
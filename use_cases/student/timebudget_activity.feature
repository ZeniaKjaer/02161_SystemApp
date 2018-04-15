# @author Zenia
#
#Feature: Set time budget for activity
#    Description: The project leader sets time budget for an activity
#    Actors: Project leader
#
#Scenario: Project leader sets time budget for activity successfully
#  Given user is the project leader
#  And an activity is part of the project
#  When user sets time budget for activity within the project deadline
#  Then the time budget for activity is set
#
#Scenario User sets time budget for activity when not project leader
#  Given user is not the project leader
#  When user sets time budget for activity within the project deadline
#  Then user gets the error message "Project leader authorization needed"
#
#Scenario: Project leader sets time budget for activity wrong
#  Given user is the project leader
#  And an activity is part of the project
#  When user sets deadline before start
#  Then user gets the error message "Illegal time budget"
#
#Scenario Project leader sets time budget for activity before activity start
#  Given user is the project leader
#  And an activity is part of the project
#  When user sets time budget for activity that exceeds project deadline
#  Then user gets the error message "Activity cant exceed project deadline"
# @author Mai-Thi
# 
#Feature: Project leader sets time budget for project
#    Description:
#    Actors: Project leader
#
#Scenario: Project leader sets time budget for project succesfully
#  Given user is the project leader
#  When user sets time budget for project
#  Then the time budget is set for project is set
#
#Scenario: User sets time budget for project when not project leader
#  Given user is not the project leader
#  When user sets time budget for project
#  Then user gets the error message "Project leader authorization needed"
#
#Scenario Project leader sets time budget wrong
#  Given user is the project leader
#  When user sets deadline before the start
#  Then user gets the error message "Illegal time budget"
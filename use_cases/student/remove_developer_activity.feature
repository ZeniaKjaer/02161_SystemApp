# @author Zenia
#
#Feature: Project leader removes developer from activity
#    Description:
#    Actors: Project leader, developer
#
#Scenario: Remove developer on activity successfully
#  	Given user is the project leader
#  	And user is working on activity
#  	When project leader removes developer from activity
#  	Then developer is not working on activity
#
#Scenario: Remove developer from activity when not a project leader
#  	Given user is not the project leader
#  	When project leader removes developer from activity
#  	Then user gets the error message "Project leader authorization needed"
#
#Scenario: Remove developer from activity when developer is not working on activity
#  	Given user is the project leader
#  	And user is already working on activity
#  	When project leader adds developer to activity
#  	Then user gets the error message "Developer not found"

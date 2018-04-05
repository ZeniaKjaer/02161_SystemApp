# @author Helana
#
#Feature: Project developer adds co-worker to activity
#    Description:
#    Actors: Project leader, developer
#
#Scenario: Developer on activity adds co-worker to activity
#  	Given user is working on activity
#  	And developer is not working on activity
#  	And developer is available
#  	When user adds co-worker to activity
#  	Then developer is worker on activity
#
#Scenario Developer not on activity adds co-worker to activity
#  	Given user is not working on activity
#  	When user adds developer to activity
#  	Then user gets the error message "User is not working on activity"
#
#Scenario: Developer on activity adds not available co-worker to activity
#  	Given user is working on activity
#  	And developer is not available
#  	When user adds developer to activity
#  	Then user gets the error message "Developer has too many activities"
#
#Scenario: Developer on activity adds a co-worker who is already working on activity
#  	Given user is working on activity
#  	When user adds developer who is already working on activity
#  	Then user gets the error message "Developer is already working on activity"
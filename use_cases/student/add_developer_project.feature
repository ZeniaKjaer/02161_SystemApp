# @author Mai-Thi
#
#Feature:Project leader adds developer to project
#  Description:
#  Actors: Project leader, developer
#
#Scenario Add developer to project successfully
#  	Given user is the project leader
#  	And there is a developer
#  	When user adds developer to project
#  	Then developer is part of the project
#
#Scenario Add developer to project when not a project leader
#  	Given user is not the project leader
#  	And there is a developer
#  	When user adds developer to project
#  	Then user gets the error message "project leader authorization needed"
# @author Helena
#
#Feature: Project leader changes project leader
#    Description:
#    Actors: Project leader, developer
#
#Scenario: Changes project leader successfully
#  Given user is the project leader
#  When user wants the developer to be the new project leader on the project
#  Then developer is the new project leader
#  And user is not the project leader anymore
#
#Scenario: Changes project leader when user is not the project leader
#  Given user is not the project leader
#  When user wants the developer to be the new project leader on project
#  Then user gets the error message "Project leader authorization needed"
#
#Scenario: Changes project leader to someone who is not part of the project
#  Given user is the project leader
#  When user changes project leader to someone who is not part of the project
#  Then user gets the error message "Developer is not part of the project"
# @author Zenia
Feature: Get available developers
   Description: The project leader searches and gets a list of available developers
	Actors: Project leader
Background: SystemApp has developers
	Given there is a start date
	And developers in SystemApp has different activitylevel that week

Scenario: Project leader gets available developers succesfully
  	When user ask for all available developers
  	Then user gets a sorted list of all available developers
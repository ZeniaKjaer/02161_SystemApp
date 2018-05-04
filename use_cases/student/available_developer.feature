# Use case og test af Zenia
Feature: Get available developers
   	Description: The project leader gets a list of available developers in a given week
	Actors: Project leader

Background: A developer has to be logged in to interact with the SystemApp
	Given developer is logged in

Scenario: Project leader gets available developers succesfully
	Given there is a start date
	And developers in SystemApp has different activitylevel that week
  	When user ask for all available developers
 	Then user gets a sorted list of all available developers
  	
Scenario: Project leader gets available developers in an illegal week
	Given there is an illegal week
  	When user ask for all available developers
 	Then user gets the error message "Illegal week"
 
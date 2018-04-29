# @author Mai-Thi
Feature: Logout
    Description: User logs out of the system
    Actors: Developer
    
Scenario: Developer logs out succesfully
  	Given developer is logged in
  	When developer logs out
  	Then developer is logged out

# @author Mai-Thi
Feature: Login
    Description: User logs into and out of the system
    Actors: Developer

Scenario: Developer logs on with initials succesfully
  	Given developer with initials "ABCD" is in the system
  	And developer is not logged in
  	When developer enter initials "ABCD"
  	Then developer with initials "ABCD" is logged in

Scenario: Developer logs on with wrong initials
	Given developer is not logged in
	And developer with initials "EFGH" is not in the system
  	When developer enter initials "EFGH"
  	Then user gets the error message "Wrong initials"
  	And developer is logged out
	
Scenario: Developer logs on when someone else is aldready logged in  
	Given developer is logged in
	When developer enter initials "ABCD"
	Then user gets the error message "Another user is already logged in"
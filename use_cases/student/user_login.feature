# @author Mai-Thi
Feature: User logs on
    Description: User logs into and out of the system
    Actors: Developer
    
Background: SystemApp has developers
	Given SystemApp has developers
		| ABCD |
		| MTVD |
		| HERE |
		| ZEKT |
		| RITG |

Scenario: developer logs on with initials
  	Given developer with initials "ABCD" is in the system
  	And developer is not logged in
  	When developer enter initials "ABCD"
  	Then developer with initials "ABCD" is logged in

Scenario: developer logs on with wrong initials
	Given developer is not logged in
	And developer with initials "EFGH" is not in the system
  	When developer enter initials "EFGH"
  	Then user gets the error message "Wrong initials"
  	And developer is logged out

Scenario: developer logs out
  	Given developer is logged in
  	When developer logs out
  	Then developer is logged out
  	
Scenario: developer logs on when someone else is aldready logged in  
	Given developer is logged in
	When developer enter initials "ABCD"
	Then user gets the error message "Another user is already logged in"	
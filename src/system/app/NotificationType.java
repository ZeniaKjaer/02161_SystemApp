package system.app;

/**
 * This enumeration is used by the SystemApp to notify its observer
 * which aspect of the system have changed.
 * @author Mai-Thi
 */

public enum NotificationType { 
	ADD_PROJECT, 
	REMOVE_PROJECT,
	CHANGE_PROJECT_LEADER, 
	ADD_DEVELOPER, 
	REMOVE_DEVELOPER, 
	TIME_BUDGET, 
	ADD_ACTIVITY, 
	REMOVE_ACTIVITY, 
	LOGIN, 
	LOGOUT}


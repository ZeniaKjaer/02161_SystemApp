package dtu.library.acceptance_tests;

import system.app.Activity;

public class ActivityHelper {

	Activity activity;
	public ActivityHelper () {
	}

	public Activity getActivity() {
		if(activity == null) {
			activity = new Activity("en aktivitet");
		}
		return activity;
	}
}



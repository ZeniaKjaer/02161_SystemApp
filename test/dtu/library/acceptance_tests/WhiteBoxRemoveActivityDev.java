package dtu.library.acceptance_tests;

import static org.junit.Assert.assertFalse;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import system.app.Activity;
import system.app.Developer;
import system.app.OperationNotAllowedException;
import system.app.Project;
import system.app.SystemApp;
/**
 * 
 * @author 
 */
public class WhiteBoxRemoveActivityDev {
	SystemApp sysApp = new SystemApp();
	Project proj = new Project("lead", "projId1", "proj");
	Developer lead = new Developer("lead");
	Developer devl = new Developer("devl");
	Activity acti = new Activity("acti");
	
	
	@Rule
    public ExpectedException expectedException = ExpectedException.none();

// Tester om developers er tilføjet til activity
//	@Test
//	  public void testDummy() throws OperationNotAllowedException {
//		sysApp.addDeveloper(lead);
//		sysApp.addDeveloper(devl);
//		sysApp.userLogin("lead");
//		sysApp.addProject(proj);
//		sysApp.addActivity(proj, acti);
//		sysApp.addActivityDev(proj, acti, devl);
//		assertTrue(acti.getActivityDevelopers().contains(devl));
//	}
	
	@Test
	  public void testInputSetA() throws OperationNotAllowedException {
		sysApp.addDeveloper(lead);
		sysApp.addDeveloper(devl);
		sysApp.userLogin("lead");
		sysApp.addProject(proj);
		sysApp.addActivity(proj, acti);
		sysApp.addActivityDev(proj, acti, devl);
		sysApp.removeActivityDev(proj, acti, devl);
		assertFalse(acti.getActivityDevelopers().contains(devl));
	  }
	
	@Test
	  public void testInputSetB() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("Project leader authorization needed");
		sysApp.addDeveloper(lead);
		sysApp.addDeveloper(devl);
		sysApp.userLogin("lead");
		sysApp.addProject(proj);
		sysApp.addActivity(proj, acti);
		sysApp.addActivityDev(proj, acti, devl);
		sysApp.userLogout();
		sysApp.userLogin("devl");
		sysApp.removeActivityDev(proj, acti, devl);
	  }
	
	@Test
	  public void testInputSetC() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("Activity not found");
		sysApp.addDeveloper(lead);
		sysApp.addDeveloper(devl);
		sysApp.userLogin("lead");
		sysApp.addProject(proj);
		sysApp.removeActivityDev(proj, acti, devl);
	}
	
	@Test
	  public void testInputSetD() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("Developer not found");
		sysApp.addDeveloper(lead);
		sysApp.userLogin("lead");
		sysApp.addProject(proj);
		sysApp.addActivity(proj, acti);
		sysApp.removeActivityDev(proj, acti, devl);
	}
}

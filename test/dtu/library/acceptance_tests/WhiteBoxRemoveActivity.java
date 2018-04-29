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
public class WhiteBoxRemoveActivity {
	SystemApp sysApp = new SystemApp();
	Project proj = new Project("lead", "projId1", "proj");
	Developer lead = new Developer("lead");
	Developer devl = new Developer("devl");
	Activity acti = new Activity("acti");
	
	
	@Rule
    public ExpectedException expectedException = ExpectedException.none();
	
	@Test
	  public void testInputSetA() throws OperationNotAllowedException {
		sysApp.addDeveloper(lead);
		sysApp.userLogin("lead");
		sysApp.addProject(proj);
		sysApp.addActivity(proj, acti);
		sysApp.removeActivity(proj, acti);
		assertFalse(proj.getProjectActivities().contains(acti));
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
		sysApp.userLogout();
		sysApp.userLogin("devl");
		sysApp.removeActivity(proj, acti);
	  }
	
	@Test
	  public void testInputSetC() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("Activity is not part of the project");
		sysApp.addDeveloper(lead);
		sysApp.userLogin("lead");
		sysApp.addProject(proj);
		sysApp.removeActivity(proj, acti);	
	}
	
	@Test
	  public void testInputSetD() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("Project is not in the system");
		sysApp.addDeveloper(lead);
		sysApp.userLogin("lead");
		sysApp.removeActivity(proj, acti);
	}
	
}

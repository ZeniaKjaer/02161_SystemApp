package dtu.library.acceptance_tests;

import static org.junit.Assert.assertTrue;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import system.app.Developer;
import system.app.OperationNotAllowedException;
import system.app.Project;
import system.app.SystemApp;

public class WhiteBoxAddProjDev {
	SystemApp sysApp = new SystemApp();
	
	Developer devl = new Developer("Devl");
	Developer lead = new Developer("Lead");
	
	Project leadProj = new Project("Lead", "projId1", "inSys");
	Project notLeadProj = new Project("Devl", "projId2", "nSys");
	
	@Rule
    public ExpectedException expectedException = ExpectedException.none();
	
	@Test
	  public void testInputSetA() throws OperationNotAllowedException {
		sysApp.getDevelopers().add(lead);
		sysApp.getDevelopers().add(devl);
		sysApp.userLogin("Lead");
		sysApp.addProject(leadProj);
		sysApp.addProjectDev(leadProj, devl);
		assertTrue(sysApp.getDevelopers().contains(devl));
	  }
	
	@Test
	  public void testInputSetB() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("Developer is not in the system");
		sysApp.getDevelopers().add(lead);
		sysApp.userLogin("Lead");
		sysApp.addProject(leadProj);
		sysApp.addProjectDev(leadProj, devl);
	  }
	
	@Test
	public void testInputSetC() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("User is already part of project");
		sysApp.getDevelopers().add(lead);
		sysApp.getDevelopers().add(devl);
		sysApp.userLogin("Lead");
		sysApp.addProject(leadProj);
		sysApp.addProjectDev(leadProj, devl);
		sysApp.addProjectDev(leadProj, devl);
	}
	
	@Test
	  public void testInputSetD() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("Project is not in the system");
		sysApp.getDevelopers().add(lead);
		sysApp.getDevelopers().add(devl);
		sysApp.userLogin("Lead");
		sysApp.addProjectDev(leadProj, devl);
	  }
	
	@Test
	  public void testInputSetE() throws OperationNotAllowedException {
		expectedException.expect(OperationNotAllowedException.class);
        expectedException.expectMessage("Project leader authorization needed");
		sysApp.getDevelopers().add(lead);
		sysApp.getDevelopers().add(devl);
		sysApp.userLogin("devl");
		sysApp.addProject(notLeadProj);
		sysApp.userLogout();
		sysApp.userLogin("Lead");
		sysApp.addProjectDev(notLeadProj, devl);
	  }

}

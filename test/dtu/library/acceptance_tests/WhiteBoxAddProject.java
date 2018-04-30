package dtu.library.acceptance_tests;

import static org.junit.Assert.assertTrue;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import system.app.OperationNotAllowedException;
import system.app.Project;
import system.app.SystemApp;
/**
 * 
 * @author 
 */
public class WhiteBoxAddProject {
	SystemApp sysApp = new SystemApp();
		Project proj1 = new Project("abcd", "projId1", "nSys");
		Project proj2 = new Project("Lead", "projId2", "inSys1");
		Project proj3 = new Project("Lead", "projId3", "inSys2");
		
		@Rule
	    public ExpectedException expectedException = ExpectedException.none();
		
		@Test
		  public void testInputSetA() throws OperationNotAllowedException {
			sysApp.addProject(proj1);
			assertTrue(sysApp.getProjects().contains(proj1));
		  }
		
		@Test
		  public void testInputSetB() throws OperationNotAllowedException {
			sysApp.addProject(proj2);
			sysApp.addProject(proj3);
			sysApp.addProject(proj1);
			assertTrue(sysApp.getProjects().contains(proj1));
		  }
		
		@Test
		  public void testInputSetC() throws OperationNotAllowedException {
			expectedException.expect(OperationNotAllowedException.class);
	        expectedException.expectMessage("Illegal project name");
			sysApp.addProject(proj1);
			sysApp.addProject(proj1);
		}
		
		@Test
		  public void testInputSetD() throws OperationNotAllowedException {
			expectedException.expect(OperationNotAllowedException.class);
	        expectedException.expectMessage("Illegal project name");
			sysApp.addProject(proj2);
			sysApp.addProject(proj1);
			sysApp.addProject(proj3);
			sysApp.addProject(proj1);
		}
		

}

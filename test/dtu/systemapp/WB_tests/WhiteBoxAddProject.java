package dtu.systemapp.WB_tests;

import static org.junit.Assert.assertTrue;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import system.app.Developer;
import system.app.OperationNotAllowedException;
import system.app.Project;
import system.app.SystemApp;
/**
 * 
 * @author Rikke
 */
public class WhiteBoxAddProject {
	SystemApp sysApp = new SystemApp();
		Project proj1 = new Project("abcd", "nSys");
		Project proj2 = new Project("lead", "inSys1");
		Project proj3 = new Project("lead", "inSys2");
		Developer devl = new Developer("devl");
		Developer lead = new Developer("lead");
		
		@Rule
	    public ExpectedException expectedException = ExpectedException.none();
		
		@Test
		  public void testInputSetA() throws OperationNotAllowedException {
			sysApp.addDeveloper(devl);
	        sysApp.userLogin("devl");
			sysApp.addProject(proj1);
			assertTrue(sysApp.getProjects().contains(proj1));
			assertTrue(proj1.getProjectDevelopers().contains(devl));
		  }
		
		@Test
		  public void testInputSetB() throws OperationNotAllowedException {
			sysApp.addDeveloper(devl);
	        sysApp.userLogin("devl");
			sysApp.addProject(proj2);
			sysApp.addProject(proj3);
			sysApp.addProject(proj1);
			assertTrue(sysApp.getProjects().contains(proj1));
			assertTrue(proj1.getProjectDevelopers().contains(devl));
		  }
		
		@Test
		  public void testInputSetC() throws OperationNotAllowedException {
			sysApp.addDeveloper(lead);
	        sysApp.userLogin("lead");
			sysApp.addProject(proj1);
			try {
				sysApp.addProject(proj1);
			} catch( OperationNotAllowedException e) {
				e.getMessage().equals("Illegal project name");
			}		
		}
		
		@Test
		  public void testInputSetD() throws OperationNotAllowedException {
			expectedException.expect(OperationNotAllowedException.class);
	        expectedException.expectMessage("Illegal project name");
	        sysApp.addDeveloper(lead);
	        sysApp.userLogin("lead");
			sysApp.addProject(proj2);
			sysApp.addProject(proj1);
			sysApp.addProject(proj3);
			sysApp.addProject(proj1);
		}
		
		public void testInputSetE() throws OperationNotAllowedException {
			expectedException.expect(OperationNotAllowedException.class);
	        expectedException.expectMessage("User is not logged in");
	        sysApp.addProject(proj1);
		}
}

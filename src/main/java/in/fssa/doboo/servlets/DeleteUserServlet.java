package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import in.fssa.doboo.exception.ServiceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class DeleteUserServlet
 */
@WebServlet("/user/delete")
public class DeleteUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
UserEntity user = new UserEntity();
		
		try {
			UserService userService = new UserService();
			String userid = request.getParameter("userid");
			
			int id = Integer.parseInt(userid);
			userService.deleteUser(id);
			
			response.sendRedirect(request.getContextPath() +"/users" );
		} catch (ValidationException e) {
			e.printStackTrace();
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println(e.getMessage());
		} catch (ServiceException e) {
			e.printStackTrace();
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println(e.getMessage());
		}
	}
}
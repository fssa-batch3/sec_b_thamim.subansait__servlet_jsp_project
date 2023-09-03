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
 * Servlet implementation class UpdateUserServlet
 */
@WebServlet("/user/update")
public class UpdateUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UserEntity user = new UserEntity();
		
		try {
		
		if(request.getParameter("name") == null || request.getParameter("name").isEmpty()) {
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println("Name cannot be null or empty");
		} else {
			user.setName(request.getParameter("name"));
		}
		
		if(request.getParameter("artistName") == null || request.getParameter("artistName").isEmpty()) {
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println("artistName cannot be null or empty");
		} else {
			user.setArtistName(request.getParameter("artistName"));
		}
		
		if(request.getParameter("password") == null || request.getParameter("password").isEmpty()) {
			PrintWriter consoleOutput = new PrintWriter(System.out);
			consoleOutput.println("Name cannot be null or empty");
		} else {
			user.setPassword(request.getParameter("password"));
		}
		
			
		user.setEmail(request.getParameter("email"));
		user.setDob(request.getParameter("dob"));
		
		UserService userService = new UserService();
		
		String idParams = request.getParameter("userid");
		
		int id = Integer.parseInt(idParams);
		
		userService.updateUser(id, user);
		
		response.sendRedirect("profile");
		
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

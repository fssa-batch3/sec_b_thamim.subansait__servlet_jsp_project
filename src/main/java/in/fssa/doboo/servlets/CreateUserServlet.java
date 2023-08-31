package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
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
 * Servlet implementation class CreateUser
 */
@WebServlet("/user/create")
public class CreateUserServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
		
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UserService user = new UserService();
		UserEntity newUser = new UserEntity();
		newUser.setName(request.getParameter("name"));
		newUser.setEmail(request.getParameter("email"));
		newUser.setPassword(request.getParameter("password"));
		newUser.setRole(request.getParameter("role"));
		newUser.setArtistName(request.getParameter("artist_name"));
		newUser.setDob(request.getParameter("dob"));
		PrintWriter out = response.getWriter();
		try {
			user.createUser(newUser);
		out.println("user successfully created");
		response.sendRedirect(request.getContextPath() + "/get_all_user.jsp");
		} catch (ServiceException | ValidationException e) {
			e.printStackTrace();
			out.println(e.getMessage());
		}
		
	}

}

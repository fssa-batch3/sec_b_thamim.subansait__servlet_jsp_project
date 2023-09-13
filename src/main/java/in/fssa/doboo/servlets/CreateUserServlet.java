package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import in.fssa.doboo.exception.ServiceException;
import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.ResponseEntity;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class CreateUser
 */
@WebServlet("/user/create")
public class CreateUserServlet extends HttpServlet {
	
	
	
	private static final long serialVersionUID = 1L;
	
	
		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			RequestDispatcher rd = request.getRequestDispatcher("/create_user.jsp");
			rd.forward(request, response);
		}
		
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		 response.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your allowed origin(s)
	     response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	     response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		
		UserService user = new UserService();
		UserEntity newUser = new UserEntity();
		newUser.setName(request.getParameter("name"));
		System.out.println(newUser.getName());
		newUser.setEmail(request.getParameter("email"));
		newUser.setPassword(request.getParameter("password"));
		newUser.setRole(request.getParameter("role"));
		newUser.setArtistName(request.getParameter("artist_name"));
		newUser.setDob(request.getParameter("dob"));
		System.out.println(newUser.getDob());
		PrintWriter out = response.getWriter();
		try {
			user.createUser(newUser);
		ResponseEntity res = new ResponseEntity();
		res.setStatus(200);
		res.setData("success");
		res.setMessage("User created successfully");
//	
		Gson gson = new Gson();
		String responseJson = gson.toJson(res);
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(responseJson);
		
//		response.sendRedirect("/dobooweb/user/login");
		} catch (ServiceException | ValidationException e) {
			e.printStackTrace();
			ResponseEntity res = new ResponseEntity();
			res.setStatus(500);
			res.setData("failed");
			res.setMessage(e.getMessage());
			Gson gson = new Gson();
			String responseJson = gson.toJson(res);
			response.setContentType("application/json");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(responseJson);
//			 request.setAttribute("errorMessage", "An error occurred: " + e.getMessage());
//			 RequestDispatcher dispatcher = request.getRequestDispatcher("/error");
//		     dispatcher.forward(request, response);
//			out.println(e.getMessage());
		}
		
	}

}
